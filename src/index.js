// Instructions
// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
// - Have a prompt that adds your last name to the array
// - Have an output that sorts the names alphabetically
// - Have an output that tells you what is the position of your name in the sorted array
// - Have an output that Uppercase's all names

// Tips
// - Try to keep track of your data, and when it is being changed
// - Remember to google docs if you don't know or remember certain details

console.log("<FOR LOOP STARTS>");

const lastNames = [`Mason`, `Marcora`, `Rico`, `Neves`, `Ivanov`];
console.log(`Last names: ` + lastNames);

const myName = prompt(`Add your surname`);
lastNames.push(myName);
console.log(`Updated Names List: ` + lastNames);

const sortedLastNames = lastNames.sort();
console.log(`Sorted Names List: ` + sortedLastNames);


for (let index = 0; index < lastNames.length; index++) {
    const lastNameToCheck = lastNames[index]
    // console.log(lastNameToCheck === `Rico`)
    if (lastNameToCheck === `Rico`) {
    let positionOfMyLastName = lastNameToCheck;
    }
    console.log(`example: ${positionOfMyLastName}`);
    
}
let positionOfMyLastName = null;

console.log("positionOfMyLastName: ", + positionOfMyLastName);

// const upperCastLastNames = [];