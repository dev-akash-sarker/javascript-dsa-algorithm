// let data = [30,20,45,76,20,80]

// let position = document.getElementById('position').value;

// // for (let i = 3 ; i < data.length - 1;i++){
// //     console.log(data[i])
// //     data[i] = data[i+1]
// // }

// // console.log(data)

// for (let i = position; i < data.length - 1 ; i++){
//     console.log(data[i])
//     data[i] = data[i + 1]
// }

// data.length = data.length - 1

// console.log(data)

function deleteEl (){
    let data = [30,20,45,76,20,80]
    let position = document.getElementById('position').value;
    position = parseInt(position)

    for (let i = position; i < data.length - 1; i++){
        data[i] = data[i+1]
    }
    data.length = data.length - 1
    console.log(data)
}

