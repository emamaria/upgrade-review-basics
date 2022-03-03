

function swap(list, index1, index2){

    
    let index1Text =  list[index1]

    let index2Text =  list[index2]

    
      list.splice(index1, 1, index2Text)
      list.splice(index2, 1, index1Text)

    return list;
   
}

console.log(swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 1, 3));


