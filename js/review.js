let surpriseBtn = document.getElementById('button');
let rightArrow = document.getElementById('rightArrow');
let leftArrow = document.getElementById('leftArrow')
let box = document.getElementById('box');
let image = document.getElementById('image');
let Fname = document.getElementById('name');
let job = document.getElementById('job');
let text = document.getElementById('text');


const reviews = [
    {
        id: 1,
        name1: 'susan smith',
        job1: 'web developer',
        img1: 'images/person-1.jpeg',
        text1: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name1: 'anna johnson',
        job1: 'web designer',
        img1: 'images/person-2.jpeg',
        text1: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name1: 'Emma Diol',
        job1: 'intern',
        img1: 'images/person-4.png',
        text1: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name1: 'bill anderson',
        job1: 'the boss',
        img1: 'images/person-3.jpeg',
        text1: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

window.addEventListener('DOMContentLoaded', function () {
    change();
})

let currentIndex = 0;
surpriseBtn.addEventListener('click', function () {
    currentIndex = Math.floor(Math.random() * reviews.length);
    change();
})

leftArrow.addEventListener('click', function () {
    --currentIndex;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    }
    change();
})

rightArrow.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex == reviews.length) {
        currentIndex = 0;
    }
    change();
})

function change() {
    currentContent = reviews[currentIndex];
    image.src = currentContent.img1;
    Fname.innerText = currentContent.name1;
    job.innerText = currentContent.job1;
    text.innerText = currentContent.text1;
}

