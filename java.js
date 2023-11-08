let moon = document.getElementById("moonDiv") 
let sun = document.getElementById("sunDiv")

let utro = function(){
    sun.style.transition = '10s';
    sun.style.marginTop = '55px';
    sun.style.backgroundColor = '#eb7e10';
    moon.style.transition = '15s';
    moon.style.marginLeft = '-60px';
    document.body.style.transition = '15s';
    document.body.style.backgroundColor = '#fad066'
    

    
}

setTimeout(()=>{
    utro()
} , 1000
)