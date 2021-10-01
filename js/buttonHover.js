window.addEventListener('load',function(){
    const buttons = document.querySelectorAll('mainCol_button');
    for(let i = 0; i < buttons.length; i++) {
    	buttons[i].addEventListener('mouseover', buttonHover(i));
	}
});

function buttonHover(num) {
    const hovers = document.querySelectorAll('mainCol_button_hover');
    let target = hovers[num];
    console.log("hover");
    anime({
        target: target,
        opacity: 0.8,
        duration: 300,
        easing: 'easeOutCine'
    });
}