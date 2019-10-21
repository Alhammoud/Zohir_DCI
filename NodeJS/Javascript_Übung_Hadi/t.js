module.exports = (t_line_numbers = 4) => {

    /*  for (let i = 1; i <= t_line_numbers; i++) {
         console.log('T'.repeat(i));
     } */

    for (let i = 1; i <= t_line_numbers; i++) {
        for (let j = i; j <= i; j++) {
            console.log('T'.repeat(j));
        }

    }

};