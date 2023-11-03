//Adding a listener to all buttons

var numberOfButton = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //checking innerHTML
        var buttonInnerHtml = this.innerHTML;
        keyBoardpress(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//adding keyboard listener
document.addEventListener("keypress", function (event) {
    keyBoardpress(event.key);
    buttonAnimation(event.key);
});

//Applying switch statements to play different audios

function keyBoardpress(key) {
    switch (key) {
        case "w":
            var myAudio1 = new Audio("/Drum Kit/sounds/tom-1.mp3");
            myAudio1.play();
            break;

        case "a":
            var myAudio2 = new Audio("/Drum Kit/sounds/tom-2.mp3");
            myAudio2.play();
            break;

        case "s":
            var myAudio3 = new Audio("/Drum Kit/sounds/tom-3.mp3");
            myAudio3.play();
            break;

        case "d":
            var myAudio4 = new Audio("/Drum Kit/sounds/tom-4.mp3");
            myAudio4.play();
            break;

        case "j":
            var myAudio5 = new Audio("/Drum Kit/sounds/crash.mp3");
            myAudio5.play();
            break;

        case "k":
            var myAudio6 = new Audio("/Drum Kit/sounds/kick-bass.mp3");
            myAudio6.play();
            break;

        case "l":
            var myAudio7 = new Audio("/Drum Kit/sounds/snare.mp3");
            myAudio7.play();
            break;
        default:
            break;
    }

}

//adding animation
function buttonAnimation(currentKey) {
    var activation = document.querySelector("."+currentKey);
    activation.classList.add("pressed");

    //removing the animation after the click

    setTimeout(function () {
        activation.classList.remove("pressed");
    }, 100);
}