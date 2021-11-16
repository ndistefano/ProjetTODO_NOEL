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
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
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