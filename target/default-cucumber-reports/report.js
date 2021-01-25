$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/merchante_UI.feature");
formatter.feature({
  "name": "works on given UI endpoint",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User creates a new user with different variations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "clicks on users",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on new user",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the firstname \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on create button",
  "keyword": "And "
});
formatter.step({
  "name": "Verifies if \"succesfull\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "credentials to create new user",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Email"
      ]
    },
    {
      "cells": [
        "dddddd",
        "12345",
        "bbbbbb@1233.com"
      ]
    },
    {
      "cells": [
        "ffffff",
        "aaaaa",
        "cccccc@1233.com"
      ]
    },
    {
      "cells": [
        "88888",
        "66666",
        "888888@1233.com"
      ]
    },
    {
      "cells": [
        "66666",
        "66666",
        ".....@1233.com"
      ]
    },
    {
      "cells": [
        "%%%%%%",
        "66666",
        "4545@1233.com"
      ]
    }
  ]
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates a new user with different variations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "clicks on users",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on new user",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicks_on_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"dddddd\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheFirstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the email \"bbbbbb@1233.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies if \"succesfull\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifies_if(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates a new user with different variations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "clicks on users",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on new user",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicks_on_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"ffffff\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheFirstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"aaaaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the email \"cccccc@1233.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies if \"succesfull\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifies_if(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates a new user with different variations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "clicks on users",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on new user",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicks_on_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"88888\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheFirstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"66666\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the email \"888888@1233.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies if \"succesfull\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifies_if(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates a new user with different variations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "clicks on users",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on new user",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicks_on_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"66666\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheFirstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"66666\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the email \".....@1233.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies if \"succesfull\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifies_if(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027flash flash_notice\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAHMI\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\rahmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52377}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fc5380a7534c81d4481365567bf6c81c\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027flash flash_notice\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.UIStepDefinitions.verifies_if(UIStepDefinitions.java:58)\r\n\tat ✽.Verifies if \"succesfull\"(file:///C:/Users/rahmi/IdeaProjects/masglobal/src/test/resources/features/merchante_UI.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates a new user with different variations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "clicks on users",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on new user",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicks_on_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"%%%%%%\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheFirstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password \"66666\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.user_enters_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the email \"4545@1233.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEntersTheEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies if \"succesfull\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifies_if(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027flash flash_notice\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAHMI\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\rahmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f4baaabb42229b6e49ae78f7cd6760f6\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027flash flash_notice\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.UIStepDefinitions.verifies_if(UIStepDefinitions.java:58)\r\n\tat ✽.Verifies if \"succesfull\"(file:///C:/Users/rahmi/IdeaProjects/masglobal/src/test/resources/features/merchante_UI.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User tries filter with username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "user click on users button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClickOnUsersButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username in the filter box \"66666\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEnterUsernameInTheFilterBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnFilterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifies if selected username \"66666\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifiesIfSelectedUsernameIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user goes to UI endpoint",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on given endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userIsOnGivenEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check created user details using filter with email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI_Merchante"
    }
  ]
});
formatter.step({
  "name": "user click on users button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userClickOnUsersButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email in the filter box \"aaaaaaaaa@1233.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.userEnterEmailInTheFilterBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.clicksOnFilterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifies if selected email \"aaaaaaaaa@1233.com\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UIStepDefinitions.verifiesIfSelectedEmailIsDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});