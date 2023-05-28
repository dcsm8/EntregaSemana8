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
    And I enter Member section
    And I wait for 2 seconds
    And I click the first memeber
    And I wait for 2 seconds
    And I click the config member button
    And I wait for 2 seconds
    And I click the delete member button
    And I wait for 2 seconds
    And I click the confirm delete member button
    And I wait for 20 seconds
    
