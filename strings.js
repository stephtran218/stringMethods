//Length function

let firstName = "Stephanie";
let lastName = "Tran";

//This string holds the combination of my first name and last name 
let fullName = firstName + lastName;

//This calls the length function, and in the parameter is the info it needs (my fullName)
let nameLength = length(fullName);

//This function is supposed to replicate the length method while using a while loop
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

//The string is held in the variable holiday, and the word is "christmas"
let holiday = "christmas";

//This function will replicate the slice method. The parameter contains the start and end of where the user wants slice the word. The second index of the parameter is the word being sliced. 
function slice(start, end, originalWord){
    //This variable holds the content of what got "sliced"
    let part = "";

    //This for loop goes through the string and take characters in the indices that got "sliced" 
    for(let i = start; i < end; i++){
        part += originalWord.charAt(i);
    }

    return part;
}

let newWord = slice(1,4, holiday)


console.log(newWord)

//Replace function

function replace(original, specificValue, replaced){
    //This holds the new word w/ replaced content
    let concoction = "";
    //This starts at 0 so the search begins at the 0-index
    let searching = 0;

    //This for loop will go through the original word
    for (let i = 0; i < length(original); i++){
        //Checks orginal word's characters if it matches w/ specificValue's current characters. If it matches, then that index will be replaced 
        if(original [i] === specificValue[searching]){
            //if it gets a match, searching gets incremented
            searching++;

            //Takes content of characters added from searching variable to look through original word 
            if(searching === length(specificValue)){
                //Concotion will now hold word w/ values that got replaced
                concoction += replaced;

                searching = 0;
            }
            //if theres no match, then original word will be returned
        } else{
            concoction += original[i];

            searching = 0;
        }
    }
    //This returns the new word w/ replacements
    return concoction;
}

let original = "matcha";
let newConcoction = replace(original, "a", "e")

console.log(newConcoction)

//replaceAll function
function replaceAll(beginningWord, searchingWord, replacedWord){
    //This holds string that will have replaced word
    let differentWord = "";
    //This starts the search at 0 index
    let currentI = 0;

    //Will go through every character of beginningWord/string
    while (currentI < length(beginningWord)){
        let foundWord = true;
        for(let i = 0; i < length(searchingWord); i++){
            if(beginningWord[currentI + i] !== searchingWord [i]){
                foundWord = false;
            }
        }
        if(foundWord){
            differentWord += replacedWord;
            currentI += length(searchingWord);
        } else{
            differentWord += beginningWord[currentI];
            currentI++;
        }
    }
    //returned variable holds new string w/ replacement
    return differentWord
    
}

let ogString = "sunday, monday, tuesday";
let updatedString = replaceAll(ogString, "sunday", "saturday")

console.log(ogString);
console.log(updatedString);

//concat function
function concat(firstWord, secondWord){
    let mixedWord = "";
    
    //Will go through first word and add it into variable mixedWord
    for(let i = 0; i < length(firstWord); i++){
        mixedWord += firstWord[i];
    }

    //Will go through seconf word and add contents to variable mixedWord
    for(let i = 0; i < length(secondWord); i++){
        mixedWord += secondWord[i];
    }
    
    //Now contains content of first and second word combined
    return mixedWord;
}

let numeroUnoWord = "stanford";
let numeroDosWord = "volleyball"; 
let concattedWord = concat(numeroUnoWord, numeroDosWord);

console.log(concattedWord);

//charAt function
function charAt(specialString, userIndex){
    //When the user puts in a specific index, the function will return the character in special string at the requested index
    return specialString[userIndex]
}

//This is the string from function
let specialString = "LanaDelSlay";
//This is example index that user can change
let userIndex = 2;
//This variable holds the string that is getting dissected and calls the function 
let cookedString = charAt(specialString, userIndex);
console.log(cookedString, userIndex);