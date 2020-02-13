# Vanilla Node MVC Template
A simple Nodejs MVC template with EJS.

### Intro
I was not able to find a simple MVC to begin with Nodejs. So I try to create a simple one but also a little bit configurable.

This template is easily expandable and able to be set up in less than a minute. It uses express and EJS as view engine (which can be easily changed).

### Directories

- config :
  - config.dev.js => config for development environment
  - config.dev.js => config for production environment
  - router.js => all routing for express
- controllers => all your business logic
- middlewares => all your middlewares for validation, data sanitation, etc.
- models => all your models
  - entities => all your classes to map your data in the databases
- public => all static stuff
- vendors => all configuration, setup, and variables for external APIs, services or technologies.
- views => all your view to be render
  - partials => part of views

### Get Started

Just launch

```
npm install
npm start
```

Just check [this example](https://github.com/Inglebard/snMVC-example) to understand how it works.
