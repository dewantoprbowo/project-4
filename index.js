//var a = prompt("Ketikkan angka pertama:");
//var b = prompt("Ditambah  dengan angka kedua:");
//var hasil = alert(parseInt(a) + parseInt(b));

//let tahun = prompt('Tahun berapa Indonesia merdeka')
//if (tahun < 1945) {
//    alert('Belum Merdeka')

//}else if(tahun > 1945){
//    alert('Sudah Merdeka')

//}else{
//    alert('Pas Merdeka')
//}

//const score = true
//const attendance = false
//const attitude = false

//const result = attendance || attitude || score
//console.log(result)

//if(score == true){
//    console.log('Lulus')
//}else{
//    console.log('Tidak Lulus')
//}

//const cars = ['ayla', 'sigra', 'avanza', 'cayla', 'ayla', 'sigra', 'avanza', 'cayla', 'ayla', 'sigra', 'avanza', 'cayla']
//console.log('MOBIL', cars)
//console.log('Index ke 0', cars[0])
//console.log('Index ke 1', cars[1])
//console.log('JUMLAH DATA', cars.length)
//console.log('REVERSE', cars.reverse())
//console.log('SORT', cars.sort())
//console.log('POP', cars.pop())

//var scores = {
//    [10, 20, 30]
//    [15, 25, 35]
//    [1, 3, 5]
//}

//console.log(scores[0][0]);
//console.log(scores[1][0]);


//LOOP
//for (let i = 1; i <= cars.length; i++){
//    console.log(cars[i - 1])
//}

//for (let i = 1; i <= cars.length; i++){
//    console.log(cars[i - 1])
//}

//async function fetchText() {
//    let response = await fetch('https://reqers.in/api/users?page=2')
//    let data = await response.text();
//    console.log(data);
//}


const logger = function(name, age){
    const result ='Nama : ${name} dan usia ${age}'
    return result
    }
const input = logger('Dewa', 28)
console.log(input)

//Arrow Function
const logger2 = (name, age) => {
    const result ='Nama: ${nama} dan usia ${age}'
    return result
}
console.log(logger2('Dwi', 37))

//CHECK AGE
//const checkAge = function (born){
//   const result = 2022 - born
//    return result
//}

const checkAge = (born) => {
    const now = 2022
    const result = now - born
    return result
}
document.write(checkAge(2015))



