let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogString, dogNames){
    for(let i = 0; i < dogNames.length; i++){
        if(dogString.includes(dogNames[i])){
            console.log(`Matched ${dogNames[i]}`);
        } else{
            console.log(`No matches with ${dogNames[i]}`);
        }
    }
}

console.log(findWords(dog_string, dog_names))



let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
          arr.splice(i, 1, "even index");
        }
      }
    console.log(arr)
}

console.log(replaceEvens(given_arr))