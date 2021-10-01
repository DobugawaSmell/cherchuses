var imageState = 1;
var indicatorWidth = 0;
const changeTime = 3000;

window.addEventListener('load',function(){
    let slideWindow = document.getElementById("mainCol_slideshow");
    this.setInterval(indicatorChange,1);
});

function moveTo(target){
    let slideWindow = document.getElementById("mainCol_slideshow");
    const slideWindow_w = document.getElementById('mainCol_slideshow').clientWidth;
    let positX = slideWindow_w*imageState +10;
    slideWindow.scrollTo({
        left: positX,
        behavior: 'smooth'
    });
    imageState = imageState + 1;
    if(imageState >= 4) imageState = 0;
}

function indicatorChange(){
    const indicator = document.getElementById("mainCol_image_indi");
    indicatorWidth = indicatorWidth + 1;
    indicator.style.width = 100*(indicatorWidth/changeTime) + '%';
    if(indicatorWidth >= changeTime){
        indicatorWidth = 0;
        moveTo(imageState);
    } 
}