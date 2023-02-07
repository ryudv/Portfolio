// 컨테이너1 메인화면 글자 타이핑 효과
const content = "Hello, Welcome to My\n Portfolio Site:-)\n My Name is Haneul-Ryu. I'm Front-end Developer!";
const introText = document.querySelector(".introText");
let i = 0;

function typing(){
    let txt = content[i++];
    introText.innerText += txt;
    if (i > content.length) {
        introText.textContent = "";
        i = 0;
    }
}
setInterval(typing, 100);

// 모든 컨테이너 박스의 타이틀 효과
let observer = new IntersectionObserver((e)=>{
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        } else {
            // box.target.style.opacity = 0;
            box.target.style.transform = 'translateY(100px)';
        }
    }, { threshold: 0.5 });
});
let operBox = document.getElementsByClassName('operBox');

observer.observe(operBox[0]);
observer.observe(operBox[1]);
observer.observe(operBox[2]);

// 컨테이너2 프로젝트 나타나는 효과
const $cards = document.querySelectorAll('.card')
    
const observer2 = new IntersectionObserver(e => {
    e.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting)
})
}, { threshold: 0.5 })

$cards.forEach(card => observer2.observe(card));











var mainSlider = $('.main-slider');
var innerText = $('.inner-text');

mainSlider.slick({
    slidesToShow: 1,
    dots: true,
});

mainSlider.on('wheel', function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) { $(this).slick('slickPrev'); } else { $(this).slick('slickNext'); } 
});








// 스크롤 페이지 이동
// window.onload = function(){
//     const elm = document.querySelectorAll('.section');
//     const elmCount = elm.length;
//     elm.forEach(function(item, index){
//       item.addEventListener('mousewheel', function(event){
//         event.preventDefault();
//         let delta = 0;

//         if (!event) event = window.event;
//         if (event.wheelDelta) {
//             delta = event.wheelDelta / 120;
//             if (window.opera) delta = -delta;
//         } 
//         else if (event.detail)
//             delta = -event.detail / 3;

//         let moveTop = window.scrollY;
//         let elmSelector = elm[index];

//         // wheel down : move to next section
//         if (delta < 0){
//           if (elmSelector !== elmCount-1){
//             try{
//               moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
//             }catch(e){}
//           }
//         }
        
//         // wheel up : move to previous section
//         else{
//           if (elmSelector !== 0){
//             try{
//               moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
//             }catch(e){}
//           }
//         }

//         const body = document.querySelector('html');
//         window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
//       });
//     });
//   }


