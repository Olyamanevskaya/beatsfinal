const myForm = document.querySelector('#form');
const sendButton = document.querySelector('#sendButton');
const resetButton = document.querySelector('#resetButton');



sendButton.addEventListener('click', function(event){
	event.preventDefault();

  
	console.log(myForm.elements);

	document.getElementById("sendButton").addEventListener('click', function(){
		document.getElementById("overlay__js").classList.add("open")
	})

	document.getElementById("close").addEventListener('click', function(){
		document.getElementById("overlay__js").classList.remove("open")
	})

	document.querySelector("#overlay__js .popup").addEventListener('click', event => {
		event._isClickWithInModal = true;
	})

	document.querySelector("#overlay__js").addEventListener('click', event => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove("open")
	})
})