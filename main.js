
function onScroll(){
    if(scrollY > 0){
        document.navigation.classList.add('scroll');
    }
    else{
        document.navigation.classList.remove('scroll');
    }
}

