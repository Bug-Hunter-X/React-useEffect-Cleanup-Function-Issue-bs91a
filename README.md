# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the React `useEffect` hook: the cleanup function not being called correctly, leading to potential memory leaks or other unexpected side effects.

## The Problem

The `useEffect` hook in the provided `bug.js` file includes a cleanup function, but this cleanup function may not always be called.  This can happen if the component unmounts before the next render.  This typically causes side effects to continue even after the component is gone.

## The Solution

The `bugSolution.js` file provides a corrected version that addresses this problem.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install necessary dependencies.
4. Run `npm start` to start the development server.
5. Observe the console output and the component's behavior. You can try mounting and unmounting the component by navigating between different views in your app (if applicable).

This simple example helps illustrate the necessity of the cleanup function in `useEffect` for proper React component lifecycle management.