let person = document.getElementById('personalizar');
let body = document.getElementById('documentB');
let listOfButtons = document.getElementsByClassName('borderA');

let popUps = {
	salvar: function buttonSave(){

	},
	BlackTheme: function BlackTheme(){
		document.getElementById("documentB").style.backgroundColor = 'black';
		document.getElementById('mail').style.color = 'white';
		document.getElementById('img').style.color = 'white';	
		document.getElementById('user').style.backgroundColor = 'white';
		document.getElementById('hamb').style.color = 'white';

		for(var j=0; j<document.getElementsByClassName('GOOGLE').childElementCount;j = j+1){
			document.getElementsByClassName('GOOGLE').children[j].style.color = 'white';
		}
	}
}
person.onclick = function(){
	let main = document.getElementById("documentM");
	main.previousElementSibling.style.filter = 'blur(6px)';

	for (var i = 0;i< main.childElementCount;i=i+1){
		main.children[i].style.filter = 'blur(6px)';
		if (i === 0){
		main.firstElementChild.style.filter = 'none'	
		}
	}
		main.firstElementChild.style.display = 'flex';
		person.disabled = true;
}

listOfButtons[0].onclick = popUps.BlackTheme;
