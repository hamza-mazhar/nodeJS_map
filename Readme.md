# Node.js express.js REST API - CRUD Service For Map

## Getting started

This is a basic API REST skeleton written on JavaScript using the sqllite in memory database save the data in the file.



## Features

-   Multiple environment ready (development, production)
-   Compressed responses.
-   Secured HTTP headers.
-   CORS ready.
-   HTTP request logger in development mode.
-   Place model and controller.
-   API collection for Postman.
-   Testing with mocha/chai for API endpoints.
-   NPM script for keeping good source code formatting using prettier and ESLint.
-   Use of ESLint for good coding practices.

## Requirements

-   Node.js **12+**


## How to install

### Using Git (recommended)

1.  Clone the project from github.

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd backend
npm install
npm update
```

## How to run

### Run the server

```bash
npm run start
```

-   `start` start the server.

### Running in development mode (lifting API server)

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
****************************
*    Starting Server
*    Port: 8080
*    NODE_ENV: development
*    DB Connection: OK
****************************
```

### Running tests

It´s a good practice to do tests at your code, so a sample of how to do that in `mocha/chai` is also included in the `/test` directory

```bash
npm run test
```

```bash
npm run build
```


## Usage

Once everything is set up to test API routes either use Postman or any other api testing application.
### API documentation

<https://documenter.getpostman.com/view/10370902/UVC8DRrB>

### Postman API example collection

You can import the example collection to Postman. To import, click the import button located and select `postman-example.json` located within the root directory.

Go to `manage environments` to create environments for development, production, etc. On each of the environments you create you will need to:

This is a REST API, so it works using the following HTTP methods:

-   GET (Read): Gets a list of items, or a single item
-   POST (Create): Creates an item
-   PUT (Update): Updates an item
-   DELETE: Deletes an item
