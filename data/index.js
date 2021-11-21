//tableau
const array =['Paris','New York','Moscou','Berlin'];
/*
console.log(array); //Appeler le tableau

console.log(array[1]); //Appeler un élément du tableau

console.log(array[1][2]); //Appeler un sous élément de l'élément du tableau

//parcourir un tableau
for (i=0; i<array.length; i++) {
    console.log(array[i]);
}
*/


//tableau multi-dimension
const array2 = ['France',['Paris','Lyon','Marseille'],'Italie',['Rome','Turin']];

for (i=0; i<array2.length; i++) {
  //type du tableau
  //  console.log(array2[i]);
  // console.log(typeof array2[i]);
}
/*
array.sort;

console.log(array.sort());
*/
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";


input.addEventListener( "input", (e) =>{
    console.log(video);
    console.log(e.target.value);

//  link= e.target.value;  

  changeLink(e.target.value);

  if (link){
    video.innerHTML =
    `<iframe width="1280" height="720" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
})

const changeLink = (linktochange) => {
  let embed = linktochange.replace('https://youtu.be/','https://www.youtube.com/embed/');
  console.log(embed);
  link = embed;
}

//"https://www.youtube.com/embed/4zukS7ww1V0?list=PLEiMYEzpB4QsdCzDWlqb7Sj8Fh-gej-US"
//https://youtu.be/4zukS7ww1V0?list=PLEiMYEzpB4QsdCzDWlqb7Sj8Fh-gej-US