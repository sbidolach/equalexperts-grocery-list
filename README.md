# Grocery List

This test program exercise shows how to create grocery list with Node.js REST API and client implemented in React.

## Version number

`59c675f8d1629e508c696d270a5801fe17bde4c3`

## Requirements

- Node >= v11.3.0
- Yarn >= 1.10.1

## How to run app

- You have to download all dependencies by command `yarn`
- Using command `yarn dev` you can run REST API and React client concurrently
- Open app in your web browser by url `http://localhost:3000`
- REST API should work under url `http://localhost:3001`

## How to run tests

- You can run unit tests by command `yarn test`. Code coverage table should be displayed at the end of tests.

## What is implemented during this test

- Example unit tests for REST API
- Example unit tests for React components
- REST API for grocery list endpoint
- UI implemented in React and with material-ui styles
- Redux used to control data stage
- User can display list of grocery lists from mock database
- User can remove grocery list from mock database

## What is not implemented during this test

- User can not add a new grocery list
- User can not edit existing grocery list
- UI is not coverage by tests fully (I added only some examples)
