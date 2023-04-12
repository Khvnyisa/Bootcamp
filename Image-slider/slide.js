let images = [
"image1.jpg",
"image2.jpg", 
"image3.jpg"

]

let i = 0

//let show = document. querySelector(".show_image");
//let next = document. querySelector("next");
//let prev = document. querySelector("prev")

let img = document.getElementById('image')

// show.src = images[i]
// show.alt = "image of fruit"

function next(){
   
    i++

    if(i >= images.length){
        i = 0
    }
    img.src = images[i]
}

function prev() {

    i--
    if(i < 0){
        i = images.length-1; 
    }
    img.src = images[i]
}