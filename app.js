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

 }
 Person1.prototype.talk = function () {
    console.log('talking 1111');
    
 }
 const one = new Person1();
 one.talk();