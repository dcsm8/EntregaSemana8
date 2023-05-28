Feature: Crear unanueva label para members

@user1 @web
Scenario: Como primer usuario creo un nuevo label
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter Member section
    And I wait for 2 seconds
    And I click all label on members
    And I wait for 1 seconds
    And I click add label on members
    And I wait for 1 seconds
    And I click label name on members
    And I enter text "$string_1"
    And I wait for 1 seconds
    And I click save  label name on members
    And I wait for 1 seconds
