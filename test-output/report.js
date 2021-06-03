$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/prash/eclipse-workspace/StarwarsAPIProject/src/main/java/Feature/StarwarSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the functionality of Swapi website feature",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Checking all starwars characters valid data scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-all-starwars-characters-valid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User should launch swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter valid service URL for all characters",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on the request button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check final result",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.LaunchURL()"
});
formatter.result({
  "duration": 36787943100,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.validDataforAllCharacters()"
});
formatter.result({
  "duration": 177121600,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.clickRequestforAllCharacters()"
});
formatter.result({
  "duration": 501038700,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.validateOutput()"
});
formatter.result({
  "duration": 311280700,
  "status": "passed"
});
formatter.after({
  "duration": 4058088500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Checking starwars all characters by using invalid data scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-starwars-all-characters-by-using-invalid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User must open swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter all starwars characters invalid data",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click request button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "check displayed result",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.useMustOpenSwapi()"
});
formatter.result({
  "duration": 12502613400,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.AllCharWithInvalidData()"
});
formatter.result({
  "duration": 405213900,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.clickRequestforAllCharInvalidData()"
});
formatter.result({
  "duration": 356671000,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.checkAllCharInvalidDataResult()"
});
formatter.result({
  "duration": 66908500,
  "status": "passed"
});
formatter.after({
  "duration": 3212109800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking specific character output with valid data",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-specific-character-output-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User must be on swapi",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "enter valid service URL for starwars specific character",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click on request box",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "confirm the result",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.userOnSwapi()"
});
formatter.result({
  "duration": 12186917300,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.validServiceURLofSpecificCharacter()"
});
formatter.result({
  "duration": 185677600,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.click_on_Request_button()"
});
formatter.result({
  "duration": 432770700,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.checkFinalResult()"
});
formatter.result({
  "duration": 52613000,
  "status": "passed"
});
formatter.after({
  "duration": 2581097600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Checking starwars specific character using invalid service URL",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-starwars-specific-character-using-invalid-service-url",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User should launch the website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "enter invalid service URL for specific character",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "do click on the request button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "confirm if the end result displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.userLaunchSwapi()"
});
formatter.result({
  "duration": 13234222900,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.invalidServiceURLforSpecificCharacter()"
});
formatter.result({
  "duration": 280117200,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.requestButtonforInvalidSpecificCharacterURL()"
});
formatter.result({
  "duration": 444574300,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.resultofInvalidserviceURLforspecificChar()"
});
formatter.result({
  "duration": 80770400,
  "status": "passed"
});
formatter.after({
  "duration": 4266518100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Checking serching with valid data scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-serching-with-valid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User should open firefox and type swapi URL",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "enter valid planets/characters valid serviceURL",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click the request btn",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "check the outcome",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.openSwapi()"
});
formatter.result({
  "duration": 13228571300,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.searchWithValidData()"
});
formatter.result({
  "duration": 261834400,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.requestButtonforValidSearch()"
});
formatter.result({
  "duration": 356682000,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.resultofValidSearchData()"
});
formatter.result({
  "duration": 44051800,
  "status": "passed"
});
formatter.after({
  "duration": 3875146900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Searching with invalid data result scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;searching-with-invalid-data-result-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User must be on homepage of swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "enter invalid service URL to search planets/characters",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "do click on request",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "check if the final result is available",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.userMustBeOnSwapiHomepage()"
});
formatter.result({
  "duration": 11185599100,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.searchWithInvalidData()"
});
formatter.result({
  "duration": 165940900,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.requestButtonforSearchInvalidData()"
});
formatter.result({
  "duration": 417417200,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.resultofSearchWithInvalidData()"
});
formatter.result({
  "duration": 46500700,
  "status": "passed"
});
formatter.after({
  "duration": 2688056600,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Checking the blank input functionality scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-the-blank-input-functionality-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "User should be on homepage of swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "keep service URL field blank",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "click on the request",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "check if the result is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "apistepdefn.userIsOnHomepageofSwapi()"
});
formatter.result({
  "duration": 12605347300,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.blankServiceURLField()"
});
formatter.result({
  "duration": 73176800,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.clickRequestforBlankURL()"
});
formatter.result({
  "duration": 283481100,
  "status": "passed"
});
formatter.match({
  "location": "apistepdefn.blankServiceURLResult()"
});
formatter.result({
  "duration": 136380500,
  "status": "passed"
});
formatter.after({
  "duration": 3294191000,
  "status": "passed"
});
});