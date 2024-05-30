let studentname = [
  { name: "RAJESH", bloodgroup: "B+ve" },
  { name: "DHARANISRI", bloodgroup: "AB-ve" },
];
for (let i = 0; i < studentname.length; i++) {
  console.log(studentname[i].name);
  console.log(studentname[i].bloodgroup);
}

//For in Loop condition
{
  let college = [{ department: "automobile", year: "2017" }];
  for (let x in college) {
    console.log(x);
  }
  console.log(college[0].department, college[0].year);
}

//For of Loop condition
let car = [
  { Brand: "KIA", Model: "Seltos", price: "950000" },
  { Brand: "MG", Model: "Hector", price: "1950000" },
];
for (const best of car) {
  console.log(best);
}

//for for each condition
let student = [{ Name: "Nandhakumar r" }, { Mark: "Good" }];

student.forEach((i) => console.log(i));
