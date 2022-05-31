function calculator(value) {
    if(value=='AC'){
        let inp =document.getElementById("inp").innerHTML ;
        inp = inp.substring(0, inp.length - 1);
        document.getElementById("inp").innerHTML=inp ;
    }
    else if(value=='DEL')
        document.getElementById("inp").innerHTML="" ;
    
    else if(value=='=')
        calc() ;
    else{
        document.getElementById("inp").innerHTML+=value ;
        let l=document.getElementById("inp").innerHTML ;

        if(value=='+' || value=='-' || value=='*' || value=="/" ){
            console.log(l[l.length]) ;
        }
        // document.getElementById("inp").innerHTML+=value ;
    }
        
}

function calc() {
    let c=[] ;
    let j="",k=0 ;
    let v = document.getElementById("inp").innerHTML ;
    console.log(v.length)
    console.log(v)
    for(i=0 ;i<=v.length ;i++) {
        if(v[i]=='+' || v[i]=='-' || v[i]=='*' || v[i]=="/" || i==v.length){
            c[k]=j ;
            j="" ;
            k++ ;
            if(i!=v.length)
           { c[k]=v[i] ;
            k++ ;}
        }
        else
            j+=v[i] ;
    }
    console.log(c) ;
    for(i=0 ; i<c.length ;i++){
        if(c[i]=='*' || c[i]=='/'){
            let a=parseFloat(c[(i-1)]) ;
            let b=parseFloat(c[(i+1)]) ;
            if(c[i]=='/') {
                a/=b ;
            }
            if(c[i]=='*') {
                a*=b ;
            }
            c.splice((i-1), 1); 
            c.splice((i), 1); 
            c[i-1]=a.toString() ;
            i=0 ;
        }
    }
    for(i=0 ; i<c.length ;i++){
        if(c[i]=='-' || c[i]=='+'){
            let a=parseFloat(c[(i-1)]) ;
            let b=parseFloat(c[(i+1)]) ;
            if(c[i]=='+') {
                a+=b ;
            }
            if(c[i]=='-') {
                a-=b ;
            }
            c.splice((i-1), 1); 
            c.splice((i), 1); 
            c[i-1]=a.toString() ;
            i=0 ;
        }
    }
    document.getElementById("inp").innerHTML=c[0] ;
}