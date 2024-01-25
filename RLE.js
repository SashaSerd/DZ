let s=require('fs').readFileSync('text.txt');
s=s.toString();
console.log(s);
let cont=1;
let i=0;
let str='';
while(i<s.length){
	while(s[i]==s[i+cont]){
		cont++;
	}
	if (s[i]=='#'){
		str+='#'+String.fromCharCode(cnt)+s[i];
		i+=cont;
		}
	else{
		if(cont>3){
			str+='#'+String.fromCharCode(cont)+s[i];
			i+=cont;
			}
		else{ 
			str+=s[i];
			i+=1;
		}
	}
	cnt=1;
}
const fs = require("fs");
fs.writeFile("code.txt", str, function(error){
    if(error) throw error;
});
fs.readFile("code.txt", (error, st) => {
    if (error) {
        console.error(error);
        return;
    }

    st = st.toString()
    rez = ''
    for (i = 0; i < st.length;) {
        let ch = st[i]
        if (ch == '#') {
            rez += st[i + 2].repeat(st[i + 1].charCodeAt(0))
            i += 3
        }
        else {
            rez += ch
            i += 1
        }
    }
    fs.writeFile("decode.txt", rez, (error) => {
        if (error) {
            console.error(error)
        }
    })
})