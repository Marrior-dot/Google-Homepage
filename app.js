let person = document.getElementById('personalizar');
/*person.onclick = function(){
	let personParent = person.parentNode.parentNode;
	personParent.style.textAlign = 'center';
	personParent.style.fontFamily = "monospace";
		personParent.innerHTML ="<h1>Personalizar</h1>"
			personParent.innerHTML += "<fieldset style = 'display: flex;justify-content: space-evenly;width: 60%;border-width: 0.1em;border-radius: 0.5em';><legend><h2>Escolher Tema</h2></i></legend><div style = 'background-color: red; border-radius: 50%;width: 7em; height: 7em'></div><div style = 'background-color: blue; border-radius: 50%;width: 7em; height: 7em'></div>"
		personParent.innerHTML += "</fieldset>"
}
*/

person.onclick = function(){
	let tab = document.createElement('div');
	let body = document.getElementById("documentB")
	for (var i = 0;i < (body.childElementCount-1);i = i+1 ){
		body.children[i].style.filter = 'blur(4px)'
	}	
	tab.className = 'Personalized';
	tab.innerHTML = "<fieldset style = 'border-radius: 0.5em;border-width: 1px'><h4 style ='text-align: center'> Cor e tema </h4><div style = 'background-color: black; width: 2em; height: 2em; border-radius: 50%'></div>";
	tab.innerHTML += "</fieldset>"
	body.appendChild(tab);
	person.disabled = true;
}
