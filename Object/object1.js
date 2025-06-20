const student = {
    Firstname:"mohammmed",
    Lastname : "Fazil",
    greet: function () {
      console.log("Hello,"+student["Lastname"])
      console.log("Hello,"+this.Lastname);
      console.log("Hello,"+student.Lastname);
    }
  };
  student.section ="A";
  console.log(student.section)
  student.greet(); 
  const {Firstname,Lastname,greet}=student;

  console.log(Firstname);
  console.log(Lastname);
  

  