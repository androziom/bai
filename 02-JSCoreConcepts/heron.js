// boki trójkąta
a = 3;
b = 4;
c = 5;
//h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let compute = () => {
    let p = 0.5 * (a+b+c)
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    return `Pole wynosi ${s}`;
};

console.log( compute() );