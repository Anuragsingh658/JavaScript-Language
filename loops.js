//For loop 
for(let i = 1; i <= 10; i++){
    console.log("Anurag Singh")
}
console.log("Loop has Ended")

{//calculate sum of 2 numbers
let sum = 0
for(let i = 1; i <= 5; i++){
    sum = sum + i
}
console.log(sum)
}

{//calculate sum of n numbers
let sum = 0
let n = 10
for(let i = 1; i <= n; i++){
    sum = sum + i
}
console.log(sum)
}

{
//While loop
    let  i = 1
    while(i <= 5){
        console.log("i =", i)
    i++
    }
}

{
    //do while loop
    let i = 20
    do{
        console.log("Anurag Singh")
        i++
    }while(i <= 40)
}

{
    //for of loop
    let str = "Anurag Singh"
    let size = 0
    for(let i of str){            //i = value , str is our string &the for-of loop is to use for string & arrays
        console.log("i =", i)
        size++
    }
    console.log("size =", size)
}

{
    //for in loop and it is use for object
    let student = {
        name: "Anurag Singh",
        age: 40,
        class: "MCA",
        CGPA: 7.5,
        ispass: true
    }
    for(let key in student){
        console.log("key =", key, "value =", student[key])
    }
}

{
    //print all even no from 0 to 100
    for(let i = 0; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

{
let gamenum = 25
let usernum = prompt("Guess the Number")
while(usernum != gamenum){
    usernum = prompt("You entered the wrong number, Guess again")
}
console.log("Congratulations you entered the right number")
}