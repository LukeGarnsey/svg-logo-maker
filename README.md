# SVG Logo Maker
This is a repo to host a SVG Image maker, with the specific purpose of focusing on simple logo creation.
This is a console based application that allows the user to create an SVG image by answering a series of prompts

## Install
This application requires [Node](https://nodejs.org) to be installed.
Clone the repo, then run 'npm i' inside the directory with the package.json file.

## usage
run 'node index' to start the program.
Follow along with the prompts and fill out all the answers.
Hexidecimal color values are valid (#FFEEDD)
After answering all the questions a .svg file will be created in the output directory.

### Examples

![alt text](./examples/triangle_LMG.svg)![alt text](./examples/square_bb.svg)![alt text](./examples/circle_rEx.svg)

[Video Walkthrough](https://drive.google.com/file/d/1bOME2m1dEGn4L4R5Wb1w-cUl3aSyB6Xr/view?usp=sharing)

## Tests
This app uses Jest to run unit tests. 
To run the tests use the command 'npm run test'.
