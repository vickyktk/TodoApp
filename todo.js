// var h=document.createElement('h1')
// var text=document.createTextNode('Created Heading')

// h.appendChild(text)
// document.querySelector('body').appendChild(h)

var ul=document.getElementById('list')
var li;
let length=localStorage.length
for(let i=0;i<length;i++){
    var item=localStorage.key(i)
    var textnode=document.createTextNode(item)
    var checkbox=document.createElement('input')
        checkbox.setAttribute('type','checkbox')
        var lable=document.createElement('label')
        lable.appendChild(textnode)
        li=document.createElement('li')
        li.appendChild(checkbox)
        li.appendChild(lable)
        // ul.appendChild(li)//this will append it at the end
        ul.insertBefore(li,ul.childNodes[0])

    
}



function addItem(){
    var input=document.getElementById('item')
    var item=input.value;
    var textnode=document.createTextNode(item)


    if(item ==''){
        alert('Add something')
        return false;
    }else{
        localStorage.setItem(`${item}`,item)
        var checkbox=document.createElement('input')
        checkbox.setAttribute('type','checkbox')
        var lable=document.createElement('label')
        lable.appendChild(textnode)
        li=document.createElement('li')
        li.appendChild(checkbox)
        li.appendChild(lable)
        // ul.appendChild(li)//this will append it at the end
        ul.insertBefore(li,ul.childNodes[0])

        input.value=''
        input.focus();
    }
    
}


function removeItem(){
    var check=0;
    li=ul.children
    if(li.length==0){
        alert('There are no todos to be deleted')
    }else{
        for(var i=0;i<li.length;i++){
        while(li[i] && li[i].children[0].checked){
            let text=li[i].children[1].innerHTML
            localStorage.removeItem(text)
            ul.removeChild(li[i])
            check++;


        }

    }
            if(check==0){
                alert('Please select a todo to be deleted')
            }else{
                setTimeout(()=>{
                alert('Your selected todos has been deleted')
                            },500)
            }

    }
}