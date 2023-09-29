# DZ
let s = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBbbbаf';
let b=''
let g=''
for(var i=0, a = 0; i <= s.length; i++) {
        if(s.charAt(i) == s.charAt(i+1)) a++;
        else {
			g=String.fromCharCode(a ? a + 1 : '');
            b += s.charAt(i) +'#' + g;
            a = 0;
        }
    }
console.log(b)
let Dec=b;
Dec=Dec.toString();
for (let i=0; i < 256; i++){
	if (Dec.charAt(i) == '#'){
		Dec=Dec.replace(Dec.charAt(i+1),Dec.charCodeAt(i+1));
	}
}
for (let i = 0; i<256; i++){
	if(Dec.charAt(i)== '#'){
		Dec=Dec.replace(Dec.charAt(i+1),Dec.charAt(i-1).repeat(Number(Dec.charAt(i+1)-1)));
		Dec=Dec.replace("#","");
	}
}
console.log(Dec)
