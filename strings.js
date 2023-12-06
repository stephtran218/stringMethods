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

