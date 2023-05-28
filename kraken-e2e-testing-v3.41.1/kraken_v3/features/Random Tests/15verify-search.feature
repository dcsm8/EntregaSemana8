Feature: Verificar que la función de búsqueda funciona correctamente. 


@user1 @web
Scenario: Como primer usuario creo un nuevo post para despues buscarlo
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
    And I enter text "$name_1"
    And I wait for 2 seconds
    And I enter new post body
    And I wait for 2 seconds
    And I enter text "$string_1"
    And I select publish
    And I wait for 2 seconds
    And I confirm publish new post
    And I wait for 2 seconds
    And I go back to post
    And I wait for 2 seconds
    And I enter Search Site section
    And I enter text "$$name_1"
    And I wait for 5 seconds
    And I click the first option on the search menu
    And I wait for 15 seconds