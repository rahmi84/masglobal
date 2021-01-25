@merchante
  Feature: User is on API end point
    Scenario: User recieves all the data from end point
      When user goes to end point
        Scenario: User creates a new id and verify id
          When User creates a new id with the title of "come  folks" and body as "is gonna be okay" and verify if the id is created
    Scenario: User updates one id
      When user changes information title of userId 2 id 16 as title "came" and body  as "champions"
          Scenario: User deletes an id
            When User deletes an existing id 15 from endpoint
