Feature: Insertar codigo custom footer

@user1 @web
Scenario: Insertar codigo custom footer
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    And I enter my code injection ghost
    And I wait for 1 seconds
    And I enter my code injection ghost footer
    And I wait for 1 seconds
    And I enter text "$string_1"
    And I wait for 1 seconds
    And I confirm the creation of the code injection
    And I wait for 1 seconds