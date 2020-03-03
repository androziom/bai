class Person{
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    nameCapSurname(){
        let capiralSurname = this.surname.toUpperCase()
        return `${this.name} ${capiralSurname}`
    }

    initials(){
        return `${this.name.charAt(0)}. ${this.surname.charAt(0)}.`
    }
}

let p = new Person("aa", "BB")
console.log(p.nameCapSurname())
console.log(p.initials())