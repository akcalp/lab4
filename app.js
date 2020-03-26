// JavaScript Document
/*

1.) Access the JSON file

      How? We're going to use an XMLHttpRequest (XHR) Object!

      What's an XMLHttpRequest (XHR) Object?
       - it's a Web API that let's us interact with servers and retrieve data without refreshing the page (sweet!)
       - this enables a web page to update just part of the page without disrupting what the user is doing

*/


const requestURL = "https://raw.githubusercontent.com/akcalp/lab4/master/items.json";
/*Create a new XHR object */
const request = new XMLHttpRequest();
/* Open a new request using the request() method */
request.open('GET', requestURL);
/* Set JavaScript to accept JSON from the server */
request.responseType = 'json';
/* Send the request with the send() method */
request.send();

/*Add an event handler that listens for the onload event of the JSON file/object */
request.onload = function() {
    //store the response in plenty of pizza
    const items = request.response;
    //let's check it out in the console
    console.log(items);
    //when the response is ready, invoke pizzaTypes function, passing plentyPizza as the object
    weirdDeals(items);
};

/* Parse the JSON in pizzaTypes() */
//define a function name pizza types, passing jsonObj as a parameter or placeholder
function weirdDeals(jsonObj){
    // store the JSON object in a variable, JavaScript provides us with a built in JSON object to work with, complete with methods and properties
    const deals = jsonObj.items;

    for (let i = 0; i < deals.length; i++) {
        //build HTML elements for the content
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');
        //store a reference to the section element in var section
        let section = document.querySelector('section');
        //set the image src attribute
        img.setAttribute('src', "https://akcalp.github.io/lab4/img/" + deals[i].image);
        //set the image alt attribute
        img.setAttribute('alt', deals[i].name);
        //set the text content of the h2 to name
        h2.textContent = deals[i].name;
        //set the text contenxt of the first paragraph
        p1.textContent = 'Description: ' +
            deals[i].description;
        p2.textContent = 'Price: ' + deals[i].price;

        // append each of the above HTML elements to the ARTICLE element, then append the article element to the section
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article);
    }
}


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON