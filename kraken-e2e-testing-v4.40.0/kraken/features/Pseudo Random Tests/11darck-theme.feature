Feature: Tema oscuro

@user1 @web
Scenario: Tema Oscuro
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    And I click on the switch color theme
    And I wait for 3 seconds
    And I click on the switch color theme
    And I wait for 3 seconds
    And I click on the switch color theme
    And I wait for 5 seconds