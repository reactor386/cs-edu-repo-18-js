
/*
// создадим объект Map для хранения сессии
let session =  new Map();

// Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent);

// Запросим возраст пользователя и тоже сохраним
session.set("age", prompt("Пожалуйста, введите ваш возраст"));
 
// Проверка на возраст и сохранение сессии
if(session.get("age") >= 18) {
   let startDate = new Date().toLocaleString();
  
   alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate );
   session.set("startDate", startDate);
}
else {
  // Если введенное число < 18, либо если введено не число -
  //  пользователь будет перенаправлен
  alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
  window.location.href = "http://www.google.com";
  // a = true + 20 + "name";
}
 
// Вывод в консоль
for (let result of session) {
  console.log(result);
}
*/


/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
/*
function filterContent(inputString) {
// Сохраняем функцию в переменную
// let contentFilter =  function filterContent() {

  // Принимаем пользовательский ввод в качестве параметра

  // Сохраняем текст пользовательского запроса
  // let inputString = document.getElementsByTagName('input')[0].value;

  // Находим контейнеры с видео, которые необходимо фильтровать
  let elements = document.getElementsByClassName('video-container');

  // Пробегаемся по контейнерам
  for (let i = elements.length - 1; i >= 0; i--) {
      // Вытаскиваем текст описания видео, которое необходимо отфильтровать
      let videoText = elements[i].querySelector(".video-title").innerText;
      // Выполняем фильтрацию, сравнивая значения в нижнем регистре
      if(!videoText.toLowerCase().includes(inputString.toLowerCase())) {
          // Скрываем неподходящие
          elements[i].style.display = 'none';
      } else {
          // Показываем подходящие
          elements[i].style.display = 'inline-block';
      }
  }
}
*/

/*
// в этот параметр будет передана ФУНКЦИЯ парсинга пользовательского ввода
function filterContent(inputParseFunction) {
  
  let elements = document.getElementsByClassName('video-container');

  for (let i = elements.length - 1; i >= 0; i--) {
    let videoText = elements[i].querySelector(".video-title").innerText;
    // Переданная функция вызвана
    if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
      elements[i].style.display = 'none';
    } else {
      elements[i].style.display = 'inline-block';
    }
  }
}
*/

function filterContent() {

  let elements = document.getElementsByClassName('video-container');
  
  for (let i = elements.length - 1; i >= 0; i--) {
    let videoText = elements[i].querySelector(".video-title").innerText;
    // Захват переменной теперь происходит с помощью замыкания
    if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
      elements[i].style.display = 'none';
    } else {
      elements[i].style.display = 'inline-block';
    }
  }
}


/*
* Функция для проверки и сохранения  данных пользователя
* Также блокирует доступ к сайту лицам, не подтвердившим свой возраст
*
* */

/*
// Логирование сессии (объявлено через expression)
let sessionLog = function logSession(session) {
  // Вывод в консоль
  for (let result of session) {
    console.log(result);
  }
}

function handleSession() {
// Сохраняем функцию в переменную
// let sessionHandler = function handleSession() {
  
  // создадим объект Map для хранения сессии
  let session =  new Map();

  // Сохраним UserAgent
  session.set("userAgent", window.navigator.userAgent);
 
  // Запросим возраст пользователя и тоже сохраним
  session.set("age", prompt("Пожалуйста, введите ваш возраст"));
 
  // Проверка на возраст и сохранение сессии
  if(session.get("age") >= 18) {
      let startDate = new Date().toLocaleString();
     
      alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate);
      session.set("startDate", startDate);
  }
  else {
      alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
      window.location.href = "http://www.google.com";
  }

  // Теперь мы возвращаем объект сессии
  return session;
}
*/


/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */ 
let session = new Map();

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession() {
  // Сохраним время начала сессии
  session.set("startDate", new Date().toLocaleString());
  // Сохраним UserAgent
  session.set("userAgent", window.navigator.userAgent);
}

/*
* Проверка возраста пользователя
* 
* */
function checkAge() {
  session.set("age", prompt("Пожалуйста, введите ваш возраст?"));
  
  if(session.get("age") >= 18) {
    alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString());
  }
  else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com";
  }
}

/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function logSession() {
  for (let result of session) {
    console.log(result);
  }
}


/*
* Всплывающее окно будет показано по таймауту
* 
* */
setTimeout(() =>
  alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
30000);

