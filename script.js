//Task-1
// Task-1.a
/*
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    

}

const movie_a = new Movie("Leave_The_World_Behind","Netflix-Studio","R");
console.log(movie_a.title,movie_a.studio,movie_a.rating);
*/

//Task-1.b
/*
class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    

}

const movie_b = new Movie("Mouse","Blue-Dragon");
console.log(movie_b.title,movie_b.studio,movie_b.rating);
*/


//Task-1.c
class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    get PG(){

    }
    

}

const movie1 = new Movie("Casino_Royal","EON_Production","PG-13");
console.log(movie1.title,movie1.studio,movie1.rating);

const movie2 = new Movie("Vikram","RKFI","U/A");
console.log(movie2.title,movie2.studio,movie2.rating);

const movie3 = new Movie("Batman","WB");
console.log(movie3.title,movie3.studio,movie3.rating);

const movie4 = new Movie("Master","7-Screen");
console.log(movie4.title,movie4.studio,movie4.rating);

const movie5 = new Movie("Interstellar","WB","PG-13")
console.log(movie5.title,movie5.studio,movie5.rating);

//Task-1.d
/*
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    

}

const movie = new Movie("Casino_Royal","EON_Production","PG-13");
console.log(movie.title,movie.studio,movie.rating);

*/



/*
//Task - 2

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(r){
        this.radius = r;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c;
    }
    get toString(){
        return `"Circle[radius = ${this.radius}, color = ${this.color}]"`;
    }
    get Area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get Circumference(){
        return 2*Math.PI*this.radius
    }
}

const circle = new Circle(1.0,"red");
console.log(circle.radius,circle.color);

console.log(circle.Radius);
console.log(circle.Color);
console.log(circle.toString);
console.log(circle.Area);
console.log(circle.Circumference);
*/


/*
// Task - 3

class Person{

    constructor(name,age,gender,m_status,contact,email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.m_status = m_status;
        this.contact = contact;
        this.email = email;

    }

}

const person1 = new Person("Umar",23,"male","single",9876543210,"abc@example.com");
const person2 = new Person("wazim",23,"male","married",9876541230,"def@example.com");
console.log(person1.name,person1.age,person1.gender,person1.m_status,person1.contact,person1.email);
console.log(person2.name,person2.age,person2.gender,person2.m_status,person2.contact,person2.email);
*/