Feature: Crear una nueva integracion.

@user1 @web
Scenario: Como primer usuario una nueva integracion 
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter my integration ghost
    And I wait for 1 seconds
    And I select add custom integration
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I enter my integration ghost
    And I wait for 1 seconds