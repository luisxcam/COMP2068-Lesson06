class Person{
    name: String;
    age: number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age;
    }

    moves(meters: number) {
        alert(this.name + " moves " + meters + " m");
    }

}

class Teacher extends Person{
    course: String;
    constructor(name: String, age: number, course: String) {
        super(name, age);
        this.course = course;
    }

    teaches() {
        alert(this.name + " teaches " + this.course);
    }
}

var luis = new Person("Luis", 10);
luis.moves(10);

var jose = new Person("Jose", 5);
var juan = new Teacher("Juan", 6, "Math");

juan.teaches();



