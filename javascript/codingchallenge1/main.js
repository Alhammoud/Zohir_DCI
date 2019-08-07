var john_körpergröße=170;
var john_alter=25;
var john_score=john_körpergröße+(john_alter*5);

var kumple_körpergröße=170;
var kumple_alter=27;
var kumple_score=kumple_körpergröße+(kumple_alter*5);


if(john_score>kumple_score){
    console.log(`Der Gewinner ist John mit ${john_score} score.`);
}else if(john_score===kumple_score){
    console.log(`Niemand ist gewinnt, weil die beide Spieler gleiche score haben`);
}else{
    console.log(`Der Gewinner ist kumple mit ${kumple_score} score.`);
}

var tarik_körpergröße=170;
var tarik_alter=27;
var tarik_score=tarik_körpergröße+(tarik_alter*5);




if(john_score>kumple_score && john_score>tarik_score ){
    console.log(`Der Gewinner ist John mit ${john_score} score.`);
}else if(kumple_score>john_score && kumple_score>tarik_score){
    console.log(`Der Gewinner ist kumple mit ${kumple_score} score.`);
}else if(tarik_score>john_score && tarik_score>kumple_score){
    console.log(`Der Gewinner ist Tarik mit ${tarik_score} score.`);
}else if(john_score===kumple_score && john_score===tarik_score){
    console.log(`Niemand ist gewinnt, weil die  Spieler gleiche score haben`);
}else if(john_score===kumple_score && john_score>tarik_score){
    console.log(`Unentschieden..! john und Kumple gewinnt`);
}else if(tarik_score===kumple_score && tarik_score>john_score){
    console.log(`Unentschieden..! tarik und Kumple gewinnt`);
}else if(tarik_score===john_score && tarik_score>kumple_score){
    console.log(`Unentschieden..! tarik und john haben gewonnen`);
}