console.log('20_vererbung');

function Person(a/*name */, b/*age */, c/*job */) {
    this.name = a;
    this.age = b;
    this.job = c;
}

let karsten = new Person('karsten',30,'taxifahrer');
let kira= new Person('kira',28,'studentin');

// sportart ist z.B. tennis oder fussball

function Sportler(name )
