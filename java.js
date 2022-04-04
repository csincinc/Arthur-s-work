function change(){
 var select = document.getElementById('two');
 select.style.color='blue';
 select.style.backgroundColor='lightblue';
 select.style.fontFamily='Arial';
 select.innerHTML='Hi';
 select.style.textAlign='center';
}
function WW(){
 alert('Nice to see you');
}
function dd(){
    var a = document.getElementById("img").src="https://th.bing.com/th/id/R.a902a2666359a8cdfdb4a5073d402423?rik=%2fOAi8FFhylA5IQ&riu=http%3a%2f%2fimg.ewebweb.com%2fuploads%2f20191203%2f19%2f1575371671-fMmhxsnHNX.jpg&ehk=R7dew66vN%2bgvvyJL3I8BL00tsQwYL%2bv8PIqeUSKgzk4%3d&risl=&pid=ImgRaw&r=0";

}
function sum1(){
 var a = parseFloat(prompt('first number:'));
 var b = parseFloat(prompt('second number:'));
document.getElementById('sum1').innerHTML=a+b;
}
function sum2(){
    var a = prompt('First name')
    var b = prompt('Second name')
    document.getElementById('sum2').innerHTML='Nice to meet you'+a+b;
}
function question(f){
    return (5/9) * (f-32)
}
function question(){
    document.getElementById("question").innerHTML =  question(20);
}