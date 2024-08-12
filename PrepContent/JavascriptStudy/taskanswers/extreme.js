/*

(EXTREME) FINAL TASK (Bonus points): 
Create a function called printPattern that takes a single parameter n.
Use nested loops to print a pattern of stars (*) where each row has an increasing number of stars.

*/

var movieArray = [];

function printPattern(n){
    for(let i=1; i<=n; i++){
        let stars = '';
        for(let f = 1; f<=i; f++){
            stars += '*';
        }
        console.log(stars);
    }

    movieArray.push(
        {
            name: 0,
            whatever:0,
            whateverelse: movie,
        })
}

printPattern(5);


/*

*
**
***
****
*****

*/