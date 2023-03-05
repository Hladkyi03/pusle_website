// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// получаем массив данных
const data = [
    { title: "Карточка 1", text: "Это содержимое карточки 1", imageUrl: "../img/photo_1.png" },
    { title: "Карточка 2", text: "Это содержимое карточки 2", imageUrl: "../img/photo_2.png" },
    { title: "Карточка 3", text: "Это содержимое карточки 3", imageUrl: "../img/photo_3.png" }
  ];
  
  // получаем элемент, в который будем добавлять карточки
  const container = document.querySelector("#cards-container");
  
  // создаем кнопку и добавляем ее на страницу
  const addButton = document.createElement("button");
  addButton.textContent = "Добавить карточки";
  document.body.appendChild(addButton);
  
  // добавляем обработчик события на кнопку
  addButton.addEventListener("click", () => {
    data.forEach(item => {
      // создаем элементы для карточки
      const card = document.createElement("div");
      const title = document.createElement("h2");
      const text = document.createElement("p");
      const image = document.createElement("img");
  
      // добавляем содержимое в элементы
      title.textContent = item.title;
      text.textContent = item.text;
      image.src = item.imageUrl;
      image.alt = item.title;
  
      // добавляем стили и классы для элементов
      card.classList.add("card");
      title.classList.add("card-title");
      text.classList.add("card-text");
  
      // добавляем элементы в карточку
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(text);
  
      // добавляем карточку в контейнер на странице
      container.appendChild(card);
    });
  });

  const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 8000,
    controls: false,
    autoplayButtonOutput: false,
    navPosition: "bottom",
    responsive: {
      320: {
        nav: true
      }},
    responsive: {
      993: {
        nav: false
      }
  }
   });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });