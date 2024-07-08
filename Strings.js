let str = "Anurag Singh"
let str1 = "Amit Singh"
console.log(str.length)          //for finding the lenght of the string
console.log(str[3], str[1])          //for finding the vallue  at whic index they are   //we can find many index at a single time 
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.trim())                //it remove the extra space of left or right 
console.log(str.slice(2, 5))          //it print the value from to index of 2 to 5
console.log(str.concat(str1))         //it merge the two string
console.log(str.replace("u", "e"))   
console.log(str.charAt(3))
{
let fullname = prompt("enter your full name without spaces")
let username = "@" + fullname + fullname.length
console.log(username)
}