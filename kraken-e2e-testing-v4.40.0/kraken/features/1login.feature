Feature: Iniciar sesion en Ghost

@user1 @web
Scenario: Usuario ingresa a la pagina de Ghost correctamente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 7 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 15 seconds