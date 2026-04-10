let str= "Manpreet";
let lName= "kaur";
let fullName= "Manpreet Kaur";
let fullName2= "Manpreet Kaur bindra";
let orderID= "Order ID:10234";
let str3="ABC";
let currency="₹1,25,000";
let email= "kaurmanpreet94633@gmail.com";
let stmt= "I love Excel and JS";
let phone= "+919876543210"
let str2= "     Manpreet    kaur     ";
let numStr2 = "12-08-2023";
let num = 123456789;


let numStr= num.toString().slice(-4);
let extractedPart= str.slice(3,7);
let uppercaseStr= str.toUpperCase();
let lowercaseStr = str.toLowerCase();
let length =  str.length;
let replaceStr = str2.trim().replace("   kaur", "kaur");  // check this // remove extra space 

let correctStr= numStr2.replaceAll("-","/");   //Replace all "-" with "/" in a date string.

let extractChar= str.slice(3);   //Replace the first 3 characters of a string with "ABC".

let replaceChar= str3.concat(extractChar);  //Replace the first 3 characters of a string with "ABC".

let countryCode= phone.slice(3);  //Remove country code +91 from phone number.

let currency1= currency.slice(1).replaceAll(",","");  //Convert currency string into number.

let position=email.indexOf("@"); //Find the position of "@" in an email.

let username = email.split("@");  //Extract username from email.

let findExcel= stmt.includes("Excel");  //Check if a string contains "Excel".

let name= str+ " "+ lName;  //Combine first and last name with space.

let gmail= str.toLowerCase()+"."+lName.toLocaleLowerCase()+"@gmail.com";  // toLowerCase vs toLocaleLowerCase  //Create email from name.

let reverseStr=str.split("").reverse().join("");  //Reverse a string.

let mName=fullName2.split(" ");  //Extract middle name.

let countA= fullName.match(/a/g);  //Count how many times "a" appears in a string.

let order= orderID.split(":");  //Extract text after "Order ID: "

let Name= fullName.split(" ");  //split full name into first and last name.

let extractStr=str.slice(0,4);



console.log(numStr);
console.log(extractStr);
console.log(extractedPart);
console.log(uppercaseStr);
console.log(lowercaseStr);
console.log(length);
console.log(replaceStr);
console.log(correctStr);
console.log(replaceChar);
console.log(position);
console.log(username[0]);
console.log(username[1]);
console.log(findExcel);
console.log(countryCode);
console.log(name);
console.log(gmail);
console.log(countA.length);
console.log(order[1]);
console.log(mName[1]);
console.log(reverseStr);
console.log(Name);
console.log(currency1);

if (str.length >8) console.log( "pass") //if password length is less than 8, return "Weak" else "Strong".
else console.log( "weak")



// ------CORPORATE LEVEL QUESTIONS--------
console.log(" ------CORPORATE LEVEL QUESTIONS--------")
let strName= "MANPREET KAUR";
let empID= "EMP-1023-IND";
let phoneNumber= "7528842665";
let Email= "kaurmanpreet@gmail.com";
let department= "HR";
let specialStr= "EMP#1023@IND!";

let normalizeName= strName
.split(" ")
.map(word =>(word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase() ))
.join( " ");


console.log(normalizeName);


let ID= empID.split("-");  //Extract employee numeric ID.
console.log(ID[1]);

let maskNumber= phoneNumber.slice(-4).padStart(10,"*");     //Mask phone number except last 4 digits.
console.log(maskNumber);

let domain= Email.split("@");    //Check if email domain is "gmail.com".
console.log(domain[1].includes("gmail.com"));

let empCode= department + "-" + ID[1];  //Generate employee code.
console.log(empCode);


let removeChar= specialStr.replace(/[^a-zA-Z0-9]/g,"");
console.log(removeChar);



