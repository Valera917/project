const circles = document.querySelectorAll('.circle'),
    btns = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    squares = wrap.querySelectorAll('.square'); // wrap как замена document

btns.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const block = document.createElement('div');

block.classList.add('black');

wrap.append(block);
wrap.prepend(block);
squares[0].after(block);
squares[0].before(block);

circles[0].remove();

squares[0].replaceWith(circles[0]);

block.innerHTML = '<h1>Hello world</h1>';
block.textContent = '<h1>Hello world</h2>';

block.insertAdjacentHTML('afterend', '<h2>This is Valeraaaaaaaa</h2>');

// Cобытия

btns.forEach(item => {
    item.addEventListener('click', () => {
        console.log("11");
    });
});

// Отмена стандартного поведения

wrap.addEventListener('click', (e) => {
    e.preventDefault();
}, {
    once: true
}); // одно срабатывание



// console.log(document.head);
// console.log(document.body.childNodes);
// console.log(document.querySelector('#container').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}