//  Wap to input string in lower case into uppper case:-
const prompt=require('prompt-sync')();
// creation of function
function lowerInput(str){
    var i = 0 ;
    var newstr = "";
    while(i<str.length)
    {
        ch=str[i];
        code =str.chatCodeAt(i);
        // console.log(code,ch);
        if(code>=97 && code<=122)
        {
            code-=32;
            ch=Sting.fromCharCode(code);
        }
        i++
       newstr+=ch; 
    }
    return newstr;

}
x=prompt("Enter a String in Lower Case:=");
res = lowerInput();
console.log(res);
