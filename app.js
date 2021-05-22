let person = document.getElementById('personalizar');
let body = document.getElementById('documentB');
let listOfButtons = document.getElementsByClassName('borderA');
let svButton = document.getElementById('checkpoint');
let main = document.getElementById("documentM");
let GLetters = document.querySelectorAll('.Tchange');
console.log(GLetters);

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
		},
	BlueTheme: function BlueTheme(){
		document.getElementById("documentB").style.backgroundColor = 'LightBlue'
		document.getElementById('mail').style.color = 'white';
		document.getElementById('img').style.color = 'white';	
		document.getElementById('user').style.backgroundColor = 'white';
		document.getElementById('hamb').style.color = 'white';
		document.querySelector('.foot').style.color = '#2A97BA';
		document.querySelector('.contact').style.color ='#2A97BA'; 
		document.querySelector('.contact').children[1].style.color ='#2A97BA';
		document.querySelector('.contact').children[2].style.color ='#2A97BA'; 
			for(var j = 0;j < GLetters.length;j = j+1 ){
			GLetters[j].style.color = "#2A97BA";
		}
	},
	Defaulttheme: function defaultTheme(){
		document.getElementById("documentB").style.backgroundColor = 'initial';
		document.getElementById('mail').style.color = 'initial';
		document.getElementById('img').style.color = 'initial';	
		document.getElementById('user').style.backgroundColor = 'initial';	
		document.getElementById('hamb').style.color = 'initial';	
		document.querySelector('.foot').style.color = 'initial';	
		document.querySelector('.contact').style.color ='initial';	
		document.querySelector('.contact').children[1].style.color ='initial';	
		document.querySelector('.contact').children[2].style.color ='initial';	
			for(var j = 0;j < GLetters.length;j = j+1 ){
			//GLetters[j].style.color = 'initial';	
				if (j === 0 || j ===3){
					GLetters[j].style.color = '#4285f4';
				}
				else if (j===1 || j===5){
					GLetters[j].style.color ='#ea4335'; 
				}
				else if (j===2){
					GLetters[j].style.color = '#fbbc05';
				}
				else{
					GLetters[j].style.color = '#34a853';
				}
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
listOfButtons[1].onclick = popUps.BlueTheme;
listOfButtons[2].onclick = popUps.Defaulttheme;
svButton.onclick = popUps.salvar; 
