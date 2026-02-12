let person = {
   name: "Rahul",
   greet: function() {
      console.log(this.name);
   }
};

person.greet();
