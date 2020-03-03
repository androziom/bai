names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        let result = []

        names.forEach(name => {
            if(name.charAt(0) === letter){
                result.push(name)
            }
        })

        return result
    }

    sort() {
        let result = [...this.names]
        result.sort()
        return result
    }

    get() {
        return [...this.names]
    }

    getFirst(n) {
        let result = []

        for(let i = 0; i < n; i++){
            result.push(this.names[i])
        }

        return result
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



