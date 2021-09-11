if(window.File && window.FileList && window.FileReader)
{
   //support html5
	var fileselect = document.getElementById("fileselect");
	fileselect.addEventListener("change",fileselected);
	
	
	var filedrop=document.getElementById("filedrop");
	//filedrop.addEventListener("dragover",filedropped);
	filedrop.addEventListener("drop",fileselected);
}
else
{
   alert("your browser does not support html5");
}

function fileselected(e)
{
	e.preventDefault();
	//alert("ok")
	var files=e.target.files || e.target.dataTransfer.files;
	for(var i=0, f;f=files[i];i++);
	{		
		parsefile(f);
	}
	
}

/*function filedropped(e)
{
	//alert("works")
}*/



function parsefile(file)
{
	var output=document.getElementById("output");
	output.innerHTML+=file.name+"<br>";
	output.innerHTML+=file.type+"<br>";
	output.innerHTML+=file.size+"<br>";
	
	
if(file.type.indexOf("image")==0)
  {
       //alert("this is an image");
	  var reader=new FileReader();
	  reader.onload=function(e){
		  
		  document.getElementById("output").innerHTML+=file.name+"<br>";
		  
		  document.getElementById("output").innerHTML+="<img src="+e.target.result+" />+<br>";
	  }
	  reader.readAsDataURL(file)
  }
/*else if(file.type.indexOf("video")==0)
  {
   	   alert("this is not an image");
  }*/
	if(file.type.indexOf("text")==0)
  {
	  //alert("this is a text file");
	   var reader=new FileReader();
	  reader.onload=function(e){
		  
		  document.getElementById("output").innerHTML+=file.name+"<br>";
		  
		  document.getElementById("output").innerHTML+="<h1>"+e.target.result+"</h1><br>";
	  }
	  reader.readAsText(file)
  }
}

