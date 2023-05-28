Feature: Eliminar una página existente. 

@user1 @web
Scenario: Como primer usuario elimino una pagina existentes
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I enter page section
    And I wait for 2 seconds
    And I select the first page
    And I wait for 2 seconds
    And I click the settings page
    And I wait for 4 seconds
    And I click the delete page button
    And I wait for 4 seconds
    And I click the confirm delete page button
    And I wait for 20 seconds
