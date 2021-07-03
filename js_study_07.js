//1.배열
console.log("1.배열의 생성")
var member = ['egoing', 'k8805', 'sorialgi']
document.write(member);
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);
console.log("\n")
document.write('<br />');//html에서의 줄바꿈!

//2.배열의 효용성 
console.log("2.배열의 효용성")
function get_numbers(){
  return ['egoing','k8805','sorialgi']
}
var members=get_numbers();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);
console.log("\n")
document.write('<br />');

//3.배열의 사용-배열과 반복문 
console.log("3.배열의 사용-배열과 반복문 ")
function get_members(){
    return ['a yo', 'bee', 'chicken'];
}
new_members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < new_members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    document.write(new_members[i].toUpperCase());   
    document.write('<br />');
}
console.log("\n")

//document.write('<br />');//html에서의 줄바꿈!
//(배열 이름).length:배열에 담긴 값의 개수 반환 
// (배열이름)[i].toUpperCase():(배열이름)[i]에 담긴 문자를 대문자로 변환


//4.배열의 조작-추가 
console.log("4.배열의 조작-추가")
var arr=[1,2,3,4,5];
console.log(arr.length)
arr.push(6);//배열의 값 추가 
console.log(arr)
arr=arr.concat(['7','8']);//배열의 값 추가(복수)
console.log(arr)
arr.unshift('0');//가장 앞부분에 요소 추가 
console.log(arr)
arr.splice(1,1,'a');//생활코딩에 자세한 인자 내용 나와있으니 확인!
//array.splice(index,howmany,element)
//index:특정 배열 위치
//howmany:index에서부터 제거될 원소의 수.0이면 아무것도 삭제 안함
//element:index와 howmany사이 추가될 값 
//추가적으로 삭제될 값 리턴함!
//다 외우기보단 검색하면서 그때그때 사용법 확인!
console.log(arr)
console.log("\n")

//5.배열의 조작-제거,정렬
console.log("5.배열의 조작-제거,정렬")
var li=['a','f','g','d','c','k','e'];
li.shift();//맨 앞에 요소 삭제
document.write(li)
document.write('<br />');
li.pop();//맨 끝에 요소 삭제
document.write(li)
document.write('<br />');
li.sort();
document.write(li)
document.write('<br />');
li.reverse();
document.write(li)
document.write('<br />');
console.log("\n")

//원하는 방식으로 정렬하고 싶을땐 생활코딩에서 데이터 값을 찾아서 하기!
//array.sort(sortfunc):요기서 sortfunc을 정의하여 입맛대로 정렬가능