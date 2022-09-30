let arr = [];

let add = (x) => arr.unshift(x);
let del = () => arr.shift();
let print = () => console.log(arr);

add(12);
add('July');
add(8);
add(412)
print(arr);
del();
print(arr);

