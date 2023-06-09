import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/login-page";
import { PagesPage } from "../../page-objects/pages-page";
import { PageDataGenerator } from "../../data-generators/page-data-generator";

test.describe("Pages Random", () => {
  let loginPage: LoginPage;
  let pagesPage: PagesPage;

  // Random data generation
  const { title, content } = PageDataGenerator.getRandomPageData();

  test.beforeEach(async ({ page }) => {
    // Given
    loginPage = new LoginPage(page);
    pagesPage = new PagesPage(page);
    pagesPage.testName = "before-each";
    await loginPage.navigate();
    await loginPage.login();
  });

  test("Create page with random data", async () => {
    pagesPage.testName = "create-page";

    // When
    await pagesPage.createPage(title, content);

    // Then
    await pagesPage.expectNotificationShown("Published");
    await pagesPage.expectPageStatus("Published");
  });

  test("Update page with random data", async () => {
    pagesPage.testName = "update-page";

    // Given
    const pageId = await pagesPage.createPage(title, content);
    const updatedPage = PageDataGenerator.getRandomPageData();

    // When
    await pagesPage.updatePageById(pageId, updatedPage);

    // Then
    await pagesPage.expectNotificationShown("Updated");
  });

  test("Delete page with random data", async () => {
    pagesPage.testName = "delete-page";

    // Given
    const pageId = await pagesPage.createPage(title, content);

    // When
    await pagesPage.deletePageById(pageId);
    await pagesPage.navigateToPageById(pageId);

    // Then
    const errorCode = await pagesPage.getErrorMessageText();
    expect(errorCode).toBe("404");
  });

  test("Read page with random data", async () => {
    pagesPage.testName = "read-page";

    // Given
    const pageId = await pagesPage.createPage(title, content);

    // When
    await pagesPage.navigateToPageById(pageId);

    // Then
    const pageTitle = await pagesPage.getPageTitle();
    const pageContent = await pagesPage.getPageContent();
    expect(pageTitle).toBe(title);
    expect(pageContent).toBe(content);
  });

  test("Create draft with random data", async () => {
    pagesPage.testName = "create-draft";

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(title);
    await pagesPage.fillPageContent(content);

    // Then
    await pagesPage.expectPageStatus("Draft");
  });

  test("Create page with title at boundary", async () => {
    pagesPage.testName = "create-page-title-boundary";

    // Given
    const { content } = PageDataGenerator.getValidPageData();
    const { title } = PageDataGenerator.getBoundaryPageData();

    // When
    await pagesPage.createPage(title, content);

    // Then
    await pagesPage.expectNotificationShown("Published");
    await pagesPage.expectPageStatus("Published");
  });

  test("Create page with title beyond boundary", async () => {
    pagesPage.testName = "create-page-title-beyond-boundary";

    // Given
    const publishMenuButton = pagesPage.page.locator(".gh-publishmenu-button");
    const { content } = PageDataGenerator.getValidPageData();
    const { title } = PageDataGenerator.getBoundaryPageDataPlusOne();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(title);
    await pagesPage.fillPageContent(content);

    // Then
    await expect(publishMenuButton).not.toBeVisible();
  });

  test("Update page with valid data - title at boundary", async () => {
    pagesPage.testName = "update-page-title-boundary";

    // Given
    const { content, title } = PageDataGenerator.getValidPageData();
    const pageId = await pagesPage.createPage(title, content);    
    const updatedPage = PageDataGenerator.getBoundaryPageData();

    // When
    await pagesPage.updatePageById(pageId, updatedPage);

    // Then
    await pagesPage.expectNotificationShown("Updated");
  });

  test("Update page with valid data - title beyond boundary", async () => {
    pagesPage.testName = "update-page-title-beyond-boundary";

    // Given
    const { content, title } = PageDataGenerator.getValidPageData();
    const pageId = await pagesPage.createPage(title, content);  
    const updatedPage = PageDataGenerator.getBoundaryPageDataPlusOne();

    // When
    await pagesPage.updatePageById(pageId, updatedPage);

    // Then
    await pagesPage.expectTitleUpdateErrorMessage();
  });

  test("Delete page with valid data - boundary", async () => {
    pagesPage.testName = "delete-page-boundary";

    // Given
    const { title, content } = PageDataGenerator.getBoundaryPageData();
    const pageId = await pagesPage.createPage(title, content);

    // When
    await pagesPage.deletePageById(pageId);
    await pagesPage.navigateToPageById(pageId);

    // Then
    const errorCode = await pagesPage.getErrorMessageText();
    expect(errorCode).toBe("404");
  });

  test("Read page with valid data - title at boundary", async () => {
    pagesPage.testName = "read-page-title-boundary";

    // Given
    const { title, content } = PageDataGenerator.getBoundaryPageData();
    const pageId = await pagesPage.createPage(title, content);

    // When
    await pagesPage.navigateToPageById(pageId);

    // Then
    const pageTitle = await pagesPage.getPageTitle();
    const pageContent = await pagesPage.getPageContent();
    expect(pageTitle).toBe(title);
    expect(pageContent).toBe(content);
  });

  test("Create draft with valid data - boundary", async () => {
    pagesPage.testName = "create-draft-boundary";

    // Given
    const { title, content } = PageDataGenerator.getBoundaryPageData();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(title);
    await pagesPage.fillPageContent(content);

    // Then
    await pagesPage.expectPageStatus("Draft");
  });

  test("Fail create draft with data beyond boundary", async () => {
    pagesPage.testName = "create-draft-boundary";

    // Given
    const { title, content } = PageDataGenerator.getBoundaryPageDataPlusOne();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(title);
    await pagesPage.fillPageContent(content);

    // Then
    await pagesPage.expectPageStatus("New");
  });

  test("Create draft with meta title boundary", async () => {
    pagesPage.testName = "create-draft-boundary";

    // Given
    const { title: pageTitle, content } = PageDataGenerator.getBoundaryPageData();
    const { title: metaTitle } = PageDataGenerator.getBoundaryPageMetaData();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(pageTitle);
    await pagesPage.fillPageContent(content);
    await pagesPage.fillMetadata(metaTitle, "");

    // Then
    await pagesPage.expectTitleWordCount("70", "rgb(159, 187, 88)");
  });

  test("Create draft with meta title beyond boundary", async () => {
    pagesPage.testName = "create-draft-boundary";

    // Given
    const { title: pageTitle, content } = PageDataGenerator.getBoundaryPageData();
    const { title: metaTitle } = PageDataGenerator.getBoundaryPageMetaDataPlusOne();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(pageTitle);
    await pagesPage.fillPageContent(content);
    await pagesPage.fillMetadata(metaTitle, "");

    // Then
    await pagesPage.expectTitleWordCount("71", "rgb(226, 84, 64)");
  });

  test("Create draft with meta description boundary", async () => {
    pagesPage.testName = "create-draft-boundary";

    // Given
    const { title: pageTitle, content } = PageDataGenerator.getBoundaryPageData();
    const { description } = PageDataGenerator.getBoundaryPageMetaData();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(pageTitle);
    await pagesPage.fillPageContent(content);
    await pagesPage.fillMetadata("", description);

    // Then
    await pagesPage.expectDescriptionWordCount("156", "rgb(159, 187, 88)");
  });

  test("Create draft with meta description beyond boundary", async () => {
    pagesPage.testName = "create-draft-boundary";

    // Given
    const { title: pageTitle, content } = PageDataGenerator.getBoundaryPageData();
    const { description } = PageDataGenerator.getBoundaryPageMetaDataPlusOne();

    // When
    await pagesPage.navigateToPageEditor();
    await pagesPage.fillPageTitle(pageTitle);
    await pagesPage.fillPageContent(content);
    await pagesPage.fillMetadata("", description);

    // Then
    await pagesPage.expectDescriptionWordCount("157", "rgb(226, 84, 64)");
  });
});
