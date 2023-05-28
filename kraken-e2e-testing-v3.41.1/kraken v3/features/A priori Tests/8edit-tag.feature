Feature: Editar un tag existente. 

@user1 @web
Scenario: Como primer usuario edito un tag existente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter tag section
    And I wait for 2 seconds
    And I select the first tag
    And I wait for 2 seconds
    And I clear tag name
    And I enter text "Edit Tag"
    And I wait for 2 seconds
    And I enter new tag slug
    And I wait for 2 seconds
    And I clear tag description
    And I enter text "Edit Tag description"
    And I wait for 2 seconds
    And I select save
    And I wait for 2 seconds
    And I go back to tag page
    And I wait for 10 seconds