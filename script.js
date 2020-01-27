var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}
function crossOff(event) {
	var target = event.target.parentNode;
	target.classList.toggle("done");
}

function removeParent(event) {
event.target.parentNode.remove();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.innerHTML = " " + li.innerHTML + " ";

	var check = document.createElement("button");
	check.innerHTML = "&#10003;";
	check.onclick = crossOff;

	var button = document.createElement("button");
	button.innerHTML = 'X';
	button.onclick = removeParent;

	li.prepend(check);
	li.appendChild(button);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);