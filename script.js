var currentNode;
var numeroinput = 0;
var mainTable = document.getElementById("mainTable");
var valoriInput = [];

function aggiungiInput() {

  var nuovoInput = document.createElement("input");
  var idAttr = document.createAttribute("id");
  idAttr.value = "input" + numeroinput++;
  var typeAttr = document.createAttribute("type");
  typeAttr.value = "text";
  nuovoInput.setAttributeNode(idAttr);

  var trElem = document.createElement("tr");
  var thElem = document.createElement("th");

  valoriInput.push(nuovoInput);

  thElem.appendChild(nuovoInput);
  trElem.appendChild(thElem);
  mainTable.appendChild(trElem);
}

function togliInput() {
  mainTable.removeChild(mainTable.lastChild);
  valoriInput.pop();
}

function stampa() {
  var stringa = "";
  valoriInput.forEach(element => {
    stringa += element.value;
    stringa += "-";
  });
  document.getElementById("mainp").innerHTML = stringa;
}