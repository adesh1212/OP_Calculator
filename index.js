let buttons=document.querySelectorAll(".btn");
let str="";

Array.from(buttons).forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.innerHTML=='=')
        {try{
            str=eval(str)
            document.querySelector(".inp").value=str;
        }
            catch(err){
                document.querySelector(".inp").value="invalid syntax";
            }
        }
        else if(e.innerHTML=='AC')
        {
            str="";
            document.querySelector(".inp").value=str;
        }
        else if(e.innerHTML=='%'){
            str=str+'/';
            document.querySelector(".inp").value=str;
        }
        else{
        str=str+e.innerHTML;
        document.querySelector(".inp").value=str;
        }
    })
})