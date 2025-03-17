//this is my code

console.log("your code is linked")

function showModal(){
    $(".modal").toggleClass("show")
}

$(".button").click(showModal)
$(".modal").click(showModal)

function hideText(){
    $(this).css("opacity","0")
}

function showText(){
    $(this).css("opacity","1")
}

$(".chaos").hover(hideText,showText)

function Music() {
    document.getElementById("bg-music").play();
}
