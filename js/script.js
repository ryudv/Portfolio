let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
        } else {
            box.target.style.opacity = 0;
        }
    })
})
let operBox = document.getElementsByClassName('operBox')
//html요소를 감시해줌
observer.observe(operBox[0])
observer.observe(operBox[1])
observer.observe(operBox[2])
observer.observe(operBox[3])