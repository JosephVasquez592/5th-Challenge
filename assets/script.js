// Global Variables
var topDate = document.getElementsByClassName('lead');
var currentTime = moment();
$("#currentDay").text(currentTime.format("dddd, MMMM DD, YYYY LTS"));
var hourBlocks = document.getElementsByClassName("container");
var createUl = document.createElement('ul');
var createLi = document.createElement('li');

// Arrays
var amPm = ["12 Midnight", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];



// Functions
function updateTime() {
    // for (var i = 0; i < currentTime; i++) {}
 
};

function createBlockAm() {    
    for (var i = 0; i < amPm.length; i++) {
        createLi.textContent = createBlockAm;
        createUl.appendChild()
    }
}

// Calling Functions and Variables
currentTime;
updateTime;
createUl;