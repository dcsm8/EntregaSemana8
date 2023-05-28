import { PostDataGenerator } from "../../data-generators/post-data-generator";
import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/login-page";
import { PostPage } from "../../page-objects/posts-page";

test.describe("Posts Random", () => {
  let loginPage: LoginPage;
  let postPage: PostPage;

  test.beforeEach(async ({ page }) => {
    // Given
    loginPage = new LoginPage(page);
    postPage = new PostPage(page);
    postPage.testName = "before-each";
    await loginPage.navigate();
    await loginPage.login();
  });

  test("Create post with random data", async () => {
    postPage.testName = "create-page";
    // Given
    const { title, content } = PostDataGenerator.getRandomPostData();
    const postId = await postPage.createPost(title, content);

    // When
    await postPage.createPost(title, content);

    // Then
    await postPage.expectNotificationShown("Published");
    await postPage.expectPostStatus("Published");
  });

  test("Update post with random data", async () => {
    postPage.testName = "update-post";
    // Given
    const { title, content } = PostDataGenerator.getRandomPostData();
    const postId = await postPage.createPost(title, content);
    const updatedPost = PostDataGenerator.getRandomPostData();

    // When
    await postPage.updatePostById(postId, updatedPost);

    // Then
    await postPage.expectNotificationShown("Updated");
  });

  test("Delete post with random data", async () => {
    postPage.testName = "delete-post";

    // Given
    const { title, content } = PostDataGenerator.getRandomPostData();
    const postId = await postPage.createPost(title, content);

    // When
    await postPage.deletePostById(postId);
    await postPage.navigateToPostById(postId);

    // Then
    const errorCode = await postPage.getErrorMessageText();
    expect(errorCode).toBe("404");
  });

  test("Read post with random data", async () => {
    postPage.testName = "read-post";

    // Given
    const { title, content } = PostDataGenerator.getRandomPostData();
    const postId = await postPage.createPost(title, content);

    // When
    await postPage.navigateToPostById(postId);

    // Then
    const postTitle = await postPage.getPostTitle();
    const postContent = await postPage.getPostContent();
    expect(postTitle).toBe(title);
    expect(postContent).toBe(content);
  });

  test("Create draft with random data", async () => {
    postPage.testName = "create-draft";

    // Given
    const { title, content } = PostDataGenerator.getRandomPostData();
    const postId = await postPage.createPost(title, content);

    // When
    await postPage.navigateToPostEditor();
    await postPage.fillPostTitle(title);
    await postPage.fillPostContent(content);

    // Then
    await postPage.expectPostStatus("Draft");
  });

  test("Create post - boundary", async () => {
    postPage.testName = "create-post-boundary";
    // Given
    const { title: boundaryTitle, content: boundaryContent } = PostDataGenerator.getBoundaryPostData();

    // When
    await postPage.createPost(boundaryTitle, boundaryContent);

    // Then
    await postPage.expectNotificationShown("Published");
    await postPage.expectPostStatus("Published");
  });

  test("Create post - beyond boundary", async () => {
    postPage.testName = "create-post-beyond-boundary";
    // Given
    const publishMenuButton = postPage.page.locator(".gh-publishmenu-button");
    const { title: beyondBoundaryTitle, content: beyondBoundaryContent } =
      PostDataGenerator.getBoundaryPostDataPlusOne();

    // When
    await postPage.navigateToPostEditor();
    await postPage.fillPostTitle(beyondBoundaryTitle);
    await postPage.fillPostContent(beyondBoundaryContent);

    // Then
    await expect(publishMenuButton).not.toBeVisible();
  });

  test("Update post - boundary", async () => {
    postPage.testName = "update-post-boundary";
    // Given
    const { title: boundaryTitle, content: boundaryContent } = PostDataGenerator.getValidPostData();
    const postId = await postPage.createPost(boundaryTitle, boundaryContent);
    const updatedPost = PostDataGenerator.getBoundaryPostData();

    // When
    await postPage.updatePostById(postId, updatedPost);

    // Then
    await postPage.expectNotificationShown("Updated");
  });
});
