const fizzBuzz = [[3, 'Fizz'], [5, 'Buzz']]; //declare multidimensional array of numbers to detect and strings to output
let charStr = '';
for (let i = 1; i <= 100; i++) {
    charStr = ''; //clear out character string
    for(let f = 0; f < fizzBuzz.length; f++) {
        if (i % fizzBuzz[f][0] == 0) {
            charStr += fizzBuzz[f][1]; } 
        }

    if (charStr === '') {
        document.write(i);
        console.log('Printed number ' + i)
    }

    else {
        document.write(charStr); 
        console.log('Printed character ' + charStr + ' for number ' + i)
    }
        
    document.write('<br>')
}