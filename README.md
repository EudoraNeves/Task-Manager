# Build Static Assets

## npm run build (react)

--> It will create a folder called `<build>`

## Set Up a Server

### 1. React Local Server

* npm i -g serve
* serve -s build -p 8000
* go to localhost:8000

  Note: localhost:3000 was development server; localhost:8000 is production build server

  ### 2. Json Server
* npm i json-server
* package.json: scripts->add "server": "json-server --watch --port 5000"
* npm run server
