@UI_Merchante
  Feature: works on given UI endpoint
Background: user goes to UI endpoint
  Given user is on given endpoint
    Scenario Outline: User creates a new user with different variations
      And clicks on users
      And clicks on new user
      When user enters the firstname "<Username>"
      And user enters the password "<Password>"
      And user enters the email "<Email>"
      And clicks on create button
      Then Verifies if "succesfull"
      Examples:credentials to create new user
      |Username|Password|Email|
      |dddddd   |12345   |bbbbbb@1233.com|
      |ffffff   |aaaaa    |cccccc@1233.com|
      |88888    |66666     |888888@1233.com|
      |66666    |66666     |.....@1233.com|
      |%%%%%%   |66666     |4545@1233.com|
    Scenario: User tries filter with username
      And user click on users button
      When user enter username in the filter box "66666"
      And clicks on filter button
      Then verifies if selected username "66666" is displayed

    Scenario: To check created user details using filter with email
      And user click on users button
      When user enter email in the filter box "aaaaaaaaa@1233.com"
      And clicks on filter button
      Then verifies if selected email "aaaaaaaaa@1233.com" is displayed





