# Cheerp messaging API 

## Overview

This API allows you to save names in a database. This code enables you to do the following:

- Add a name:
Route: /api
METHOD: POST
Sample Input: 
req.body: {"name": "Tola Crescent"}
Sample Response: 
{
    "message": "Name saved",
    "newName": {
        "id": 6,
        "name": "Omotola Akande",
        "updatedAt": "2023-09-14T14:33:15.471Z",
        "createdAt": "2023-09-14T14:33:15.471Z"
    }
}

- Get a name: 
Route: /api/:user_id
METHOD: GET
Sample Input: /api/1
Sample Response:
{
    "name": {
        "id": 1,
        "name": "Adebayo Cresent",
        "createdAt": "2023-09-14T13:59:09.145Z",
        "updatedAt": "2023-09-14T13:59:09.145Z"
    }
}


- Update their account profile:
Route: /api/:user_id
METHOD: PUT
Sample Input: /api/1
{
    "name": "Adebayo Crescent"
}
Sample Response{
    "message": "Name updated",
    "newName": {
        "id": 1,
        "name": "Adebayo Crescent",
        "createdAt": "2023-09-14T13:59:09.145Z",
        "updatedAt": "2023-09-14T16:11:56.124Z"
    }
}


- Delete a name: 
Route: /api/:user_id
METHOD: DELETE
Sample Input: api/1
Sample Response: 
{
    "message": "Name deleted"
}


## Installation

To install this application, you need Node.js v20.6.1( to download, go to: [https://nodejs.org/en/download/current](https://nodejs.org/en/download/current)). You can set up this project locally on your PC by running the following commands:

1. Clone this project (`git clone https://github.com/Esavwede/Cheerp`)
2. Run "npm install" to download all dependencies
3. Set up a postgres database
4. Store all credentials (PORT, SQ_DATABASE, SQ_USER, and SQ_PASSWORD) in a .env file 
5. Run "npm run start" to start the server


## contributors

- Oluwaseun Odueso
