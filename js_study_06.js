//1.함수
console.log("1.함수")
function numbering(arg1,arg2)//매개변수
{
  i=0;
  while(i<arg1){
  document.write(i);
  i++;  
  }
  return arg2;
  /*return의 역할
  1.함수의 종료
  2.값의 반환
  +입력값은 여러개 가능하지만 리턴값은 무조건 하나!
  */
}
console.log(numbering(3,1));//인자 전달 
console.log(numbering(5,2));
//재사용성,유지보수의 용이,가독성

//자바스크립트의 색다른 함수 선언 
var new_numbering = function (){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }   
}
new_numbering();

//익명함수(일회성으로 호출할 때 사용)
//바로 선언되고 호출됨 
(function (){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }   
})();