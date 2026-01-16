export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string, 
        private address: string = 'No Address'
    ) {}

}

/* export class Hero extends Person {
    

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, 'NY');
    }
} */

    
export class Hero {
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {}
}  

const tony = new Person('Tony Stark', 'new York')
const ironman = new Hero('ironman', 45, 'Tony', tony);

console.log(ironman)