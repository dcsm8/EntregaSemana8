Feature: Crear un nuevo tag. 

@user1 @web
Scenario: Como primer usuario creo un nuevo tag
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter tag section
    And I wait for 2 seconds
    And I enter new tag
    And I wait for 2 seconds
    And I enter new tag name
    And I enter text "New Tag"
    And I wait for 2 seconds
    And I enter new tag slug
    And I wait for 2 seconds
    And I enter new tag description
    And I enter text "New Tag"
    And I wait for 2 seconds
    And I select save
    And I wait for 10 seconds
