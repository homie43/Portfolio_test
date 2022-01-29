const hamburger = document.querySelector('.hamburger'), /* обращаемся к гамбургеру */
        menu = document.querySelector('.menu'), /* обращаеимся к меню */
        closeElem = document.querySelector('.menu__close'); /* обращаемся к крестику */

hamburger.addEventListener('click',() => { /* при клике на hamburge, будет добавляться(add) к menu класс активности active */
        menu.classList.add('active'); /* обращаясь к списку классов класса меню, мы будем добавлять класс active */
});

closeElem.addEventListener('click',() => { /* при клике на крестик(closeElem) будет убираться(remove) класс активности active у menu */
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span')

counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
});