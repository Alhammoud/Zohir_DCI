// 13_Scopes

let g = 5;
function parent() {
    let x = 1;

    function child1() {
        let z = 1 + x + g;
        console.log('In child1 z ist ' + z);
    }
    child1();
    function child2() {
        let z = 2 + x + g;
        console.log('In child2 z ist ' + z);
    }
    child2();
}

// parent().child1(); // Cannot read property 'child1' of undefined

parent();


function accessToChild() {

}


function fool1() {

    function fool1a() {

    };

    function fool1b() {

    };
};
function fool2() {
    let i;
    for(i=0;i<10;i++){
       console.log('i : '+ i);
    }
    console.log('i nach for-schleife : '+ i);

}
function fool3() {
    let x=0;
    let y=0;
}

fool2();