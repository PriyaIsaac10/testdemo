class Car{
constructor(color){
//this.brand=brand;
this.color=color;
}
colorname(){
return " I have "+this.color+" "+ "Car";
}
}
class Mahendra extends Car{
  constructor(color){
    super(color);
  }
  display(){
  return this.colorname();
  }
}
var child1= new Mahendra("red");
console.log(child1.colorname());

