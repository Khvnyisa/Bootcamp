let img = document.getElementById('image')



let images ; if(images = localStorage.getItem("fruits") ){images=JSON.parse(localStorage.getItem("fruits"))}
else{ images = [
"image1.jpg",
"image2.jpg", 
"image3.jpg",
"image4.jpg",
"image5.jpg",
"image6.jpg"

]
}

let i = 0

//let show = document. querySelector(".show_image");
//let next = document. querySelector("next");
//let prev = document. querySelector("prev")



// show.src = images[i]
// show.alt = "image of fruit"

function save(){
    let img = document.querySelector('.file').value;
    images.push(img)
    localStorage.setItem("fruits",JSON.stringify(fruits)) 
    console.log(img);
} 

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