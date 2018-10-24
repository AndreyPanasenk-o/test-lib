# NecCore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Local npm registry
To run local npm registry use docker image:
`docker run -d -p 4873:4873 --expose=4873 --name verdaccio verdaccio/verdaccio`

Packages can be installed without any credentials.
But for publishing user has to be added and logged in

To add user, use next command: 
`npm adduser`

There is NEC npm registry: 40.112.88.18:4873
and user: username=nec, password=nec email=nec@nec.nec
But only build server is supposed to use these credentials

Recommendation: you can set NEC registry instead `http://npmjs.org` one to avoid adding it in every npm command:
`npm config set registry="http://40.112.88.18:4873"`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
