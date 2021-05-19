let person = document.getElementById('personalizar');
person.onclick = function(){
	let personParent = person.parentNode.parentNode;
	personParent.style.textAlign = 'center';
	personParent.style.fontFamily = "monospace";
		personParent.innerHTML ="<h1>Personalizar</h1>"
			personParent.innerHTML += "<fieldset style = 'width: 60%;border-width: 0.1em;border-radius: 0.5em';><legend><h2>Escolher Tema:</h2></legend><div style = 'background-color: red; border-radius: 50%;width: 7em; height: 7em'></div><div style = 'background-color: blue; border-radius: 50%;width: 0.5em; height: 0.5em'></div>"
		personParent.innerHTML += "</fieldset>"
}

