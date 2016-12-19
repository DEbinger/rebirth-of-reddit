/*jshint esversion: 6*/

(function(window){

function reqListener(){

  var pug = JSON.parse(this.responseText);


  for (var i = 0; i < 25; i++){

    var articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    document.getElementById('content-container').appendChild(articleContainer);

    var pugPic = document.createElement('img');
    pugPic.className = "image-card";
    pugPic.setAttribute('src', pug.data.children[i].data.preview.images[0].source.url);
    document.getElementsByClassName('article-container')[0].appendChild(pugPic);

    var titleDivCreate = document.createElement('div');
    titleDivCreate.className = 'headline';
    var pugTitle = document.createTextNode(pug.data.children[i].data.title);
    titleDivCreate.appendChild(pugTitle);
    document.getElementsByClassName('article-container')[0].appendChild(titleDivCreate);

    var authorDivCreate = document.createElement('div');
    authorDivCreate.className = 'author';
    var author = document.createTextNode(pug.data.children[i].data.author);
    authorDivCreate.appendChild(author);
    document.getElementsByClassName('article-container')[0].appendChild(authorDivCreate);

    var createdDateDivCreate = document.createElement('div');
    createdDateDivCreate.className = 'createdDate';
    var createdDate = document.createTextNode(pug.data.children[i].data.utc_created);
    createdDateDivCreate.appendChild(createdDate);
    document.getElementsByClassName('article-container')[0].appendChild(createdDateDivCreate);

    var viewDivCreate = document.createElement('div');
    viewDivCreate.className = 'views';
    var views = document.createTextNode(pug.data.children[i].data.num_comments);
    viewDivCreate.appendChild(views);
    document.getElementsByClassName('article-container')[0].appendChild(viewDivCreate);

    var scoreDivCreate = document.createElement('div');
    scoreDivCreate.className = 'scores';
    var scores = document.createTextNode(pug.data.children[i].data.score);
    scoreDivCreate.appendChild(scores);
    document.getElementsByClassName('article-container')[0].appendChild(scoreDivCreate);

  }

}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/pug/.json');
oReq.send();


}(window));

//maybe to try and refractor later.
/*
function pugRequest() {
  let pugObject = JSON.parse(this.responseText);
  document.getElementById("pugTitle").innerHTML = pugObject.title;
}*/

/*
reqHelper("https://www.reddit.com/r/pug.json",pugRequest);

function reqHelper(api, listener){
  var req = new XMLHttpRequest();
  req.addEventListener('load', listener);
  req.open('GET', api);
  req.send();
}*/

