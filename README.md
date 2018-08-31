# Node.js API Unique-ify - Playground Inc.

<img src="./doc/images/Nodejs-API-Server.jpg" width="400" height="300" align="right">

## Description

This is an assignment provided by [Playgroung Inc.](https://playgroundinc.com/) which the objective is to implement in Node.js an app that exposes a single API endpoint at _**/unique-ify**_ that accepts _**GET requests**_ with a single _**parameter, text**_.

If text is a string composed of only letters (A-Z in any combination of upper and lower case) and/or spaces, it will return a string representation of the collection of unique letters that make up text, sorted alphabetically and provided in lower case.

Otherwise the endpoint should return an error accompanied with the message “Please only enter letters A-Z or spaces.”

## How to Run this API locally

Clone or download this repository, then open it in your preferred IDE/Code Editor:

- [VS Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [Brackets](http://brackets.io/)

If you want to run this API locally in your computer, you need to follow these steps

The easiest way to test and see the result of the GET request is by clicking the link below:

https://github.com/evandrolorran

## How to Test - GET Request

Use left-right and up-down arrow keys to move the player from block to block. Collision with enemy(Hands) results in moving the player to start position, while reaching the basket you score 2 points.

## Tools used to build this API:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- Cors
- [cURL](https://curl.haxx.se/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Unique-ify - Front-End React App

[Unique-ify - React App](https://github.com/evandrolorran/uniqueify-react-app)

### Author

The API was developed by [evandrolorran](https://github.com/evandrolorran) for Playground Inc [Playgroung Inc. Company](https://playgroundinc.com/) in order to show the development skill level in Node.js.

### Contact

evandrolorran@gmail.com

### Special Thanks / Mentions

For supporting me and the feedbacks during development. [MAJA WITTER](https://twitter.com/wchwd)

curl -v -w "\n" -G --data-urlencode "text=The time is two pm" http://localhost:2808/api/unique-ify
curl -v -w "\n" -G --data-urlencode "text=The time is 2:00 pm" http://localhost:2808/api/unique-ify
curl -v -w "\n" -G --data-urlencode "Text with special chars" http://localhost:2808/api/unique-ify
curl -v -w "\n" -G --data-urlencode "text=325345" http://localhost:2808/api/unique-ify
curl -v -w "\n" -G --data-urlencode "text=" http://localhost:2808/api/unique-ify
curl -v -w "\n" -G http://localhost:2808/api/unique-ify
curl http://localhost:2808/api/unique-ify
