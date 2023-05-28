Feature: Verificar que los enlaces internos y externos funcionan correctamente. 

@user1 @web
Scenario: Como primer usuario verifico que los enlaces funcionan correctamente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 3 seconds
    When I enter email ghost "<GHOSTUSER>"
    And I wait for 1 seconds
    And I enter password ghost "<GHOSTPASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 1 seconds
    And I enter tag section
    And I wait for 1 seconds
    And I enter new tag
    And I wait for 1 seconds
    And I enter new tag name
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I enter new tag slug
    And I wait for 1 seconds
    And I enter new tag description
    And I enter text "$string_1"
    And I wait for 1 seconds
    And I select save
    And I wait for 1 seconds
    And I go back to tag page
    And I wait for 1 seconds
    And I enter post section
    And I wait for 1 seconds
    And I enter new post
    And I wait for 1 seconds
    And I enter new post title
    And I wait for 1 seconds
    And I enter text "$name_1"
    And I wait for 1 seconds
    And I enter new post body
    And I wait for 1 seconds
    And I enter text "$string_1"
    And I wait for 1 seconds
    And I click the settings post
    And I wait for 1 seconds
    And I click on tag field section
    And I wait for 1 seconds
    And I enter text "$string_1"
    And I wait for 1 seconds
    And I click on the first tah shown
    And I wait for 1 seconds 
    And I enter new post title
    And I wait for 1 seconds 
    And I select publish
    And I wait for 1 seconds
    And I confirm publish new post
    And I wait for 1 seconds
    And I go back to post
    And I wait for 15 seconds
    

