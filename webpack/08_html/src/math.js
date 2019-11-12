const sum = (a, b) => {
    return a + b;
}

const multi = (a, b) => {
    return a * b;
}

// module.exports = sum // CommenJs export 


module.exports = {  // CommenJs export 
    sum: sum,
    multi: multi
}

// export default sum ; //  Es6 import 