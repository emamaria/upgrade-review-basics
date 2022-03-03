function findArrayIndex(arr , text){

    let newText = text.toLowerCase();
    let newArr = [];

    for(let elem of arr){
        let newTerm = elem.toLowerCase();
        newArr.push(newTerm)
    }

 

    if(newArr.indexOf(newText) >= 0){
         return  "La posición del elemento es en el índice " + newArr.indexOf(newText)
    }else{
        return "No existe dicho texto en el array"
    }


}


  let  list = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

 console.log(findArrayIndex(list , 'ajolote')); 

