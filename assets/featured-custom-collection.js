
const radio = document.querySelectorAll('.radio')
const firstImage = document.querySelectorAll('.get-img')
// console.log(firstImage)
// console.log(radio)

radio.forEach((eachradio)=>{
    eachradio.addEventListener("mouseenter",function(){
        let imageLink = eachradio.getAttribute("data-images");
        let imageElIndex = eachradio.getAttribute("data-imageindex") - 1;
        firstImage[imageElIndex].setAttribute("src",imageLink);
        // console.log(eachradio);
    })
})



const radio1 = document.querySelectorAll('.radio-1')
const firstImage1 = document.querySelectorAll('.get-img-2')
// console.log(firstImage)
// console.log(radio)

radio1.forEach((eachradio)=>{
    eachradio.addEventListener("mouseenter",function(){
        let imageLink = eachradio.getAttribute("data-images");
        let imageElIndex = eachradio.getAttribute("data-imageindex") - 1;
        firstImage1[imageElIndex].setAttribute("src",imageLink);
        // console.log(eachradio);
    })
})