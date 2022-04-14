console.log('안녕하세요');

// 스크롤 영역 이동
window.onload = function () {
	const elm = document.querySelectorAll('.section');
	const elmCount = elm.length;
	elm.forEach(function (item, index) {
		item.addEventListener('mousewheel', function (event) {
			event.preventDefault();
			let delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			} else if (event.detail)
				delta = -event.detail / 3;
			let moveTop = window.scrollY;
			let elmSelector = elm[index];

			// wheel down : 다음 페이지로 이동
			if (delta < 0) {
				if (elmSelector !== elmCount - 1) {
					try {
						moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
					} catch (e) {}
				}
			}

			// wheel up : 이전 페이지로 이동
			else {
				if (elmSelector !== 0) {
					try {
						moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
					} catch (e) {}
				}
			}

			const body = document.querySelector('html');
			window.scrollTo({
				top: moveTop,
				left: 0,
				behavior: 'smooth'
			});
		});
	});
}

// 메인페이지 자기소개 타이핑
const content = "Hello. I'm Haneul,\n Front-end developer.\n Welcome to the\n my portfolio site:-)           ";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 100);