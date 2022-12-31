var age = prompt('Enter your age', '');
age = Number(age);
switch (true) {
   case isNaN(age):
      age = 0;
      alert('You need to enter a valid number');
      break;
   case (age >= 50):
      age = Number(age) + 1;
      alert("You're old! You will soon be " + age + " years old!");
      break;
   case (age <= 20):
      age = Number(age) + 1;
      alert("You're a baby! You will soon be " + age + " years old!");
      break;
   default:
      alert('You will soon be ' + (Number(age) + 1) + ' years old!');
      break;
};