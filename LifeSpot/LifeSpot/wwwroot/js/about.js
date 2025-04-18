// alert("Javascript для страницы 'о проекте' подключен!")


// Функция сохранения отзыва в объект

/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
*
* */
function getReview() {
  // Создадим объект
  let review = {};
 
  // Сохраним свойство имени
  review["userName"] = prompt("Как вас зовут ?");
  if (review["userName"] == null) {
    return
  }
 
  // Сохраним текст отзыва
  review["comment"] = prompt("Напишите свой отзыв");
  if (review["comment"] == null) {
    return
  }
 
  // Сохраним текущее время
  review["date"] = new Date().toLocaleString();
 
  // Добавим на страницу
  writeReview(review);
}


// Функция записи отзыва (вызывается из функции сохранения)

/*
* Запишем отзыв на страницу
*
* */
const writeReview = review => {
  document.getElementsByClassName('reviews')[0].innerHTML +=

    '<div class="review-text">\n' +

    `<p><i><b>${review['userName']}</b>  ${review['date']}</i></p>` +
    `<p>${review['comment']}</p>` +

    '</div>';
}
