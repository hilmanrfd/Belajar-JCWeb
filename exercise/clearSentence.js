/*
yang mau dipertahankan
alphabet
number
space tanda seru tanda tanya 
*/

function clear_sentence(arr) {
    let alphabets ="abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let others = "!?,. ";
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let newString ="";
        for(let j =0; j <arr[i].length; j++) {
          
            if (
                alphabets.split("").findIndex((item) => item === arr[i][j]) !== -1 ||
                numbers.split("").findIndex((item) => item === arr[i][j]) !== -1 ||
                others.split("").findIndex((item) => item === arr[i][j]) !== -1 )
                 {
                newString = newString + arr [i][j];
            }
        }
        result.push(newString);
    }
    
    return result;
    
}

console.log(
    clear_sentence([
        "he%l*lo, w$o(r)*l@d!",
        "a-r^e y$o#u st*)ill c*(o)d*(i@n$g?",
        "1&2%$34 i>t<s n:o}t m}y p*a*s^%sw$%o#@rd",
    ])
);

console.log(
    clear_sentence([
        'so**me %$of $y(o)u m%$ay% @d#@ie*',"bu&t% its o^nly sac#rifice i@am wil(ling) t$o ma*&ke"
    ])
);