let carproperties  =
{
name:" Mercedes-Benz G-Class G63 AMG Auto 4MATIC ",
make:" By German automakers.",
madel:" 2020",
Price:"$314,135",
muthod: function(){
    
    return "The car is staring";
}

}
console.log(carproperties.muthod());
 var driving = Object.create(carproperties);
 console.log(driving.muthod());
  




