let person = document.getElementById('personalizar');
let body = document.getElementById('documentB');
let listOfButtons = document.getElementsByClassName('borderA');

let popUps = {

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
