const requestURL = "https://raw.githubusercontent.com/akcalp/lab4/master/items.json";


function loadJSON(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function () {
        callback(xhr.response);
    };

    xhr.send();
}


function weirdDeals(jsonObj) {
    const deals = jsonObj.items;

    for (let i = 0; i < deals.length; i++) {

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');

        let section = document.querySelector('section');
        img.setAttribute('src', "https://akcalp.github.io/lab4/img/" + deals[i].image);
        img.setAttribute('alt', deals[i].name);
        h2.textContent = deals[i].name;
        p1.textContent = 'Description: ' +
            deals[i].description;
        p2.textContent = 'Price: $' + deals[i].price;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article);
    }
}

loadJSON(requestURL,"json",weirdDeals);

