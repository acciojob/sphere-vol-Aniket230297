function volume_sphere() {
    //Write your code here
	let radius=document.getElementById("radius").value;
	let volume=(4/3*3.14*(radius*radius*radius));
    //let output=document.getElementById("volume").value;
	//output.innerHTML= volume;
	document.getElementById("volume").value=volume;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
