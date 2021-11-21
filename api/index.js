const quote = document.getElementById('quote');

const getQuote =() => {
    fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data)=> {  console.log(data)
        quote.innerHTML = data.content + ' - ' +data.author;
    });

    fetch('https://picsum.photos/400/600')
    .then((res) => {
        document.getElementById('pic').innerHTML = 
        `<img src=${res.url} />`;
    });
};

quote.addEventListener('click', () => getQuote());

getQuote();