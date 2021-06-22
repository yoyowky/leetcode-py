class People {
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

// 继承

class Student extends People {
    constructor(name, number){
        super(name); // 继承父类的property
        this.number = number;
    }
    sayHi(){
        console.log(`name:${this.name}, number:${this.number}`)
    }
}


const xialuo = new Student("xialuo", 100);
xialuo.sayHi();