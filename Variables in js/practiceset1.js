//defining scope variables inside curly braces
{
    let name="Vikas";
    var hod="Indrapal";
    const rollno=1;
    console.log(name);
    console.log(hod);
    console.log(rollno);

    //let us reassign the variables with new values
    name="Vinny";
    hod="T. vitpal";

    //roll no will give error as it is a constant type
    //rollno=2; //gives error
}
hod="M. Mahajan";
console.log(hod);

//defining name and const outside block scope creates automaticallicaly a global variable
name="Charvik";
rollno=2;
console.log(name);//not give error
console.log(rollno);//not give error 
