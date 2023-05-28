Feature: Insertar codigo custom 

@user1 @web
Scenario: Insertar codigo custom 
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
    And I enter text "NewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNewPOsterNew"
    And I wait for 2 seconds
    And I enter new post body
    And I wait for 2 seconds
    And I enter text "New Post Body"
    And I select publish post button
    And I wait for 2 seconds
    And I confirm publish new post
    And I enter new post title
    And I enter text "New"
    And I wait for 2 seconds
    And I enter new post body
    And I wait for 2 seconds
    And I enter text "New Post Body"
    And I select publish post button
    And I wait for 2 seconds
    And I confirm publish new post
    And I wait for 15 seconds