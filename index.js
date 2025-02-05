/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2125949";
}

function fn() {
  return 'Johan';
}

function sn() {
  return 'Dias';
}

function add(a, b) {
  let result = a + b
  return result;
}

function subtract(a, b) {
  let result = a - b
  return result;
}

function checkObject(obj) {
  if (obj && typeof obj === 'object') {
    obj.checked = true;
  } else {
    obj.checked = flase;

  //const object = {};
  //object.name = "obj";

  //if (object.name = "obj") {
    //object.checked = true;
  //}
  //else {
    //object.checked = false;
  //}
}
}

function checkObjectInside(obj) {
  if (obj.data && typeof obj === notnull){
    obj.data.checked = true;
  } else {
    obj.data.checked = false;
  }
}