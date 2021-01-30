$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/merchante_API.feature");
formatter.feature({
  "name": "User is on API end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@merchante"
    }
  ]
});
formatter.scenario({
  "name": "User recieves all the data from end point",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@merchante"
    }
  ]
});
formatter.step({
  "name": "user goes to end point",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.APIStepDefinitions.user_goes_to_end_point()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates a new id and verify id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@merchante"
    }
  ]
});
formatter.step({
  "name": "User creates a new id with the title of \"proverb\" and body as \"easy come easy go\" and verify if the id is created",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.APIStepDefinitions.userCreatesANewIdWithTheTitleOfAndBodyAsAndVerifyIfTheIdIsCreated(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User updates one id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@merchante"
    }
  ]
});
formatter.step({
  "name": "user changes information title of userId 2 id 16 as title \"you\" and body  as \"rock\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.APIStepDefinitions.userChangesInformationTitleOfUserIdIdAsTitleAndBodyAs(int,int,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User deletes an id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@merchante"
    }
  ]
});
formatter.step({
  "name": "User deletes an existing id 18 from endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.APIStepDefinitions.userDeletesAnExistingIdFromEndpoint(int)"
});
formatter.result({
  "status": "passed"
});
});