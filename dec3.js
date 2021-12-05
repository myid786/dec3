let add = document.getElementbyId('increment');
let remove = document.getElementbyId('decrement');


let int = document.getElementbyId('number');
let integer = 0;


add.addEventListner('click',function(){
    integer +=1;
    int.innerHTMl=integer;

})
 remove.removeEventListener('click', function(){
     integer -= 1;
     int.innerHTMl= integer;
 })
 