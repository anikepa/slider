var slides = document.querySelectorAll('.slide');
var cursor = document.querySelector('.courser');
console.log(cursor);
var counter = 0;
/* for each */

slides.forEach(
    (slide, index) => {
        console.log(index);
        slide.style.left = `${index * 100}%`;
    }
)
const p = () => {
    counter--
    sliderimg();
    console.log("preve", counter);
}



const n = () => {
    if (counter <= 2) {
        counter++
        sliderimg();
        console.log("next", counter);
    }
}




const sliderimg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )



}


document.addEventListener("mousemove",function(dets){
    cursor.style.left = `${dets.x}px`
    cursor.style.top = `${dets.y}px`
})