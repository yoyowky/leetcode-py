class Student {
    constructor(name, number){
        this.name=name;
        this.number=number;
    }
    sayHi(){
        console.log(`name:${this.name}, number:${this.number}`)
    }
    study(){

    }
}

const xialuo = new Student("xialuo", 100);
xialuo.sayHi();