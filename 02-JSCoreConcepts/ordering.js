const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    sorted = [...arr]
    sorted.sort(intComparator)

    return sorted;
}

function intComparator(a, b) {
    return a - b;
  }

const even = function(arr) {
    let arrEven = [];
    
    arr.forEach(v => {
        if (v % 2 == 0) {
            arrEven.push(v);
        }
    })

    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
console.log(numbers);