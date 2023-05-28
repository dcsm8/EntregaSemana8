Feature: Verificar que los enlaces internos y externos funcionan correctamente. 

@user1 @web
Scenario: Como primer usuario verifico que los enlaces funcionan correctamente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter Member section
    And I wait for 2 seconds
    And I click the new member button
    And I click name field member
    And I enter text "$name_1"
    And I wait for 2 seconds
    And I click email field member
    And I enter text "$email_1"
    And I wait for 2 seconds
    And I click save member button
    And I wait for 2 seconds
    And I enter Member section
    And I wait for 2 seconds
