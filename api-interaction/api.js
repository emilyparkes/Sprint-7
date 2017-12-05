var xhr = new XMLHttpRequest();
xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/translate?word=canoe.", false);
// Add your code below!
xhr.send()
console.log(xhr.status)
console.log(xhr.statusText)
