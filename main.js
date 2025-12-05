let data = [20,40,60,5,10,70,80,99];
console.log(data)
function searchEL(){

let item = document.getElementById('search').value;
item = parseInt(item);
let index = undefined;

for(let i = 0; i < data.length; i++){
    // console.log(data[i])
    if(data[i] === item){
        index = i;
        break;
    }
}

alert(index)

console.log(index)
}
