Feature: Verificar que la función de programación de publicaciones funciona correctamente. 

@user1 @web
Scenario: Como primer usuario verifico que los publicaciones queden programadas
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
    And I enter text "New Post Scheduled Failed"
    And I wait for 2 seconds
    And I enter new post body
    And I wait for 2 seconds
    And I enter text "New Post Body Scheduled"
    And I select publish
    And I wait for 3 seconds
    And I click on the schedule post option
    And I wait for 3 seconds
    And I click on the publish date option this date '10000-12-01'
    And I wait for 3 seconds
    And I click on the publish hour option
    And I enter text "10:00"
    And I wait for 3 seconds
    And I confirm publish new post
    And I wait for 3 seconds
    And I go back to post
    And I wait for 15 seconds
