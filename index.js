let A = [1,2,3];
let B = [4,5,6,11];
let C = [];

for(let i = 0; i < A.length ; i++){
    C[i]= A[i]
}
for(let i = 0; i < B.length; i++){
    C[A.length + i]= B[i]
}


console.log(C)