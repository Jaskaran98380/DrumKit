for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonName=this.innerHTML;
        handleClick(buttonName); 
        buttonAnimation(buttonName);



// var audio=new Audio("sounds/tom"+i+1+".mp3");
// audio.play();
});}
document.addEventListener("keydown",function(event){
        handleClick(event.key);
        buttonAnimation(event.key);
});



function handleClick(key){

    
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio2=new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;
        case "d":
            var audio3=new Audio("sounds/tom-4.mp3");
            audio3.play();
            break;
        case "j":
            var audio4=new Audio("sounds/crash.mp3");
            audio4.play();
            break;
        case "k":
            var audio5=new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case "l":
            var audio6=new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;
    }}                         
    function buttonAnimation(key2){
        var but=document.querySelector("."+key2);
        but.classList.add("pressed");
        setTimeout(function(){
            but.classList.remove("pressed");
        },100);
    }