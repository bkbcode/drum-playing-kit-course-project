var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })}

    document.addEventListener("keypress", function (event){
        var keyEvent = event.key;
        makeSound(event.key);
        buttonAnimation(event.key);        
    })

    function makeSound(input){

        switch (input) {
            case "w":
                var crash = new Audio ("sounds/crash.mp3");
                crash.play();
                break;
        
                case "a":
                    var kickBass = new Audio ("sounds/kick-bass.mp3");
                    kickBass.play();
                    break;
    
                case "s":
                    var snare = new Audio ("sounds/snare.mp3");
                    snare.play();
                    break; 
    
                case "d":
                    var tom1 = new Audio ("sounds/tom-1.mp3");
                    tom1.play();
                    break;
    
                case "j":
                    var tom2 = new Audio ("sounds/tom-2.mp3");
                    tom2.play();
                    break;
    
                case "k":
                    var tom3 = new Audio ("sounds/tom-3.mp3");
                    tom3.play();
                    break;  
    
                case "l":
                    var tom4 = new Audio ("sounds/tom-4.mp3");
                    tom4.play();
                    break;
    
                default: console.log(keyEvent)
                    break;
        }

    }

    function buttonAnimation (currentkey){
        var activeButton = document.querySelector("." + currentkey);
        activeButton.classList.add("pressed")

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100 );
    }

    
    // The above solution uses the switch statement as opposed to if else (shown below).


    // Another solution (using if else):
    // ("click", function (){

    //     if(this.innerHTML === "w"){
    //         var crash = new Audio ("sounds/crash.mp3")
    //         crash.play()
    //     } else if (this.innerHTML === "a"){
    //         var kickBass = new Audio ("sounds/kick-bass.mp3")
    //         kickBass.play()
    //     } else if (this.innerHTML === "s"){
    //         var snare = new Audio ("sounds/snare.mp3")
    //         snare.play()
    //     } else if (this.innerHTML === "d"){
    //         var tom1 = new Audio ("sounds/tom-1.mp3")
    //         tom1.play()
    //     } else if (this.innerHTML === "j"){
    //         var tom2 = new Audio ("sounds/tom-2.mp3")
    //         tom2.play()
    //     } else if (this.innerHTML === "k"){
    //         var tom3 = new Audio ("sounds/tom-3.mp3")
    //         tom3.play()
    //     } else if (this.innerHTML === "l"){
    //         var tom4 = new Audio ("sounds/tom-4.mp3")
    //         tom4.play()
    //     }
    //     })