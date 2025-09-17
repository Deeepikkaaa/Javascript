//js string substring() method
// it is used  to extract chars between two indices from a string
let Politics="Dirty Game";
let  extract=Politics.substring(3,7);
console.log(extract);

//extracting substring by character index
let s1="Deepika Bhandari";
let s2=s1.substring(0,5);
let s3=s1.substring(8);
 console.log(s2);
 console.log(s3);


 //string validation using substring()
 let email="deepika@gmail.com";
 let domain=email.substring(email.indexOf("@")+1);
 console.log(domain);

 //removing a prefix or suffix
 let file="college.pdf";
 let remove=file.substring(file.lastIndexOf(".")+1);
 console.log(remove);


 //substring() treats -ve indices as 0
 let s="Hello,javascript!";
 let res=s.substring(-5,-4);
 console.log(res);

 //when starting index is greater than ending it swaps value
 let d="Learning Javascript";
 let b=d.substring(12,7);
  console.log(b);