let person = document.getElementById('personalizar');
let body = document.getElementById('documentB');
let listOfButtons = document.getElementsByClassName('borderA');
let svButton = document.getElementById('checkpoint');
let main = document.getElementById("documentM");
let GLetters = document.querySelectorAll('.Tchange');

let popUps = {
	salvar: function buttonSave(){
		main.firstElementChild.style.display ='none';
		person.disabled = false;
			for (var k = 0;k< main.childElementCount;k=k+1){
				main.children[k].style.filter = 'none';
						}
		main.previousElementSibling.style.filter = 'none';
	},
	BlackTheme: function BlackTheme(){
		document.getElementById("documentB").style.backgroundColor = 'black';
		document.getElementById('mail').style.color = 'white';
		document.getElementById('img').style.color = 'white';	
		document.getElementById('user').style.backgroundColor = 'white';
		document.getElementById('hamb').style.color = 'white';
		document.querySelector('.foot').style.color = 'white';
		document.querySelector('.contact').style.color = 'white'
		document.querySelector('.contact').children[1].style.color = 'white'
		document.querySelector('.contact').children[2].style.color = 'white'
			for(var j = 0;j < GLetters.length;j = j+1 ){
			GLetters[j].style.color = 'white';
		}
		}
	}
person.onclick = function(){
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
svButton.onclick = popUps.salvar; 
