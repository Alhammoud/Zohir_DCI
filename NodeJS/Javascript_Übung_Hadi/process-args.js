process.argv.forEach((val, index) => {
    console.log('process.argv =');
    console.log(`${index}: ${val}`);
});


// $ node process-args.js one two=three four

// Output:
/* 

process.argv =
0: /usr/local/bin/node
process.argv =
1: /home/temp/Desktop/Zohir_DCI/NodeJS/Javascript_Übung_Hadi/process-args.js
process.argv =
2: one
process.argv =
3: two=three
process.argv =
4: four

0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four


   */