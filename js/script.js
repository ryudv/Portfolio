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




(function () {
    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;

      var fields = Object.keys(elements).filter(function (k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      }).map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet ||
        "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email ||
        ""; // no email by default

      return {
        data: formData,
        honeypot: honeypot
      };
    }

    function handleFormSubmit(event) { // handles form submit without any jquery
      event.preventDefault(); // we are submitting via xhr below
      var form = event.target;
      var formData = getFormData(form);
      var data = formData.data;

      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }

      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(
            ".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
            Swal.fire('Completed the mail:-)');
          }
        }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(
          data[k]);
      }).join('&');
      xhr.send(encoded);
    }

    function loaded() {
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();


