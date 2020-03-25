//$ - виклик функції jQuery


// 1 варіант
// $(document).ready(function(){

// })

// 2 варіант 
$(function() {
    // $('*').css('color', 'red'); // у випадку коли 1 властивість

    // $('tagname') // div, p, h2 ....
    // $('#id') // #id
    // $('.class') // .class
    
    // $('#box').html('<span> HTML </span>');
    // $('#box').text('<span>TEXT</span>');


    //append = appendChild
    //методи 
    $('#box').append('<p class="text">Append</p>'); // додає
    $('#box').prepend('<p class="text">Prepend</p>'); // додає перед 

    $('#box').before('<p>Before</p>'); // ставить перед класом box
    $('#box').after('<p>After</p>'); //ставить після елемента box

    // $('p').wrap('<div></div>'); // обгорнути 

    // $('p.text').wrap('<div></div>'); // доступимось до всіх p з класом text

    // $('p').wrapAll('<div></div>'); // ,бере всі p обгортає в одну div і кидає їх вверх

    // $('p').wrapInner('<b></b>'); // якщо обгорнути в div це не є коректно

    // $('li:first').css('color', 'red'); // перша li
    // $('li:last').css('color', 'blue'); // остання li

    // $('li:first-child').css('color', 'red'); // кожна перша li
    // $('li:first-last').css('color', 'red'); // кожна остання li

    // $('li:odd').css('color', 'red'); // всі непарний li
    // $('li:even').css({
    //     color: 'blue',
    //     backgroundColor: 'lightgreen' 
    // }); // всі парні li

    // $('ul li:gt(2)').css({
    //     backgroundColor: 'green',
    //     color: 'blue'
    // }) // gt - більший за 2 (індекс) greater than 

    // $('ul li:lt(2)').css({
    //     backgroundColor: 'lightblue',
    //     color: 'red'
    // }) // lt - менші за 2 less than

    // $('ul li:eq(2)').css('color', 'gold'); // eq - рівне 2  

    // $('li:contains("Item 3")').css('background-color', 'red'); // стилізує ті li які містить текст Item 3
    // $('li:contains("item 3")').remove(); // видаляє Item 3 
    // $('li:contains("item3")').empty(); // робить пусту Item 3 

    // $('li:empty').css('background-color', 'lightblue'); // стилізує тільки item3


    // $(':header').css('color', 'red') // дозволяє доступитись до всіх h

    // $('div#box:has(p.main)').css('background-color', 'purple');

    // let some = $('#box')html();
    // console.log(some);

    // let some = $('#box').text();
    // console.log(some);


    // $('input').val('set value'); // доступ до значень всередині input

    // $('input').blur(function() {
    //     let val = $(this).val();
    //     console.log(val);
    // })


    // $('[href]').css('color', 'red'); // доступ до всіх href

    // $('[href="#"]').css('color', 'green'); //  всі де є #

    // $('[href!="#"]').css('color', 'green'); // застилізує всі елементи крім href!="#"
    // $('a[href!="#"]').css('color', 'green'); // застилізує тільки a[href!="#"]

    // $('a[href^="#"]').css('color', 'green'); 
    // $('a[href$="#"]').css('color', 'green');


    // $(':button').css('color', 'red'); // доступаємось то типу input 

    // $('p').filter('.text').css('color', 'red'); // цепочка методів, застилізує всі p які мають клас text

    // $('p').not('.text').css('color', 'blue'); // застилізує всі p які не мають класу text






    // let w = $('#box').width(); // дістаємо ширину елемента 
    // console.log(w);

    // let h = $('#box').height(); // дістаємо висоту елемента 
    // console.log(h);

    // let inW = $('#box').innerWidth(); // ширина з внутрішніми відступами
    // console.log(inW);

    // let inH = $('#box').innerHeight(); // висота з внутрішніми відступами
    // console.log(inH);

    // let outW = $('#box').outerWidth(); //ширина без внутрішніх відступів
    // console.log(outW);

    // let outH = $('#box').outerHeight(); //висота без внутрішніх відступів
    // console.log(outH);


})