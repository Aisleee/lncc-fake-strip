function sname() {
	var str = location.href;
	var n1 = str.split("?")[1];
	var n2 = n1.split("&")[0];
	var n3 = n2.split("=")[1];
	document.getElementById("name").innerHTML = n3;
}

function sclass() {
	var str = location.href;
	var a1 = str.split("&")[1];
	var a2 = a1.split("=")[1];
	document.getElementById("class").innerHTML = a2;
}
sname();
sclass();




window.onload = function () {

	var a1 = str.split("&")[0];
	var a2 = a1.split("=")[1];
	document.getElementById("name1").innerHTML = a2;
	document.getElementById("name2").innerHTML = a2;



	var a1 = str.split("&")[1];
	var a2 = a1.split("=")[1];
	document.getElementById("class").innerHTML = a2;


	var a1 = str.split("&")[2];
	var a2 = a1.split("=")[1];
	document.getElementById("studentnumber").innerHTML = a2;



	var a1 = str.split("&")[3];
	var a2 = a1.split("=")[1];
	document.getElementById("phonenumber").innerHTML = a2;



	var a1 = str.split("&")[4];
	var a2 = a1.split("=")[1];
	var aa = a2.replace("T", " ");
	document.getElementById("requesttime").innerHTML = a2;



	var a1 = str.split("&")[5];
	var a2 = a1.split("=")[1];
	document.getElementById("stime").innerHTML = a2;



	var a1 = str.split("&")[6];
	var a2 = a1.split("=")[1];
	document.getElementById("edtime").innerHTML = a2;



	var a1 = str.split("&")[7];
	var a2 = a1.split("=")[1];
	document.getElementById("reason").innerHTML = a2;



	var a1 = str.split("&")[8];
	var a2 = a1.split("=")[1];
	document.getElementById("details").innerHTML = a2;



	var a1 = str.split("&")[9];
	var a2 = a1.split("=")[1];
	document.getElementById("passtime").innerHTML = a2;



	var a1 = str.split("&")[10];
	var a2 = a1.split("=")[1];
	document.getElementById("day").innerHTML = a2;



	var a1 = str.split("&")[11];
	var a2 = a1.split("=")[1];
	document.getElementById("duration").innerHTML = a2;
}