## RRK9 Store

[![VerbalWebsites](https://circleci.com/gh/VerbalWebsites/rrk9-store.svg?style=svg)](https://app.circleci.com/pipelines/github/VerbalWebsites/rrk9-store)
(CircleCI Build)

Developer must install `nodemon`.  
Database script is `util/mongo-container.sh`.

MIT License. All original material (c) 2020 Verbal Websites LLC.

### React App (`./react`)
The React App is the crux of the RRK9 Store. It contains a single-page web app that can be used for purchasing products.

For the React app, you will need at least an `.env.development` file in the `./react/` directory; this file is not checked in (see `.gitignore`).
```
REACT_APP_SANDBOX_CLIENT_ID={value}
REACT_APP_PRODUCTION_CLIENT_ID={value}
```

Then, to run the development version:
```
cd ./react
npm install
npm run start
```
The dev app will listen on `:3000`.

To create a production build and container, you can simply push to GitHub. If you want to test the container locally, see the Utilities section.


### Java App (`./java`)
The Java App presents a RESTful API (via Dropwizard) and performs CRUD operations against a PostGREsql instance.

Running the Java app is very straightforward:
```
source ./util/postgres-container.sh
cd ./java
mvn clean install
java -jar target/rrk9-store-1.0.jar server rrk9.yml
```
To check that your application is running enter url `http://localhost:8080`

### Utilities
`app-container.sh` ~> Must be run from this folder. Creates a Docker container with the React and Node apps running.
`mongo-container.sh` ~> Creates a database container instance.
`nginx.conf` ~> The NginX configuration for the app container.
`run.sh` ~> The script run by the container's `CMD` cmdlet.
`secure_server.key` `server.crt` `server.key` ~> A throwaway, self-signed, insecure certificate for testing.
