let data = [60,30,10,67,40];
let newEl = 70;
let position = 4;

console.log("data length : ", data.length);

for (let i = data.length - 1; i >= 0; i--){
    console.log(i)
    if(i >= position){
        data[i+1] = data[i]
        if(i == position){
            data[i] = newEl
        }
    }
   console.log(`index ${i} of number ${data[i]}`)
}

// for (let i = data.length - 1; i>=0;i--){
//     console.log(i)
//     if(i >= position){
//         data[i+1]=data[i];
//         if(i == position){
//             data[i] = newEl
//         }
//     }
// }

console.warn(data)

function insertEl(){
let data = [60,30,10,67,40];
let newEl = document.getElementById('newEl').value;
let position = document.getElementById('position').value;


for (let i = data.length - 1; i >= 0; i--){

    if(i >= position){
        data[i+1] = data[i]
        if(i == position){
            data[i] = parseInt(newEl)
        }
    }

}

console.warn(data)

}

const arr = [10,22,35,49]

arr.splice(1,0,300)

console.log(arr)


