# Getting Started with Simple Comments Node.js app.

Node version: v21.6.2
Runs the app in the development mode.
Open Postman [http://localhost:8080](http://localhost:8080) to make backend requests.

## Project setup

- Create folder and open in IDE;
- Open the terminal and write command: `git clone https://github.com/Javez/Comments_App.git`;
- Write in command line: `npm install` ([Optional] or use manual install packages with list below);

## Run Scripts

In root directory, run next command to start app:

- `npm run dev`

## Basic Express requests

[POST Method]
[URL] `http://localhost:8080/users/addUser`\
[Body]: `x-www-form-url-encoded`\
{\
"username": "exampleuser" [Text]\
"email": "example@gmail.com" [Text] (With email check)\
"avatarUrl": "https://img1.example.com" [Text]\
}

[GET Method]
[URL] `http://localhost:8080/users/getUserById/1`\

[GET Method]
[URL] `http://localhost:8080/users/getAllUsers`\

[Websocket connection]
[URL] `ws://localhost:8080/`\
[Message]: `addComment`\
{
"userId": "1",
"text": "test",
"image": "binary",
"file": "binary"
}

[Websocket connection]
[URL] `ws://localhost:8080/`\
[Message]: `addSubComment`\
{
"userId": "1",
"parentCommentId": "1",
"text": "test2",
"image": "binary2",
"file": "binary2"
}

[Websocket connection]
[URL] `ws://localhost:8080/`\
[Message]: `getCommentById`\
{
"id": "1"
}

[Websocket connection]
[URL] `ws://localhost:8080/`\
[Message]: `getAllComments`\
No data

[Websocket connection]
[URL] `ws://localhost:8080/`\
[Message]: `getSubCommentsByCommentId`\
{
"id": "1"
}

## Basic

## Packages

**Note: This is the list of `packages` for manual install!**

- `express sequelize pg sequelize-cli body-parser dotenv express-validator validator socket.io`

## Docker container is under devlopment

## Screenshots

If you aren't satisfied im very sad :d

You can learn more in the [Node.js app documentation](url).
