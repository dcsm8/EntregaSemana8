Feature: Crear una nueva ruta y dirigirse a esta

@user1 @web
Scenario: Como primer usuario creo una nueva pagina
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter Design section
    And I wait for 2 seconds
    And I enter Design section
    And I wait for 2 seconds
    And I select the route item for the route
    And I enter text "$string_1"
    And I wait for 2 seconds
    And I select the name item for the route
    And I enter text "$string_1"
    And I wait for 2 seconds
    And I click the save design button
    And I wait for 10 seconds