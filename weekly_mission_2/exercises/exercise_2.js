const explorers = [
    {
        name: "Kaserola",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Daniel",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Mar",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]
console.log('Print the name of every explorer using for each')
explorers.forEach(explorer => console.log(explorer.name))

console.log('Print the stack of every explorer using for each')
explorers.forEach(explorer => console.log(`${explorer.name}: ${explorer.stack}`))

console.log('Create a new list with the stacks of every explorer')
const stackList = explorers.map(explorer => explorer.stack)
console.log(stackList)

console.log('Filter the explorers with the stack containing "js"')
const jsExplorers = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(jsExplorers)

console.log('Find the first explorer which belongs to CDMX')
const cdmxExplorer = explorers.find(explorer => explorer.city.includes('CDMX'))
console.log(cdmxExplorer)

console.log('Do the sum of all the exercises_completed of the explorers')
const sumOfCompletedExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(sumOfCompletedExercises)

console.log('Validate if one of the explorers has the finished all the fronted exercises equal to true, use SOME')
const oneValid = explorers.some(explorer => explorer.missions.frontend.exercisesFinished == true)
console.log(oneValid)

console.log('Validate if all the explorers have completed the onboarding mission, use EVERY')
const everyoneValid = explorers.every(explorer => explorer.missions.onboarding.isFinished == true)
console.log(everyoneValid)