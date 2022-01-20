// window.onload = init;

// function init() {
//     let image1 = document.getElementById("one");
//     image1.onclick = showImageOne;
//     let image2 = document.getElementById("two");
//     image2.onclick = showImageTwo;
// }

// function showImageOne() {
//     let image = document.getElementById("one");
//     image.src = "images/one.jpg";
// }

// function showImageTwo() {
//     let image = document.getElementById("two");
//     image.src = "images/two.jpg";
// }


let paints = {
    "one": "Мона Лиза",
    "two": "Девушка с жемчужной серёжкой"
};

window.onload = function () {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
        // images[i].onmouseover = showAnswer;
        // images[i].onmouseout = blurAnswer;
    }
};

function showAnswer(event) {
    let image = event.target; //HTMLImageElement
    let name = image.id; //one, two...
    name = name + ".jpg";
    image.src = "images/" + name;
    let ques1 = prompt("Укажите название картины");
    if (ques1 == paints[image.id]) {
        alert("Верно!");
    }
    else {
        alert("Неверно!");
        blurAnswer(image);
    }
    // setTimeout(blurAnswer, 2000, image);
}

function blurAnswer(image) {
    // let image1 = image.target;
    let name = image.id;
    name = name + "blur.jpg";
    image.src = "images/" + name;
}