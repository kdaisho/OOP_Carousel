/*
@description
  Creates a slide-show out of elements with the class "carousel-img".

@guide
  1. Add or link this script to the bottom of your body tag, or after the DOM has 
     completely loaded.
  2. After this script, create a new object with the name of your choosing.
  :: var carousel = new Carousel();
  3. Add ID of wrapper element as the first argument, and interval (millisecond) as the second argument.
  :: var carousel = new Carousel("wrapperID", 2000);

@last modified  06-26-2016
*/

"use strict";

// Carousel Constructor
function Carousel(containerID, interval) {
  this.container = document.getElementById(containerID) || document.body;
  this.slides = this.container.querySelectorAll('.carousel-img');
  this.total = this.slides.length - 1;
  this.current = 0;
  this.interval = interval;
  this.slide(this.current); // Start on slide 1
}

// Run Carousel
Carousel.prototype.auto = function() {
  if (typeof this.interval == 'number' && (this.interval % 1) === 0) {
    var cont = this;
    var interval = this.interval;
    //Reset interval
    this.stop();
    this.run = setInterval(function() {
      (cont.current === cont.total) ? cont.current = 0 : cont.current += 1;
      cont.slide(cont.current);
    }, interval);
  }
  else {
    console.log("Second argument is required. Please type millisecond.")
  }
};

// Stop Running
Carousel.prototype.stop = function() {
  clearTimeout(this.run);
};

// Select Slide
Carousel.prototype.slide = function(index) {
  this.auto();
  this.current = index;

  if (index >= 0 && index <= this.total) { 
    for (var i = 0; i <= this.total; i++) {
      if (i === index) {
        this.slides[i].style.display = "inline-block"; 
      }
      else {
        this.slides[i].style.display = 'none';
      }
    }
  }
  else {
    console.log("Index: " + index + " doesn't exist.");
  }
};