Feature: Iniciar sesión con credenciales inválidas. 

@user1 @web
Scenario: Como primer usuario inicio sesion no puedo accededr por credenciales
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 7 seconds
    When I enter email ghost "$email_1"
    And I wait for 2 seconds
    And I enter password ghost "$string_1"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 15 seconds