"user strict";
// 1. მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით:
// თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
// სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

// 2.მოცემულია სტრინგი: let info= ‘good day”,
// ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთო დის საშუალებით.

// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

// 4. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი?
// სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში.
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს.
// თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

// 5.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით,
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]
// splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.

// 6.შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

// 7.შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// 8.მოცემულია მასივი let array3 =[1, 2, 3, 4, 5].
// splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

// 9. მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი,
// რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

// 10.მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
// წაშალეთ ამ მასივიდან რიცხვი 10;

// 11.მოცემულია მასივი:  let array8 = [1, 2, 3 , 4 , 5]
// მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

// 12.მოცემულია მასივი, შემდეგი მნიშვნელობებით
// - let array1 =[“hello1”, 14,24, “hello2”]
// გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

// 13.მოცემულია მასივი:
// foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
// let array4 = [1, 2, 3, 4, 5];
// let sum = 0;

// 14.მოცემულია მასივი:
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა
//  რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
let languages = ["html", "css", "javascript", "python", "php"];

languages.forEach(function (lang) {
  if (lang.length > 3) {
    console.log(lang);
  }
});
// 15.მოცემულია მასივი:
// let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი,
// რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;