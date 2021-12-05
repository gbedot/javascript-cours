function tribulles (array) {
 
let valeur;

let permut = 1;


do {
    for (let i = 0; i < array.length-1; i++) {
        if (array[i]>array[i+1])
        {
            valeur = array[i];
            array[i] = array[i+1];
            array[i+1] = valeur;
            permut = 1;
        }
    }
    //console.log(permut)
} while (permut=1)
return array;

}

console.log(tribulles([1,7,158,6,7896,12,78]));