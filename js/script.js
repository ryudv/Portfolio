// 컨테이너1 메인화면 글자 타이핑 효과
const content = "Hello, Welcome to My Portfolio Site:-) My Name is Haneul-Ryu, I'm Front-end Developer!";
const introText = document.querySelector(".introText");
let i = 0;

function typing(){
    let txt = content[i++];
    introText.innerText += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        introText.textContent = "";
        i = 0;
    }
}
setInterval(typing, 100);

// 컨테이너 박스 타이틀이 나타나는 효과
let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
        } else {
            box.target.style.opacity = 0;
        }
    });
});
let operBox = document.getElementsByClassName('operBox');

observer.observe(operBox[0]);
observer.observe(operBox[1]);
observer.observe(operBox[2]);





const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 1.0, // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            //entry.target.style.visibility ='visible';
        } else {
            entry.target.classList.remove('active');
            //entry.target.style.visibility ='hidden';
        }
    });
}, options);

const boxList = document.querySelectorAll('.box');
const boxList2 = document.querySelectorAll('.box2');

// 반복문을 돌려 모든 DOM에 적용
boxList.forEach(el => observer1.observe(el));
boxList2.forEach(el => observer1.observe(el));












window.onload = function(){
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }