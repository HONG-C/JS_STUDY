//1.배열
console.log("1.배열의 생성")
var member = ['egoing', 'k8805', 'sorialgi']
document.write(member);
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);
console.log("\n")
document.write('<br />');

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