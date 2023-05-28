Feature: Cambiar la contraseña de usuario. 

@user1 @web
Scenario: Como primer usuario cambio la contraseña
Feature: Cerrar sesión después de iniciar sesión exitosamente. 

@user1 @web
Scenario: Como primer usuario inicio sesion y cierro sesion
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 7 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 5 seconds
    And I enter config ghost
    And I wait for 10 seconds
    And I enter my profile ghost
    And I wait for 5 seconds
    And I click on Old Password inputbox
    And I wait for 1 seconds
    And I enter text "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click on New Password inputbox
    And I wait for 1 seconds
    And I enter text "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click on Verify Password inputbox
    And I wait for 1 seconds
    And I enter text "$string_1"
    And I wait for 1 seconds
    