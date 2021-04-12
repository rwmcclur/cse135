window.onload = function(){
    const span = document.getElementById("email");

    span.onclick = function() {
        document.execCommand("copy");
    }
    
    span.addEventListener("copy", function(event){
        event.preventDefault();
        if(event.clipboardData){
            event.clipboardData.setData("text/plain", "rwmcclur@ucsd.edu");
            //console.log(event.clipboardData.getData("text"))
        }
    });
}

