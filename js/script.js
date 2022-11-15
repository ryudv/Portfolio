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
setInterval(typing, 200);

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


