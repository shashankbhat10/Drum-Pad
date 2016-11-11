var clap = new Audio("./sounds/clap.mp3");
var clave = new Audio("./sounds/BD0000.mp3");
var crash = new Audio("./sounds/crash.mp3");
var crashlong = new Audio("./sounds/crash-long.mp3");


var kickdrum = new Audio("./sounds/kick-drum-2.mp3");
var maracas = new Audio("./sounds/maracas.mp3");
var rimshot = new Audio("./sounds/rim-shot.mp3");
var cowbell = new Audio("./sounds/cow-bell.mp3");


// Hi-Hat sounds
var hihat1 = new Audio("./sounds/hi-hat-1.mp3");
var hihat2 = new Audio("./sounds/hi-hat-2.mp3");
var hihat3 = new Audio("./sounds/hi-hat-3.mp3");
var hihat4 = new Audio("./sounds/hi-hat-4.mp3");


// Snare Drum sounds
var snaredrum1 = new Audio("./sounds/snare-drum-1.mp3");
var snaredrum2 = new Audio("./sounds/snare-drum-2.mp3");
var snaredrum3 = new Audio("./sounds/snare-drum-3.mp3");
var snaredrum4 = new Audio("./sounds/snare-drum-4.mp3");



$(document).ready(function(){
    $(".snare-drum-1").on("click", function(){
        playSnaredrum1();
    });
    $(".snare-drum-2").on("click", function(){
        playSnaredrum2();
    });
    $(".snare-drum-3").on("click", function(){
        playSnaredrum3();
    });

    $(".snare-drum-4").on("click", function(){
        playSnaredrum4();
    });



    $(".hi-hat-1").on("click", function(){
        playHihat1();
    });
    $(".hi-hat-2").on("click", function(){
        playHihat2();
    });
    $(".hi-hat-3").on("click", function(){
        playHihat3();
    });

    $(".hi-hat-4").on("click", function(){
        playHihat4();
    });



    $(".clap").on("click", function(){
        playClap();
    });
    $(".clave").on("click", function(){
        playClave();
    });
    $(".crash").on("click", function(){
        playCrash();
    });
    $(".crash-long").on("click", function(){
        playCrashLong();
    });


    $(".cow-bell").on("click", function(){
        playCowbell();
    });
    $(".kick-drum").on("click", function(){
        playKickdrum();
    });
    $(".maracas").on("click", function(){
        playMaracas();
    });
    $(".rim-shot").on("click", function(){
        playRimshot();
    });



    $(document).keydown(function(event) {
        var keyCode = event.which;
        var key = String.fromCharCode(event.which);
        switch (key) {
            case "Q": playClap();
                     $(".clap").removeClass("active");
                break;
            case "W": playClave();
                break;
            case "E": playCrash();
                break;
            case "R": playCrashLong();
                break;
            case "U": playCowbell();
                break;
            case "I": playKickdrum();
                break;
            case "O": playMaracas();
                break;
            case "P": playRimshot();
                break;
            case "A": playHihat1();
                break;
            case "S": playHihat2();
                break;
            case "D": playHihat3();
                break;
            case "F": playHihat4();
                break;
            case "H": playSnaredrum1();
                break;
            case "J": playSnaredrum2();
                break;
            case "K": playSnaredrum3();
                break;
            case "L": playSnaredrum4();
                break;
            default: break;
        };
    });

});




function playClap(){
    $(".clap").addClass("active");
    clap.load();
    clap.play();
}
function playClave(){
    clave.load();
    clave.play();
}
function playCrash(){
    crash.load();
    crash.play();
}
function playCrashLong(){
    crashlong.load();
    crashlong.play();
}
function playCowbell(){
    cowbell.load();
    cowbell.play();
}
function playKickdrum(){
    kickdrum.load();
    kickdrum.play();
}
function playMaracas(){
    maracas.load();
    maracas.play();
}

function playRimshot(){
    rimshot.load();
    rimshot.play();
}
function playHihat1(){
    hihat1.load();
    hihat1.play();
}
function playHihat2(){
    hihat2.load();
    hihat2.play();
}
function playHihat3(){
    hihat3.load();
    hihat3.play();
}
function playHihat4(){
    hihat4.load();
    hihat4.play();
}
function playSnaredrum1(){
    snaredrum1.load();
    snaredrum1.play();
}
function playSnaredrum2(){
    snaredrum2.load();
    snaredrum2.play();
}
function playSnaredrum3(){
    snaredrum3.load();
    snaredrum3.play();
}
function playSnaredrum4(){
    snaredrum4.load();
    snaredrum4.play();
}
