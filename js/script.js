// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 03/30/2023
// This file contains the JS functions for index.html

// This function calculates the area of a right triangular pyramid
function calculateVolume () {
  // Get the user input
  let baseLength = parseFloat(document.getElementById("base-length").value);
  let baseHeight = parseFloat(document.getElementById("base-height").value);
  let heightOfPyramid = parseFloat(document.getElementById("height-pyramid").value);

  // Perform mathematical equations
  let volumeOfPyramid = (1/6) * baseLength * baseHeight * heightOfPyramid;

  // Display calculations back to user
  document.getElementById("calculations").innerHTML = "The volume of the right triangular pyramid is " + volumeOfPyramid.toFixed(2) + " cm<sup>3</sup>."
}