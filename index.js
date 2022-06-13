document.write("<h1>"+ "OUR RESTURANT"+ "</h1>")
var fd =["donut","softdrink", "candy","samosa","roll","zinger","pizaa"]
var food=["raita", "donut","softdrink", "candy","samosa","roll","zinger","pizaa"]
var prm = prompt("enter")
for(var i = 0; i < food.length; i++){
    if(prm===food[i]){
        document.write("<h2>" + food[i] + " is available" + "</h2>")


        for( var j = 0; j < fd.length; j++ ){
            document.write("<h2>" +(j + 1)+ fd[j] + " is also available" + "</h2>")
            
        
     
    }

}
}
