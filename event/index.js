const btn = document.querySelector('#btn');
const img = document.getElementById('monimage');

//console.log('ici');

btn.addEventListener('click', () => {
    console.log(img);
    console.log(btn);
    img.classList.toggle('show')
   // alert('ca a changé')
})


//********************** */

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
console.log(mouseEvent);
mouseEvent.addEventListener('mousemove', (event) => {
    horizontal.innerHTML = event.x;
    vertical.innerHTML = event.y;
    mouseEvent.style.left = event.x /window.innerWidth * 100 + "%";
//    mouseEvent.style.padding = event.y /window.height * 100 + "%";

    if (event.x > 500) {
        document.body.style.filter = "blur(3px)"
    }
    else
    {
        document.body.style.filter = "none"
    }
})

/************************************** */

document.getElementById('input').addEventListener('input', (e) => {
    //console.log(e.target.value);
})

/**************************************** */

const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme","salmonTheme","yellowTheme");
        switch (e.target.id){
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
            case "yellow":
                document.body.classList.add("yellowTheme");                                    
                break;
        }
    })
})