# JavaAngularStarwarsApi

This project was generated with the following commands:

```bash
ng new java-angular-starwars-api --no-standalone --skip-tests

npm install json-server

ng generate service starwars --skip-tests 
ng generate module people
ng generate component people/list --skip-tests --no-standalone 
ng generate component people/add --skip-tests --no-standalone
ng generate component people/view --skip-tests --no-standalone
ng generate component people/edit --skip-tests --no-standalone
ng generate module layout
ng generate component layout/menu --skip-tests --no-standalone
```

To run `json-server` and have it watch a file called `db.json` in the same directory you use

```bash
npx json-server db.json
```

By default that uses port 3000

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
