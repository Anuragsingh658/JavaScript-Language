
let marks = [1, 2, 3, 4, 5]
console.log(marks)
console.log(marks.length)
for (let index = 0; index < marks.length; index++) {
    console.log(marks[index])
}

//find the average marks of student
{
    let marks = [85, 97, 44, 37, 76, 60]
    let sum = 0
    for(let val of marks){
        sum = sum + val
    }
    let average = sum/marks.length
    console.log(average)
}

{
    //
    let items = [250, 645, 300, 900, 50]
    for(let i = 0; i < items; i++){
        let offer = items[i] / 10
        items[i] = items[i] - offer
    }
    console.log(items)
}

{
    //Arrays methods
    let fooditems = ["potato", "tomato", "apple"]
    fooditems.push("vegetable", "Burger")          //to delete something
    console.log(fooditems)
    fooditems.pop()          //to deleting from the array or from the something
    console.log(fooditems)
    console.log(fooditems.toString())         //convert array to string
}

{
    //Arrays methods
    let heroes = ["Anurag Singh", "Anu Singh", "Amit Singh"]
    let zeroes = ["Satiya", "Bhatiya"]

    let both = heroes.concat(zeroes)
    console.log(both)

    //unshift method = it add value at the first index
    both.unshift("anuj")
    both.shift()
}
