//1.변수의 사용법 
console.log("변수의 사용법")
var a=1;
console.log(a)
a=10
console.log(a)
var b=3;
console.log(a+b)
var c="coding "
var d="no jam"
console.log(c+d)
var e="coding ",f="honey jam"
console.log(e+f)
console.log("\n")

//2.변수의 효용
console.log("2.변수의 효용")
//변수를 쓰기 전
console.log(100+10);
console.log((100+10)/10);
console.log(((100+10)/10)-10);
console.log((((100+10)/10)-10)*10);
// 변수 사용 후
a = 100;
a = a + 10;
console.log(a);
a = a / 10;
console.log(a);
a = a - 10;
console.log(a);
a = a * 10;      
console.log(a);
console.log("\n")

//3.연산자
console.log("3.연산자")
//var a=3; 대입연산자
//a==b; 비교 연산자
console.log(a==b)
console.log(a==10)
//특이 포인트
//===은 완전히 같을때 사용!
console.log(10=='10')
console.log(10==='10')
console.log("\n")
//거의 웬만하면 === 사용하기!
//에러 확률 낮춤

//4.===를 사용하자!
console.log("4.===를 사용하자!")
//undefined:의도하지 않은 빈 값
//null:의도한 빈 값
console.log(null == undefined);       //true
console.log(null === undefined);      //false
console.log(true == 1);               //true
console.log(true === 1);              //false
console.log(true == '1');             //true
console.log(true === '1');            //false
 
console.log(0 === -0);                //true
//NaN:0나누기 0등 계산할 수 없을 때
console.log(NaN === NaN);             //false
console.log("\n")
//생활코딩 사이트에 비교연산자 결과표 있음!


//5.부정과 부등호 
console.log("5.부정과 부등호")
console.log(1!=2);            //true
console.log(1!=1);            //false
console.log("one"!="two");    //true
console.log("one"!="one");    //false
console.log(10>20);   //false
console.log(10>1);    //true
console.log(10>10);   //false
console.log(10>=20);      //false
console.log(10>=1);       //true
console.log(10>=10);      //true
console.log("\n")
