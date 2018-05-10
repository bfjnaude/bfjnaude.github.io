var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector("html").onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var img = document.querySelector('img')

img.onclick = function() {
    var src = img.getAttribute('src')
    if (src === 'images/firefox-icon.png') {
        img.setAttribute('src', 'images/snowleopard.jpeg')
    } else {
        img.setAttribute('src', 'images/firefox-icon.png') 
    }
}

var myButton = document.querySelector('button') 
var myHeading = document.querySelector('h1')

function setUserName() {
    var name = prompt("Enter your name")
    localStorage.setItem('name', name)
    myHeading.textContent = 'Mozilla is cool, ' + name
}

if(localStorage.getItem('name')==='null') {
    setUserName()
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla is cool, ' + storedName
}

myButton.onclick = function() {
    setUserName()
}
