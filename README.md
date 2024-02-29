# Getting Started with Simple Comments Node.js app.
You can open running app at [Heroku](https://comment-app-885618336cfa.herokuapp.com/). \
Node version: v21.6.2\
Runs the app in the development mode.\
Open Postman [http://localhost:8080](http://localhost:8080) to make backend requests in local development.

## Project setup

- Create folder and open in IDE;
- Open the terminal and write command: `git clone https://github.com/Javez/Comments_App.git`;
- Write in command line: `npm install` ([Optional] or use manual install packages with list below);

## Run Scripts

In root directory, run next command to start app:

- `npm run dev`

## Basic Express requests for local development

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

## Basic Websockets requests for local development

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

## Packages

**Note: This is the list of `packages` for manual install!**

- `express sequelize pg sequelize-cli body-parser dotenv express-validator validator socket.io`
- `nodemon` for local development

## Docker container
**To create docker container use docker-compose.yml and command in terminal: docker compose up**

## Screenshots
"Postman example"
![Снимок экрана 2024-02-28 200220](https://github.com/Javez/Comments_App/assets/66317972/c98f6cd9-9fe1-4b4d-bc02-202d9f53040d)
"Express and Sockets requests"
![Снимок экрана 2024-02-28 200157](https://github.com/Javez/Comments_App/assets/66317972/566b2186-7bd9-4f72-b473-2fe5e05a084b)
"Post request"
![Снимок экрана 2024-02-28 200220](https://github.com/Javez/Comments_App/assets/66317972/c675dd2d-a223-42ba-a14d-a85a487b3953)
"Get requests"
![Снимок экрана 2024-02-28 200250](https://github.com/Javez/Comments_App/assets/66317972/2fa25a7a-a540-418c-9a76-55477a07c4ed)
![Снимок экрана 2024-02-28 200259](https://github.com/Javez/Comments_App/assets/66317972/a27812bd-3121-48a5-90b4-186dfc995ce6)
"Web sockets connection and requests"
![Снимок экрана 2024-02-28 200321](https://github.com/Javez/Comments_App/assets/66317972/9cc203df-6d70-464c-8381-3793a92a605d)
![Снимок экрана 2024-02-28 200347](https://github.com/Javez/Comments_App/assets/66317972/3d4a4639-2ef2-47c7-8b4a-fbb420928229)
![Снимок экрана 2024-02-28 200602](https://github.com/Javez/Comments_App/assets/66317972/f7ac4f2f-ae0c-48ad-ba44-0f2f04b1007c)
![Снимок экрана 2024-02-28 200607](https://github.com/Javez/Comments_App/assets/66317972/47564528-2773-4ff5-bcb7-4e8de5d61d9c)
![Снимок экрана 2024-02-28 200615](https://github.com/Javez/Comments_App/assets/66317972/49b69067-1982-446a-b8d4-6bffe629fa11)
"Heroku requests example"
![зображення](https://github.com/Javez/Comments_App/assets/66317972/3a6cce61-61e9-4dd6-8f6d-50513a1a0fb5)

If you aren't satisfied im very sad :d

You can open running app at [Heroku](https://comment-app-885618336cfa.herokuapp.com/).
