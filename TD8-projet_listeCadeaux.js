
    
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
    
    // Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    
    // Ajouter un symbole "coché" lorsque vous cliquez sur un élément de la liste
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
    
    // Créez un nouvel élément de liste en cliquant sur le bouton "Ajouter"
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      let stock = localStorage.getItem(myInput.value)
      li.appendChild(t);
      if (inputValue === '') {
        alert("Saisir un souhait !");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
    
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
document.getElementById("btn").addEventListener("click",function() {
 newElement ()
})



 function saveList() {
  let listUl = document.getElementById("myUL").innerHTML;
  localStorage.setItem("listUl", JSON.stringify(listUl))
  let saveUl = localStorage.getItem("listUl");
  }
  document.getElementById("ok").addEventListener("click", saveList)
 


  function getValues() {
    let saveUl = localStorage.getItem("listUl"); 
    if (saveUl != null) {
      document.getElementById("myUL").innerHTML = JSON.parse(saveUl)
    }
  }

  getValues()



    
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  // Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  // Ajouter un symbole "coché" lorsque vous cliquez sur un élément de la liste
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
  // Créez un nouvel élément de liste en cliquant sur le bouton "Ajouter"
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    let stock = localStorage.getItem(myInput.value)
    li.appendChild(t);
    if (inputValue === '') {
      alert("Souhait ajouté!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
document.getElementById("btn").addEventListener("click",function() {
newElement ()
})
function saveList() {
let listUl = document.getElementById("myUL").innerHTML;
localStorage.setItem("listUl", JSON.stringify(listUl))
let saveUl = localStorage.getItem("listUl");
}
document.getElementById("ok").addEventListener("click", saveList)

function getValues() {
  let saveUl = localStorage.getItem("listUl"); 
  if (saveUl != null) {
    document.getElementById("myUL").innerHTML = JSON.parse(saveUl)

  }
}
getValues()

