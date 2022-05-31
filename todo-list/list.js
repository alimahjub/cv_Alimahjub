var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
  }
}, false);

function addkey(e) {
  let s=e.key ;
  var j=document.getElementById("textinput").value;
  if(s=="Enter" && j!="" )
  add() ;
}


var todolist=[] ;
function add() {
    var x=document.getElementById("textinput").value;
    document.getElementById("textinput").value="" ;
    todolist.push(x) ;
    render() ;
    
}

function render() {
    list.innerHTML="";
    todolist.forEach(item =>{
    const l = document.createElement("li");
    l.innerHTML=item ;
    l.className="list-item"
    const element = document.getElementById("ls");
    element.appendChild(l);

    const b=document.createElement("button");
    b.addEventListener("click" ,function(){
        remove(item) ;
    })
    b.innerHTML="remove" ;
    b.className="delete"
    l.appendChild(b);
    })
}
function remove(value) {
    todolist=todolist.filter(item => {
                return item!==value ;
    })
    render() ;
}