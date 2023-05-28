Feature: Cambiar la configuración del sitio (por ejemplo, cambiar el nombre del sitio). 

@user1 @web
Scenario: Como primer usuario edito la configuracion de la aplicacion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter General Config section
    And I wait for 2 seconds
    And I click the expand title
    And I wait for 2 seconds
    And I click the title of the site field
    And I enter text "$string_1"
    And I wait for 2 seconds
    And I click the welcome of the site field
    And I enter text "$string_1"
    And I wait for 2 seconds
    And I click the save settings general config
    And I wait for 5 seconds
    And I enter View Site section
    And I wait for 15 seconds