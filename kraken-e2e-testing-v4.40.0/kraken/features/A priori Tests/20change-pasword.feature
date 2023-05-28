Feature: Verificar que los enlaces internos y externos funcionan correctamente. 

@user1 @web
Scenario: Como primer usuario verifico que los enlaces funcionan correctamente
    Given I navigate to page "http://localhost::2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 2 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 2 seconds
    And I click on the user configuration
    And I wait for 2 seconds
    And I click on your profile configuration
    And I wait for 2 seconds
    And I click on Old Password inputbox
    And I enter text "{GHOSTPASSWORD}"
    And I wait for 2 seconds
    And I click on New Password inputbox
    And I enter text "{GHOSTNEWPASSWORD}"
    And I wait for 2 seconds
    And I click on Verify Password inputbox
    And I enter text "{GHOSTNEWPASSWORD}"
    And I wait for 2 seconds
    And I click to save the new password
    And I wait for 20 seconds