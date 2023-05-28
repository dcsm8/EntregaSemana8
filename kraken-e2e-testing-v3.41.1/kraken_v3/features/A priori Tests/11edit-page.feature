Feature: Editar una página existente. 

@user1 @web
Scenario: Como primer usuario edito una pagina existente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter page section
    And I wait for 2 seconds
    And I select the first page
    And I wait for 2 seconds
    And I clear page name
    And I wait for 2 seconds
    And I enter text "Edited page"
    And I wait for 2 seconds
    And I clear page description
    And I wait for 2 seconds
    And I enter text "Edited First page Body"
    And I wait for 2 seconds
    And I click publish
    And I wait for 2 seconds
    And I confirm publish
    And I wait for 2 seconds
    And I go back to page
    And I wait for 15 seconds