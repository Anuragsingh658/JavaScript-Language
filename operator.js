console.log("Anurag Singh");
let a = 10;
console.log(a)
{
    let a = 20;
    console.log(a)                            // you can run only once a variable if u want run again with same variable then declare it in block
}
const b = "Anurag"
console.log(b)

{
    //operators
    let a = 25;
    let b = 5;
    console.log("a =", a , "b =", b)
    let sum = a + b
    console.log(sum)
    console.log("a + b = ", a+b);
    console.log("a - b = ", a-b)
    console.log("a / b = ", a/b)
    console.log("a * b = ", a*b)
    console.log("a % b = ", a%b) //modulous it gives remainder 
    console.log("a ** b = ", a**b) //Exponantion it gives to power like as (a^b) like 5^3 = 125

    //unary operator
    console.log("++a = " ,++a) //pre increment
    console.log("a++ = " ,a++) //post increment 26 then after a print then it shows 27
    console.log("a = ", a) //now its 27

    console.log("--a = " ,--a) //pre decrement // it shows 26 because above a value is 27
    console.log("a-- = " ,a--) //post decrement 26 then after a print then it shows 25
    console.log("a = ", a) //now its 25
}
{
    //Binary operators
    let a = 10
    console.log("a += 2 = ", a += 2)
    console.log("a -= 2 = ", a -= 2)
    console.log("a /= 2 = ", a /= 2)
    console.log("a *= 2 = ", a *= 2)
    console.log("a **= 2 = ", a **= 2)
    console.log("a %= 2 = ", a %= 2)
}
{
    //comparison operator
    let a = 10
    let b = 5
    console.log("a == b = ", a == b)
    console.log("a <= b = ", a <= b)
    console.log("a >= b = ", a >= b)
    console.log("a != b = ", a != b)
    console.log("a !== b = ", a !== b)
    console.log("a === b = ", a === b)
}
{
    //Logical operators
    let a = 10
    let b = 5
    let Cond1 = a > b//true
    let Cond2 = a == b//false
    console.log("Cond1 && Cond2 =", Cond1 && Cond2)//false
    console.log("Cond1 || Cond2 =", Cond1 || Cond2)//true
    console.log("Cond1 || Cond2 =", !(Cond1 || Cond2)) //if it is true then it is false with the help of not equal to(!)
}
{
//Conditonal Statement
let age = 16
if(age < 18){
    console.log("You can Vote")
    }
}
{
    let mode = "dark";
    let color;
    if(mode == "dark"){
        color = "black";
    }
    if(mode == "light"){
        color = "white";
    }
    console.log(color);
}
{
let mode = "dark";
    let color;
    if(mode == "dark"){
        color = "black";
    }else{
        color = "white";
    }
    console.log(color);
}
{
    let mode = "jhm";
    let color;
        if(mode == "dark"){
            color = "black"
        }
        else if(mode == "light"){
            color = "white"
        }
        else{
            color = "blue"
        }
        console.log(color)
    }
    {
        //Ternary Operator
        let age = 25
        let result = age >= 18 ? "Adult" : "Not Adult" //conditional Statement ? Print true : print false
        console.log(result)
    }
    // {
    //     //for taking input from user
    //     let name = prompt("Anurag Singh")
    //     console.log(name)
    // }
{
    //multiple of 5 or not
    let number = prompt("Enter a Number")
    if(number % 5 === 0){
        console.log("Yes it is multiple of 5")
    }else{
        console.log("No it is not multiple of 5")
    }
}
{
    //giving grades as per their mask 
    let number = 75
    let grade
    if(number >= 90 && number <=100){
        grade = "A"
    }
    else if(number >= 70 && number <=89){
        grade = "B"
    }
    else if(number >= 60 && number <=69){
        grade = "C"
    }
    else if(number >= 50 && number <=59){
        grade = "D"
    }else{
        grade = "F"
    }
    console.log(grade)
}