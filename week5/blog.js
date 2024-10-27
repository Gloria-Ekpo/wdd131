const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function generateArticles() {
    const outputElement = document.querySelector('.grid'); 

    articles.forEach((article) => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('post');

        articleElement.innerHTML = `
            <ul class="post-details">
                <li>${article.date}</li>
                <li>${article.ages}</li>
                <li>${article.genre}</li>
                <li>${article.stars}</li>
            </ul>
            <section class="post-content">
                <h2><a href="#">${article.title}</a></h2>
                <figure>
                    <img src="${article.imgSrc}" alt="${article.imgAlt}" />
                </figure>
                <p>
                    ${article.description} <a href="#">Read More...</a>
                </p>
            </section>
        `;
        outputElement.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', generateArticles);

articles.push({
    id: 4,
    title: "Harry Potter and the Sorcerer's Stone",
    date: "June 26, 1997",
    description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
    imgAlt: "Book cover for Harry Potter and the Sorcerer's Stone",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
});
