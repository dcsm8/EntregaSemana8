Feature: Crear un nuevo post. 

@user1 @web
Scenario: Como primer usuario creo un nuevo post 
    Given I navigate to page "http://localhost::2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter post section
    And I wait for 2 seconds
    And I enter new post
    And I wait for 2 seconds
    And I enter new post title
    And I wait for 2 seconds
    And I enter text "New Post"
    And I wait for 2 seconds
    And I enter new post body
    And I wait for 2 seconds
    And I enter text "New Post Body"
    And I wait for 2 seconds
    And I select publish
    And I wait for 2 seconds
    And I confirm publish new post
    And I wait for 2 seconds
    And I confirm modal confirm publish new post
    And I wait for 2 seconds
    And I go back to post
    And I wait for 15 seconds