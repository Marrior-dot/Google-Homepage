let person = document.getElementById('personalizar');
person.onclick = function(){
	let tab = document.createElement('div');
	let body = document.getElementById("documentB")
	for (var i = 0;i < (body.childElementCount-1);i = i+1 ){
		body.children[i].style.filter = 'blur(4px)'
	}	
	tab.className = 'Personalized';

	tab.innerHTML = "<fieldset style = 'border-radius: 0.5em;border-width: 1px'> <h2 style ='text-align: center'>Cor e tema<i class='fas fa-adjust'></i></h2><section id = 'PField' > <div onmouseover ='changeBorder()' class = 'Theme' style = 'background-color: black; width: 4em; height: 4em; border-radius: 50%'></div> <div class = 'Theme' onmouseover ='changeBorder()' style = 'background-color: LightBlue; width: 4em; height: 4em; border-radius: 50%'></div></section>";
	tab.innerHTML += "</fieldset>"

	body.appendChild(tab);
	person.disabled = true;

	let sectionTheme = document.querySelector('.Theme'); 
	function changeBorder(){
		sectionTheme.style.backgroundColor = 'black';	
	}
/*	document.getElementsByClassName('Theme').onmouseover = function(){
	document.getElementsByClassName('Theme').style.borderWidth = '20px';
	document.getElementsByClassName('Theme').style.borderStyle = 'solid';
	document.getElementsByClassName('Theme').style.borderColor = 'LightBlue';
	}
}
*/
}
