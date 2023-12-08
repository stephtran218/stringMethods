//Length function

let firstName = "Stephanie";
let lastName = "Tran";

let fullName = firstName + lastName;


let nameLength = length(fullName);

function length(s){

    let i = 0;
    let length = 0;

    while(s[i]){
        length++;
        i++;
    }

    return length;

}
console.log(fullName)

//Slice function

let holiday = "christmas";

function slice(start, end, originalWord){
    let part = "";

    for(let i = start; i < end; i++){
        part += originalWord.charAt(i);
    }

    return part;
}

let newWord = slice(1,4, holiday)


console.log(newWord)

//Replace function

function replace(original, specificValue, replaced){
    let concoction = "";
    let searching = 0;

    for (let i = 0; i < original.length; i++){
        if(original [i] === specificValue[searching]){
            searching++;

            if(searching === specificValue.length){
                concoction += replaced;

                searching = 0;
            }
        } else{
            concoction += original[i];

            searching = 0;
        }
    }
    return concoction;
}

let original = "matcha";
let newConcoction = replace(original, "a", "e")

console.log(newConcoction)

//replaceAll function
function replaceAll(beginningWord, searchingWord, replacedWord){
    let differentWord = "";
    let currentI = 0;
    
    while (currentI < beginningWord.length){
        let foundWord = true;
        for(let i = 0; i < searchingWord.length; i++){
            if(beginningWord[currentI + i] !== searchingWord [i]){
                foundWord = false;
            }
        }
        if(foundWord){
            differentWord += replacedWord;
            currentI += searchingWord.length;
        } else{
            differentWord += beginningWord[currentI];
            currentI++;
        }
    }
    return differentWord
    
}

let ogString = "sunday, monday, tuesday";
let updatedString = replaceAll(ogString, "sunday", "saturday")

console.log(ogString);
console.log(updatedString);

