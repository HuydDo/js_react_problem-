## Setup
This assumes the machine already has npm and webpack, which seems reasonable at this point.

`npm install // yarn`

`npm start // yarn start`


## Getting started

Open `http://localhost:3000` in a browser if it doesn't happen automagically.

## Problem

This page asks the user to rank a set of items using a matrix of radio
buttons. We want to provide some client-side validation and feedback to help
the user fill it out correctly. Please implement each of the following features.

1. Adding a class of "done" to a row will highlight it green. Provide this
visual feedback on rows which have a selected rank.

2. Adding a class of "error" to a row will highlight it red. Provide this
visual feedback on rows which have duplicate ranks selected.

3. There is a place to display an error message near the submit button. Show
this error message: `Ranks must be unique` whenever the user has selected the
same rank on multiple rows.

4. The submit button is disabled by default. Enable it when all rows have a
rank selected and all selected ranks are unique.




