const data = () => {
  
  const array1 = ["apple", "grape", "orange"];
  const array2 = ["newyork", "funny", "consist"];
  console.log("array1:", array1);
  console.log("array2:", array2);
  const newarray = [...array1,...array2];
  console.log(newarray);
};
data();
