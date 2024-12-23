# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js: the `EADDRINUSE` error, which occurs when your server attempts to bind to a port that's already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution.

## Problem

When running `bug.js`, the server fails to start because port 8080 is likely occupied by another process (perhaps another instance of the server, or another application). This results in the `Error: listen EADDRINUSE: address already in use :::8080` error.

## Solution

The `bugSolution.js` file provides a solution using the `portfinder` package.  This package automatically searches for an available port and starts the server on that port instead.  Refer to the updated code and comments for details.

This example enhances robustness by handling potential port conflicts gracefully. The use of `async/await` makes the code cleaner and easier to read.