const caesar = function(str,val) {
    var out=""
    if(str.length>0){
        for (var i=0;i<str.length;i++){
            let ch=str[i]
            if (ch.toUpperCase()!=ch.toLowerCase()){
                    let code_val=ch.charCodeAt(0)
                    let A='A'.charCodeAt(0)
                    let Z='Z'.charCodeAt(0)
                    let a='a'.charCodeAt(0)
                    let z='z'.charCodeAt(0)
                    //console.log(a,z,A,Z,code)
                if ((code_val<=Z)&&(code_val>=A)){
                    code=code_val+(val%26+26)%26
                    if (code<A){
                        out+=String.fromCharCode(Z-(A-code+1))
                    }
                    else if(code>Z){
                        out+=String.fromCharCode(A+((code-1)%Z))
                    }
                    else{
                        out+=String.fromCharCode(code)
                    }

                }
                if ((code_val<=z)&&(code_val>=a)){
                    code=code_val+(val%26+26)%26
                    if (code<a){
                        out+=String.fromCharCode(z-(a-code+1))
                    }
                    else if(code>z){
                        out+=String.fromCharCode(a+((code-1)%z))
                    }              
                    else{
                        out+=String.fromCharCode(code)
                    }  
                }
            }   
            else{
                out+=ch
            }

        }

    }
    return out

};

// Do not edit below this line
module.exports = caesar;
