Feature: Editar un post existente. 

@user1 @web
Scenario: Como primer usuario edito un post existente
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter post section
    And I wait for 2 seconds
    And I select the first post
    And I wait for 2 seconds
    And I clear post title
    And I enter text "Edited Post"
    And I wait for 2 seconds
    And I clear post body
    And I enter text "Edited Post Body"
    And I wait for 2 seconds
    And I select publish
    And I wait for 2 seconds
    And I update the first post
    And I wait for 2 seconds
    And I go back to post
    And I wait for 20 seconds