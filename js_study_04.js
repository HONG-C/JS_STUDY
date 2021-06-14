//1.조건문이란?
console.log("1.조건문이란?")
if(true)
{
  console.log("1")
}
else if(true)
{
  console.log("2")
}
else if(true)
{
  console.log("3")  
}
else
{
  console.log("4")
}
console.log("\n")

//2.조건문의 응용
console.log("2.조건문의 응용")
prompt("당신의 나이는?")
alert(prompt("당신의 몇살?"))

var id = prompt('아이디를 입력해주세요.')
if(id=='egoing')
{
  alert('아이디가 일치 합니다.')
  var password=prompt("패스워드를 입력해주세요.")
  if(password=='111111')
  {
  alert('로그인 완료!')
  }
} 
else 
{
  alert('아이디가 일치하지 않습니다.')
}
console.log("\n")

//3.논리 연산자
console.log("3.논리연산자")

new_id = prompt('아이디를 입력해주세요.');
new_password = prompt('비밀번호를 입력해주세요.');
if(new_id=='egoing' && new_password=='111111')
 {
  alert('인증 했습니다.');
 } 
else 
 {
  alert('인증에 실패 했습니다.');
  }

newnew_id = prompt('아이디를 입력해주세요.');
newnew_password = prompt('비밀번호를 입력해주세요.');
if((newnew_id==='egoing' || newnew_id==='k8805' || newnew_id==='sorialgi') && newnew_password==='111111'){
    alert('인증 했습니다.');
} else {
    alert('인증에 실패 했습니다.');
}  
console.log("\n")


//4.boolean의 대체제
console.log("4.boolean의 대체제")
if(1)
{
  console.log(1)
}
if('')//빈문자열은 거짓!
{
  console.log("빈문자열")
}
if(undefined)//빈문자열은 거짓!
{
  console.log("undefined")
}
var b
if(!b)
{
  console.log("값이 할당되지 않은 변수")
}
if(!null)
{
  console.log("null")
}if(!NaN)
{
  console.log("NaN")
}