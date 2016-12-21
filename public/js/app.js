/*jshint esversion: 6*/

(function(window){

function reqListener(){

  let pug = JSON.parse(this.responseText);

  for (let i = 0; i < 10; i++){

    let articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    document.getElementById('content-container').appendChild(articleContainer);

    let pugPic = document.createElement('div');
    pugPic.id = pugPic;
    pugPic.className = "image-card";
    let imageUrl= pug.data.children[i].data.preview.images[0].source.url;
    //pugPic.setAttribute('src', pug.data.children[i].data.preview.images[0].source.url);
    pugPic.style.backgroundImage = `url('${imageUrl}')`;
    document.getElementsByClassName('article-container')[0].appendChild(pugPic);

    let titleDivCreate = document.createElement('div');
    titleDivCreate.className = 'headline';
    let pugTitle = document.createTextNode(pug.data.children[i].data.title);
    titleDivCreate.appendChild(pugTitle);
    document.getElementsByClassName('article-container')[0].appendChild(titleDivCreate);
    //document.getElementById().innerHTML

    let authorDivCreate = document.createElement('div');
    authorDivCreate.className = 'author';
    let author = document.createTextNode(pug.data.children[i].data.author);
    authorDivCreate.appendChild(author);
    document.getElementsByClassName('article-container')[0].appendChild(authorDivCreate);

    //let utc = utc_created;
    let createdDateDivCreate = document.createElement('div');
    createdDateDivCreate.className = 'createdDate';
    let createdDate = document.createTextNode(pug.data.children[i].data.utc);
    createdDateDivCreate.appendChild(createdDate);
    document.getElementsByClassName('article-container')[0].appendChild(createdDateDivCreate);
    //let dateString = moment(utc).fromNow();

    let viewDivCreate = document.createElement('div');
    viewDivCreate.className = 'views';
    let views = document.createTextNode(pug.data.children[i].data.num_comments);
    viewDivCreate.appendChild(views);
    document.getElementsByClassName('article-container')[0].appendChild(viewDivCreate);

    let scoreDivCreate = document.createElement('div');
    scoreDivCreate.className = 'scores';
    let scores = document.createTextNode(pug.data.children[i].data.score);
    scoreDivCreate.appendChild(scores);
    document.getElementsByClassName('article-container')[0].appendChild(scoreDivCreate);

  }

}


let oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/pug.json');
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

