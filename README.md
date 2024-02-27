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

## Basic request examples

[POST Method]
[URL] `http://localhost:8080/users/addUser`\
[Body]: `x-www-form-url-encoded`\
{\
"username": "exampleuser" [Text]\
"email": "example@gmail.com" [Text] (With email check)\
"avatarUrl": "https://img1.example.com" [Text]\
}

[POST Method]
[URL] `http://localhost:8080/comments/addComment`\
[Body]: `x-www-form-url-encoded`\
{\
"userId": "1" [Number]\
"parentCommentId": "example@gmail.com" [Number] (Optional, enable this line to make answer on some comment)\
"text": "https://img1.example.com" [Text]\
"image": "" [URL or Path] \
"file": "" [Path]\
}

## Packages

**Note: This is the list of `packages` for manual install!**

- `express sequelize pg sequelize-cli body-parser dotenv multer --include=optional sharp socket.io`

## Docker container is under devlopment

## Screenshots

If you aren't satisfied im very sad :d

You can learn more in the [Node.js app documentation](url).
