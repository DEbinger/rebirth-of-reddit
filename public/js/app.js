/*jshint esversion: 6*/

(function(window){

function reqListener(){

  let pug = JSON.parse(this.responseText);

  for (let i = 0; i < pug.data.children.length; i++){

    let articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    document.getElementById('content-container').appendChild(articleContainer);

    let pugPic = document.createElement('div');
    pugPic.id = pugPic;
    pugPic.className = "image-card";
    let imageUrl= pug.data.children[i].data.preview.images[0].source.url;
    pugPic.style.backgroundImage = `url('${imageUrl}')`;
    articleContainer.appendChild(pugPic);

    let titleDivCreate = document.createElement('div');
    titleDivCreate.className = 'headline';
    let pugTitle = document.createTextNode(pug.data.children[i].data.title);
    titleDivCreate.appendChild(pugTitle);
    articleContainer.appendChild(titleDivCreate);

    let linkDivCreate = document.createElement('a');
    linkDivCreate.className = 'linkAnchor';
    linkDivCreate.href = `http://reddit.com${pug.data.children[i].data.permalink}`;
    linkDivCreate.target = '_blank';
    //linkDivCreate.appendChild(link);
    articleContainer.appendChild(linkDivCreate);

    let authorDivCreate = document.createElement('div');
    authorDivCreate.className = 'author';
    let author = document.createTextNode(pug.data.children[i].data.author);
    authorDivCreate.appendChild(author);
    articleContainer.appendChild(authorDivCreate);

    let dateDivCreate = document.createElement('div');
    dateDivCreate.className = 'time-ago';
    let date = moment.unix(pug.data.children[i].data.created_utc);
    let today = new Date();
    let duration = document.createTextNode(date.from(today));
    dateDivCreate.appendChild(duration);
    //dateDivCreate.innerHTML = duration;
    articleContainer.appendChild(duration);

    let viewDivCreate = document.createElement('div');
    viewDivCreate.className = 'views';
    let views = document.createTextNode(pug.data.children[i].data.num_comments);
    viewDivCreate.appendChild(views);
    articleContainer.appendChild(viewDivCreate);

    let scoreDivCreate = document.createElement('div');
    scoreDivCreate.className = 'scores';
    let scores = document.createTextNode(pug.data.children[i].data.score);
    scoreDivCreate.appendChild(scores);
    titleDivCreate.appendChild(scoreDivCreate);

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

