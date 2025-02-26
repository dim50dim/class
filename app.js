// const me = { 
//     talk() {
//         return 'Talking';
//     }
//      }
//      console.log(me.talk());
//  const you  = {
//     talk() {
//         return 'Talking';
//     }
//  }    
//  console.log(you.talk());


 class Person{
    talk() {
        return 'Talking'
    }
 }
 const me = new Person()
 const you = new Person()
//  console.log(me.talk());
//  console.log(you.talk());
//  console.log(me);
 Person.prototype.talk =  function (){
    console.log('New Talking');
    
 }
 
 you.talk()
 
 function Person1 () {
       this.age = 12
 }

 const one = new Person1();
 console.log(one.age);
 

class Person2 {
    talk () {
    console.log('Bluffing');
    
    }
}
const mike = new Person2();
mike.talk()