Feature: Verificar que los enlaces internos y externos funcionan correctamente. 

@user1 @web
Scenario: Como primer usuario verifico que los enlaces funcionan correctamente
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    
    And I enter General Config section
    And I wait for 2 seconds
    And I enter Code Injection section
    And I wait for 2 seconds
    And I enter General Config section
    And I wait for 2 seconds
    And I enter Integration section
    And I wait for 2 seconds
    And I enter General Config section
    And I wait for 2 seconds
    And I enter Labs section
    And I wait for 2 seconds
    And I enter General Config section
    And I wait for 2 seconds
    And I enter Design section
    And I wait for 20 seconds