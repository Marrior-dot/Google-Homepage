let person = document.getElementById('personalizar');
person.onclick = function(){
	let main = document.getElementById("documentM");
	console.log(main);
	for (var i = 0;i< main.childElementCount;i=i+1){
		main.children[i].style.filter = 'blur(6px)';
		if (i === 0){
		main.firstElementChild.style.filter = 'none'	
		}
	}
		main.firstElementChild.style.display = 'flex';
		person.disabled = true;
	/*let lightB = document.getElementById("lightBTheme");
/*	tab.innerHTML = "<fieldset style = 'border-radius: 0.5em;border-width: 1px'> <h2 style ='text-align: center'>Cor e tema<i class='fas fa-adjust'></i></h2><section id = 'PField' > <div onmouseover ='changeBorder()' class = 'Theme' style = 'background-color: black; width: 4em; height: 4em; border-radius: 50%'></div> <div class = 'Theme' id = 'lightBTheme' onmouseover ='changeBorder()' style = 'background-color: LightBlue; width: 4em; height: 4em; border-radius: 50%'></div></section>";
	tab.innerHTML += "</fieldset>"
*/
}
