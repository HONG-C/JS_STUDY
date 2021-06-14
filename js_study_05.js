//1.반복문
console.log("1.반복문")
var i=0;
while(i<5)
{
  document.write("coding everybody"+i+"<br />")
  i=i+1;
}
for(var i=0;i<5;i++)
{
  document.write("sleep everybody"+i+"<br />")
}
j=0;
console.log(j++)
console.log(j++)
console.log(j++)
k=0
console.log(++k)
console.log(++k)
console.log(++k)
//break문
for(var i=0;i<5;i++)
{
  console.log("hello world"+i);
  if(i===2)
  {
    break;//반복문의 종료 
  }
}
//continue문 
for(var i=0;i<5;i++)
{
  console.log("count"+i);
  if(i===2)
  {
    continue;//이 부분 넘어가고 다시 반복문 실행 
  }
}

//반복문의 중첩 사용 
// 0부터 9까지 변수 i에 순차적으로 값을 할당        
for(var i = 0; i < 10; i++){
    // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
    for(var j = 0; j < 10; j++){    
        // i와 j의 값을 더한 후에 출력
        // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        document.write(String(i)+String(j)+'<br />');
    }
}
//디버거 사용
//개발자 도구->소스 탭->F5(새로고침)->체크하고자 하는 라인 클릭하면 breakpoints에 추가됨.그러면 그부분 전 까지 실행되고 멈춤
//화살표:실행    아래 화살표:다음 실행
//내부에서 변수의 현재 값 확인 가능 