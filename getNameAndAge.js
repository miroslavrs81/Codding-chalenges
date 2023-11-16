class Person {
    
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    displayName(){
    console.log("Hi, my name is " + this.name);
    }
    getAge(){
       const years = 1000*60*60*24*365.25;
       let inMiliseconds = new Date() - new Date(this.birthDate);
        return Math.floor(inMiliseconds / years);       
    }
    getAgeInFutures([date]){
        const years = 1000*60*60*24*365.25;
        let inMiliseconds = new Date([date]) - new Date(this.birthDate);
         return Math.floor(inMiliseconds / years);
    }
}

const person = new Person('Miki', '1981-06-17');

person.displayName();
console.log(person.getAge());
console.log(person.getAgeInFutures(['2046-12-10']))