
function upDate(previewPic){
    
    /*document.getElementById("image").innerHTML = previewPic.alt;*/
    document.getElementById('corgi').src = previewPic.src;
    document.getElementById('corgi').alt = previewPic.alt;
    document.getElementById('corgi').style.width = "100%";
    document.getElementById('corgi').style.border = " solid 2px rgb(0,0,0)";
    /*document.getElementById("image").style.color = "rgb(255,255,255)";*/

}

	function unDo(){
   
    /*document.getElementById("image").innerHTML = "Hover over an image to the left to display here.";*/
    document.getElementById('corgi').src = "/dummy";  
    document.getElementById('corgi').alt = "";
    document.getElementById('corgi').style.width = "0%";
    document.getElementById('corgi').style.border = "none";
    /*document.getElementById("image").style.color = "rgb(0,0,0)";*/
    
}
