Feature: Insertar codigo custom 

@user1 @web
Scenario: Insertar codigo custom 
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    And I enter my code injection ghost
    And I enter text "h1 {color: blue;font-size: 24px;}p {color: red;font-size: 16px;}</style>"
    And I wait for 1 seconds
    And I confirm the creation of the code injection
    And I wait for 1 seconds