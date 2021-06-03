Feature: Verify the functionality of Swapi website feature

@Regression
Scenario: Checking all starwars characters valid data scenario
Given User should launch swapi.dev
When  enter valid service URL for all characters
And click on the request button
Then check final result

@Regression
Scenario: Checking starwars all characters by using invalid data scenario
Given User must open swapi.dev 
When enter all starwars characters invalid data
And click request button
Then check displayed result

@Regression
Scenario: Checking specific character output with valid data
Given User must be on swapi
When enter valid service URL for starwars specific character
And click on request box
Then confirm the result

@Regression
Scenario: Checking starwars specific character using invalid service URL
Given User should launch the website
When enter invalid service URL for specific character
And do click on the request button
Then confirm if the end result displayed 

@Regression
Scenario: Checking serching with valid data scenario
Given User should open firefox and type swapi URL
When enter valid planets/characters valid serviceURL
And click the request btn
Then check the outcome

@Regression
Scenario: Searching with invalid data result scenario
Given User must be on homepage of swapi.dev 
When enter invalid service URL to search planets/characters
And do click on request
Then check if the final result is available

@Regression
Scenario: Checking the blank input functionality scenario
Given User should be on homepage of swapi.dev
When keep service URL field blank
And click on the request
Then check if the result is displayed