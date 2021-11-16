// Créer un bouton "close" et l'ajouter à chaque item
let myNodelist = document.getElementsByTagName("LI");
var i; /* Ne pas changer en let !*/
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); //\u00D7 signe multiplication
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Cliquer sur le bouton close pour faire disparaitre l'élément de liste actuel
let close = document.getElementsByClassName("close");
var i; /* Ne pas changer en let !*/
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none"; //Efface la ligne quand on clique X
  }
}

// Ajouter le symbole "checked" quand on clique sur un élément de la liste
//old: let list = document.querySelector('ul'); querySelector retourne le 1er Element
let list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    console.log("test")
    ev.target.classList.toggle('checked');
  }
  console.log(ev.target.tagName);
}, false);

//On duplique les lignes 23 à 30 pour chaque famille de courses (myULPlats, myULDessert, myULBoissons)
let list2 = document.getElementById('myULPlats');
list2.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    console.log("test")
    ev.target.classList.toggle('checked');
  }
  console.log(ev.target.tagName);
}, false);

let list3 = document.getElementById('myULDessert');
list3.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    console.log("test")
    ev.target.classList.toggle('checked');
  }
  console.log(ev.target.tagName);
}, false);

let list4 = document.getElementById('myULBoissons');
list4.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    console.log("test")
    ev.target.classList.toggle('checked');
  }
  console.log(ev.target.tagName);
}, false);

// Créer un nouvel élément de la liste quand on clique sur "Ajouter"
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Vous devez taper quelquechose!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newElement2() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput2").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Vous devez taper quelquechose!");
  } else {
    document.getElementById("myULPlats").appendChild(li);
  }
  document.getElementById("myInput2").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newElement3() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput3").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Vous devez taper quelquechose!");
  } else {
    document.getElementById("myULDessert").appendChild(li);
  }
  document.getElementById("myInput3").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newElement4() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput4").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Vous devez taper quelquechose!");
  } else {
    document.getElementById("myULBoissons").appendChild(li);
  }
  document.getElementById("myInput4").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}