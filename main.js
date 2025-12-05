let data = [9,45,2,8,45,23,7,0,11,41,77];

// for(let i = 0; i < data.length; i++){
//     document.write(`array ${i} is ${data[i]} <br>`)
// }

// let x = 0;
// document.writeln(data[x])

function getElement(){
    let el = document.getElementById('element').value
    isEl = parseInt(el);

    if(isNaN(el)){
        alert("Validation failed")
        return;
    }

    if(isEl < 0 || el >= data.length){
        alert("Validation failed")
        return;
    }

    alert(data[isEl]);
}