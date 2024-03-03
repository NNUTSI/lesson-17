"user strict";
// ______________________________________________
// 1. მოცემულია მასიცი: let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით:
// თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let array2 = [14, 150, "css", null, "javascript", 25];

let newArray1 = array2.map((n) => {
  if (typeof n === "number") {
    return n * n;
  } else if (typeof n === "string") {
    return n.toUpperCase();
  } else {
    return n;
  }
});
console.log(newArray1);
// ________________________________________________
// 2.მოცემულია სტრინგი: let info= ‘good day”,
// ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთო დის საშუალებით.
let info = "good day";

let extracte = info.slice(5, 8);
console.log(extracte);
// ___________________________________________________
// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.
function getStringLength(inputString) {
  return inputString.length;
}

let myString = "Hello, World!";
let lengthOfString = getStringLength(myString);

console.log(getStringLength(myString));

// 4. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი?
// სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში.
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
// თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let correctAnswer = "tbilisi";
let userResponse = prompt("What is the capital of Georgia?");
userResponse = userResponse.toLowerCase();
if (userResponse === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// _______________________________________________
// 5.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით,
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]
// splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.
let fruits =["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawberry");
console.log(fruits);

// ______________________________________________
// 6.შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
let array6 = [5, 25, 89, 120, 36];
array6.push("javascript", "python");
array6.unshift("html", "css");
let numberOfElements = array6.length;
console.log(numberOfElements);
array6.shift();
array6.pop();
console.log(array6);

// _____________________________________________________
// 7.შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let array9 = ["ფორთოხალი", "ბანანი", "კივი"];
console.log(array9.length);
array9.push("ვაშლი", "ანანასი");
array9.unshift("საზამთრო");
console.log(array9);
console.log(array9.length);
array9.splice(3, 0, "მანგო");
array9.shift();
array9.pop();
console.log(array9);
console.log(array9.length);

// ____________________________________________________
// 8.მოცემულია მასივი let array3 =[1, 2, 3, 4, 5].
// splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "c");
console.log(array3);

// ________________________________________________________
// 9. მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი,
// რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray2 = array5.map((i) => {
  return i / 3;
});
console.log(newArray2);

// ___________________________________________________________
// 10.მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
// წაშალეთ ამ მასივიდან რიცხვი 10;
let array7 = [15, 100, 25, 10, 36];

array7.splice(3, 1);

// ან

let indexToRemove = array7.indexOf(10);
if (indexToRemove !== -1) {
  array7.splice(indexToRemove, 1);
}

console.log(array7);

// __________________________________________________________
// 11.მოცემულია მასივი:  let array8 = [1, 2, 3 , 4 , 5]
// მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, "three");
console.log(array8);

// _________________________________________________
// 12.მოცემულია მასივი, შემდეგი მნიშვნელობებით
// - let array1 =[“hello1”, 14,24, “hello2”]
// გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;
let array1 = ["hello1", 14, 24, "hello2"];
let filterNumbers = array1.filter((n) => {
  return typeof n == "number";
});
console.log(filterNumbers);

// ___________________________
// 13.მოცემულია მასივი:
// foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((n) => {
  sum += n;
});
console.log(sum);

// ____________________________________________________________
// 14.მოცემულია მასივი:
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა
//  რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ["html", "css", "javascript", "python", "php"];

languages.forEach(function (lang) {
  if (lang.length > 3) {
    console.log(lang);
  }
});

let newArray3 = languages.filter((item) => {
  return item.length > 3;
});
console.log(newArray3);

// _____________________________________________
// 15.მოცემულია მასივი:
// let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი,
// რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
let words = ["Madrid", "rome", "Milan", "berlin"];
let newArray4 = words.filter((word) => {
  return word.includes("m") || word.includes("M");
});
console.log(newArray4);
