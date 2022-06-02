function test(value) {
    let x = Math.floor((Math.random() * 1000) + 1);
    if(x%2==0 && value=='right')
    document.getElementById("rgh").style.backgroundColor="green" ;
    if(x%2!==0 && value=='right')
    document.getElementById("rgh").style.backgroundColor="red" ;

    if (x%2!==0 && value=='left')
    document.getElementById("lft").style.backgroundColor="green" ;
    if (x%2==0 && value=='left')
    document.getElementById("lft").style.backgroundColor="red" ;

}

function relode() {
    document.getElementById("rgh").style.backgroundColor="yellow" ;
    document.getElementById("lft").style.backgroundColor="yellow" ;
}