var fsList = document.querySelectorAll("multiple-field");
for (var i = 0; i < fsList.length; i++){
    iniMultipleFieldset(fsList[i]);
}
function iniMultipleFieldset(fs){
    var addButton = document.createElement("button");
    addButton.textContent = "Adicionar";

    fs.appendChild(addButton);
}