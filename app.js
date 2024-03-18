// Exercise one access the movies item inside of hobbies
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address:
    {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// console.log(person.hobbies[1])

// Print out second objects text
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Take out trash',
        isCompleted: true
    }
];

// console.log(todos[1].text)


// for (let todo of todos){
//     console.log(todo)
// }

// Bonus Question One
function BMI (name1, weight1, height1, name2, weight2, height2)
    {this.name1 = name1 
    this.weight1 = weight1
    this.height1 = height1
    this.name2 = name2
    this.weight2 = weight2
    this.height2 = height2
    let bmi1 = (weight1 / (height1 * height1))
    let bmi2 = (weight2 / (height2 * height2))
    if (bmi1 > bmi2)
    {
        return(`${name1}’s bmi is: ${bmi1.toFixed(2)}, which is higher than ${name2}’s bmi which is: ${bmi2.toFixed(2)} `)
    }
    else if(bmi2 > bmi1)
    {
        return(`${name2}’s bmi is: ${bmi2.toFixed(2)}, which is higher than ${name1}’s bmi which is: ${bmi1.toFixed(2)} `)
    }
    else
    {
        return(`${name1} and ${name2} both have a bmi of ${bmi1.toFixed(2)} `)
    }
    }
    
function gymnastics(name1, data1, name2, data2)
    {
        this.name1 = name1
        this.data1 = data1
        this.name2 = name2
        this.data2 = data2
        let score1 = 0
        let score2 = 0
        for(let i = 0; i < data1.length; i ++)
            {score1 += data1[i]}

        score1 = (score1 / data1.length).toFixed(2)

        for(let i = 0; i < data2.length; i++)
            {score2 += data2[i]}

        score2 = (score2 / data2.length).toFixed(2)
        if (score1 < 100 || score2 < 100)
            {
                if (score1 < 100 && score2 < 100)
                {
                    return(`Both teams scored under 100 no team wins`)
                }
                else if (score1 < 100 && score2 > 100)
                {
                    return(`${name1} score of ${score1} is less than 100, while ${name2} score of ${score2} is greater than 100, \n ${name2} wins `)
                }
                else
                {
                    return(`${name2} score of ${score2} is less than 100, while ${name1} score of ${score1} is greater than 100, \n ${name1} wins `)
                }
            }
        else if (score1 > score2)
            {return (`${name1} score of ${score1} is higher than ${name2} score of ${score2}, ${name1} wins `)}
        else if(score2 > score1) 
            {return (`${name2} score of ${score2} is higher than ${name1} score of ${score1}, ${name2} wins`)}
        else{return (` ${name1} and ${name2} both have a score of ${score1}. It is a tie `)}
    }

function tipCalculator(bill){
    this.bill = bill
    return ( 50<= bill && bill <= 300 ? `The bill was $${bill}, the tip is $${(bill * .15).toFixed(2)}, and the total is now $${(bill + (bill * 0.15)).toFixed(2)}` : `The bill was $${bill}, the tip is $${(bill * .2).toFixed(2)}, and the total is now $${(bill + (bill * 0.20)).toFixed(2)}`)
}
console.log(BMI('Mark', 78, 1.69, 'John', 78, 1.95))
console.log(BMI('Mark', 95, 1.88, 'John', 85, 1.76))
console.log(gymnastics('Dolphins', [96,108,89], 'Koalas', [88,91,110]))
console.log(gymnastics('Dolphins', [97,112,101], 'Koalas', [109,95,123]))
console.log(gymnastics('Dolphins', [97,112,101], 'Koalas', [109,95,106]))
console.log(tipCalculator(275))
console.log(tipCalculator(40))
console.log(tipCalculator(430))