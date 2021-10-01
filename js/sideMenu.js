window.addEventListener('load',function(){

    const $wrapper = document.getElementById('sideMenuCol');
    const $menuBtn = document.getElementById('sideMenuBtn');
    const $closeBtn = document.getElementById('sideMenu_close');

    $menuBtn.addEventListener('click',navToggle);
    $closeBtn.addEventListener('click',navToggle);

    function navToggle(){
        if($wrapper.classList.contains('nav-open')){
            navCloseFunc();
        }else{
            navOpenFunc();
        }
    }

    function navOpenFunc(){
        $wrapper.classList.add('nav-open');
        anime({
            target:$wrapper,
            left:0,
            duration:1000,
            easing: 'easeOutCine'
        });
        anime({
            target:$menuBtn,
            backgroundColor: '#343434',
            duration:1000,
            easing: 'easeOutCine'
        });
    }

    function navCloseFunc(){
        $wrapper.classList.remove('nav-open');
        anime({
            target:$wrapper,
            left:0,
            duration:1000,
            easing: 'easeOutCine'
        });
        anime({
            target:$menuBtn,
            backgroundColor: '#84A3BC',
            duration:1000,
            easing: 'easeOutCine'
        });
    }
});