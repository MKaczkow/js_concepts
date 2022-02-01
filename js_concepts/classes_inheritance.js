const person = {
    name: "Mosh",
};

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walking...');
    }
}

//const person = new Person('Eva');

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('Alice', 'BSc');
