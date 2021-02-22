# PlaywrightDistributedExecution

## About:
This project was created as an example of how to use Playwright **"Server's"**, and launching tests connecting to these servers. Sort of the same as Selenium Remote Driver.

The "distributed execution", occurs due to each server it's created in a different container (one server for each Browser). And the "test runner container" triggering the execution into these three server containers.

## How it works:
- The Docker Compose creates 4 containers, one server for each Browser Type (Chromium, Firefox, and WebKit ), and another run a Test Runner.
- The Server containers:
    -   Receives the information about the "Browser Type" from a environment variable.
    -   Create a few routes to enable launch the Playwright Server and retrieve information about, e.g. WebSocket Endpoint.
- The Test Runner, will setup the Playwright Servers at the beginning of the test execution. And store the WebSockets endpoints (HTTP requests).
- For each Test Suite, it will create a global Browser object by either connecting to the Remote Server or launching locally.
- For each Test, it will create a new global Context and Page objects.

## How to Test:
The following commands can be used to run all the tests.
- Run everything in a single container (i.e. launching the test locally):
~~~~
npm run test:all:runner
~~~~
- Run everything in distributed containers (i.e. launching the test on the servers):
~~~~
npm run test:all
~~~~