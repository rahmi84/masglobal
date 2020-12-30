$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google Homepage Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.scenario({
  "name": "User can search with “Google Search”",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "I’m on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_m_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"The name of the wind\" into the search field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_type_into_the_search_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Google Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_click_the_Google_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_go_to_the_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the first result is \"The Name of the Wind - Patrick Rothfuss\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.the_first_result_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:969)\r\n\tat org.testng.Assert.assertTrue(Assert.java:43)\r\n\tat org.testng.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.GoogleStepDefinitions.the_first_result_is(GoogleStepDefinitions.java:42)\r\n\tat ✽.the first result is \"The Name of the Wind - Patrick Rothfuss\"(file:///C:/Users/rahmi/IdeaProjects/masglobal/src/test/resources/features/google.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the first result link of result",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_click_on_the_first_result_link_of_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I go to the \"Patrick Rothfuss - The Books\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_go_to_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can search by using the suggestions",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "I’m on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_m_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"The name of the w\" into the search field now",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_type_into_the_search_field_now(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.the_suggestions_list_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_click_on_the_first_suggestion_in_the_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_go_to_the_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the first result must be \"The Name of the Wind - Patrick Rothfuss\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.the_first_result_must_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:969)\r\n\tat org.testng.Assert.assertTrue(Assert.java:43)\r\n\tat org.testng.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.GoogleStepDefinitions.the_first_result_must_be(GoogleStepDefinitions.java:77)\r\n\tat ✽.the first result must be \"The Name of the Wind - Patrick Rothfuss\"(file:///C:/Users/rahmi/IdeaProjects/masglobal/src/test/resources/features/google.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_click_on_the_first_result_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I go to the \"Patrick Rothfuss - The Books\" page now",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleStepDefinitions.i_go_to_the_page_now(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});