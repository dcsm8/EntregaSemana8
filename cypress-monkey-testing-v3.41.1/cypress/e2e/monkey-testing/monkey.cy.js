import Chance from "chance";
import { createHorde } from "gremlins.js";

const seed = "uniandes";

const login = () => {
  cy.get("#ember7").type("dc.sanchezm1@uniandes.edu.co");
  cy.get("#ember9").type("$ArQ^P$Unuzj69");
  cy.get("#ember12").click();
  cy.wait(1000);
};

describe("Monkey testing Uniandes", () => {
  let horde;
  beforeEach(() => {
    cy.viewport("iphone-6");
    return cy.visit("/ghost").then(() => {
      login();
      cy.window().then((pageWindow) => {
        horde = createHorde({
          window: pageWindow,
          randomizer: new Chance(seed),
        });
      });
    });
  });

  it(`should test admin design page`, () => {
    cy.viewport("iphone-6");
    cy.visit("/ghost/#/settings/design");
    return cy.wrap(horde.unleash()).then(() => {});
  });

  it(`should test admin post editor`, () => {
    cy.viewport("iphone-7");
    cy.visit("/ghost/#/editor/post");
    return cy.wrap(horde.unleash()).then(() => {});
  });

  it(`should test admin page editor`, () => {
    cy.viewport("iphone-8");
    cy.visit("/ghost/#/editor/page");
    return cy.wrap(horde.unleash()).then(() => {});
  });

  it(`should test admin tag editor`, () => {
    cy.viewport("iphone-x");
    cy.visit("/ghost/#/tags/new");
    return cy.wrap(horde.unleash()).then(() => {});
  });

  it(`should test admin ghost profile page`, () => {
    cy.viewport("ipad-2");
    cy.visit("/ghost/#/staff/ghost");
    return cy.wrap(horde.unleash()).then(() => {});
  });
});
