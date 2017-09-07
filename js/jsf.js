
var f1,f2,f3,f4,f5,f6;
function valida(){

		var x=document.forms["myFrom1s"]["fname"].value;
		var regex=/^[a-zA-Z]+$/;
		if(x.length<3)
		{
			document.getElementById("ipnew").style.border="5px solid red";
			document.getElementById("ipnew").style.color="red";
			f1=false;
		}
		else{
		document.getElementById("ipnew").style.border="5px solid red";
		document.getElementById("ipnew").style.color="black";

		}
		if(x.length==0){
		
		document.getElementById("tooltiptext").style.opacity="0"
		document.getElementById("tooltiptext").style.visibility="hidden";
		f1=false;
		}
		
		if(x.match(regex))
		{
		document.getElementById("ipnew").style.border="1px solid white";
			document.getElementById("ipnew").style.color="black";
				document.getElementById("tooltiptext").style.opacity="0"
		document.getElementById("tooltiptext").style.visibility="hidden";
		f1=true;
		}
		
		else if(x.length>1)
		{
		document.getElementById("ipnew").style.border="5px solid red";
		document.getElementById("ipnew").style.color="black";
		document.getElementById("tooltiptext").style.opacity="1"
		document.getElementById("tooltiptext").style.visibility="visible";
		
		}
		else{
		document.getElementById("ipnew").style.border="1px solid white";
			document.getElementById("ipnew").style.color="black";
			f1=true;
		}
		}
		
		
function valida1(){
	var x=document.forms["myFrom1s"]["lname"].value;
		var regex=/^[a-zA-Z]+$/;
		if(x.length<3)
		{
			document.getElementById("ip1new").style.border="5px solid red";
			document.getElementById("ip1new").style.color="red";
				f2=false;
		}
		else{
		document.getElementById("ip1new").style.border="5px solid red";
		document.getElementById("ip1new").style.color="black";

		}
		if(x.length==0){
		
		document.getElementById("tooltiptext1").style.opacity="0"
		document.getElementById("tooltiptext1").style.visibility="hidden";
		f2=false;
		}
		
		if(x.match(regex))
		{
		document.getElementById("ip1new").style.border="1px solid white";
			document.getElementById("ip1new").style.color="black";
				document.getElementById("tooltiptext1").style.opacity="0"
		document.getElementById("tooltiptext1").style.visibility="hidden";
		f2=true;
		}
		
		else if(x.length>1)
		{
		document.getElementById("ip1new").style.border="5px solid red";
		document.getElementById("ip1new").style.color="black";
		document.getElementById("tooltiptext1").style.opacity="1"
		document.getElementById("tooltiptext1").style.visibility="visible";
		}
		else{
		document.getElementById("ip1new").style.border="1px solid white";
			document.getElementById("ip1new").style.color="black";
				f2=false;
		}
	}
	
	function valida2(){
	var p1=document.forms["myFrom1s"]["pass1"].value;
	var regxp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	if(p1.match(regxp)){
		document.getElementById("pass1").style.border="1px solid white";
		document.getElementById("pass1").style.color="black";
			document.getElementById("tooltiptext2").style.opacity="0"
		document.getElementById("tooltiptext2").style.visibility="hidden";
		console.log("Matched");
		f3=true;
	}
	else
	{
	document.getElementById("pass1").style.border="5px solid red";
		document.getElementById("pass1").style.color="black";
		document.getElementById("tooltiptext2").style.opacity="1"
		document.getElementById("tooltiptext2").style.visibility="visible";
		console.log("Not Matched");
		f3=false;
	}
	if(p1.length==0){
	document.getElementById("pass1").style.border="1px solid white";
		document.getElementById("pass1").style.color="black";
			document.getElementById("tooltiptext2").style.opacity="0"
		document.getElementById("tooltiptext2").style.visibility="hidden";
		f3=false;
	}
	}
	
	
	function valida3(){
		var p1=document.forms["myFrom1s"]["pass1"].value;
		var p2=document.forms["myFrom1s"]["pass2"].value;
		if(p1===p2){
		document.getElementById("pass2").style.border="1px solid white";
		document.getElementById("pass2").style.color="black";
			document.getElementById("tooltiptext3").style.opacity="0"
		document.getElementById("tooltiptext3").style.visibility="hidden";
		f4=true;
		}
		else{
		document.getElementById("pass2").style.border="5px solid red";
		document.getElementById("pass2").style.color="black";
		document.getElementById("tooltiptext3").style.opacity="1"
		document.getElementById("tooltiptext3").style.visibility="visible";
		console.log("Not Matched");
		f4=false;
		}
		if(p2.length==0){
			document.getElementById("pass2").style.border="1px solid white";
		document.getElementById("pass2").style.color="black";
			document.getElementById("tooltiptext3").style.opacity="0"
		document.getElementById("tooltiptext3").style.visibility="hidden";
		f4=false;
		}
	}
		

function valida4(){
var e1=document.getElementById("email1").value;
var e2=document.getElementById("email2").value;

if(e1===e2){
document.getElementById("submitbnext1").removeAttribute("disabled");
document.getElementById("email2").style.border="1px solid white";
		document.getElementById("email2").style.color="black";
		document.getElementById("tooltiptext4").style.opacity="0"
		document.getElementById("tooltiptext4").style.visibility="hidden";
		f5=true;
}
else{
document.getElementById("email2").style.border="5px solid red";
		document.getElementById("email2").style.color="black";
		document.getElementById("tooltiptext4").style.opacity="1"
		document.getElementById("tooltiptext4").style.visibility="visible";
		f5=false;
}
}		


function nextpage(){
console.log("f1="+f1+" "+"f2="+f2+" "+"f3="+f3+" "+"f4="+f4+" "+"f5="+f5+" "+"f6="+f6+" ");
//if(f1==true && f2==true && f3==true && f4==true && f5==true && f6==true)
//{
//$("#form1").slideUp(500);
//
//}
$("#box1a").slideUp(500);
$("#box2").slideDown(1000);
//document.getElementById("box1a").style.display="none";
//document.getElementById("box2").style.display="block";
}


function valida5(){
var numcv=document.forms["myFrom2s"]["cnum"].value;
var regexp=/^\d\d\d\d\d\d\d\d\d\d$/;
console.log(numcv);
if(numcv.match(regexp)){
console.log("Match");
	document.getElementById("cnumber").style.border="1px solid white";
		document.getElementById("cnumber").style.color="black";
		document.getElementById("tooltiptext5").style.opacity="0"
		document.getElementById("tooltiptext5").style.visibility="hidden";
}
else{
console.log("No Match");
document.getElementById("cnumber").style.border="5px solid red";
		document.getElementById("cnumber").style.color="black";
		document.getElementById("tooltiptext5").style.opacity="1"
		document.getElementById("tooltiptext5").style.visibility="visible";
}
if(numcv.length==0){
document.getElementById("cnumber").style.border="1px solid white";
		document.getElementById("cnumber").style.color="black";
		document.getElementById("tooltiptext5").style.opacity="0"
		document.getElementById("tooltiptext5").style.visibility="hidden";
}
}


$("#cbm").click(function(){
	if($(this)["0"].checked==true){
		$("#cityname2").attr("value",$("#cityname1").val());
		$("#zip2id").attr("value",$("#zip1id").val());
		$("#pstate").attr("value",$("#cstate").val());
		$("#pcountry").attr("value",$("#ccountry").val());
	}
	else
	{
	$("#cityname2").attr("value","");
		$("#zip2id").attr("value","");
		$("#pstate").attr("value","");
		$("#pcountry").attr("value","");	
	}
});
/*
function samedisp(){
console.log("called");
var cname1=document.getElementById("cityname1").value;
document.getElementById("cityname2").value=cname1;
console.log(cname1);
var zip1=document.getElementById("zip1id").value;
document.getElementById("zip2id").value=zip1;

var st1=document.getElementById("cstate").value;
document.getElementById("pstate").value=st1;

var ct1=document.getElementById("ccountry").value;
document.getElementById("pcountry").value=ct1;
}

*/


function valida6(){
var zc=document.getElementById("zip1id").value;
if(zc.length==6){
document.getElementById("zip1id").style.border="1px solid white";
		document.getElementById("zip1id").style.color="black";
		document.getElementById("tooltiptext6").style.opacity="0"
		document.getElementById("tooltiptext6").style.visibility="hidden";
}
else{
document.getElementById("zip1id").style.border="5px solid red";
		document.getElementById("zip1id").style.color="black";
		document.getElementById("tooltiptext6").style.opacity="1"
		document.getElementById("tooltiptext6").style.visibility="visible";
}

if(zc.length==0)
{
document.getElementById("zip1id").style.border="1px solid white";
		document.getElementById("zip1id").style.color="black";
		document.getElementById("tooltiptext6").style.opacity="0"
		document.getElementById("tooltiptext6").style.visibility="hidden";
}
}

function valida7(){
var zc=document.getElementById("zip2id").value;
if(zc.length==6){
document.getElementById("zip2id").style.border="1px solid white";
		document.getElementById("zip2id").style.color="black";
		document.getElementById("tooltiptext7").style.opacity="0"
		document.getElementById("tooltiptext7").style.visibility="hidden";
}
else{
document.getElementById("zip2id").style.border="5px solid red";
		document.getElementById("zip2id").style.color="black";
		document.getElementById("tooltiptext7").style.opacity="1"
		document.getElementById("tooltiptext7").style.visibility="visible";
}
if(zc.length==0){
document.getElementById("zip2id").style.border="1px solid white";
		document.getElementById("zip2id").style.color="black";
		document.getElementById("tooltiptext7").style.opacity="0"
		document.getElementById("tooltiptext7").style.visibility="hidden";
}
}

function nextpage1(){

$("#box2").slideUp(500);
$("#box3").slideDown(1000);

//document.getElementById("box2").style.display="none";
//document.getElementById("box3").style.display="block";
}

//Captcha copied from original file
var flag=0;
	var resor=0;
	var flags=0;
	var n1=0;
var n2=0;
function captcha(){
var x=document.getElementById("captchan1");
	document.getElementById("captchaeq").innerHTML="=";
	var z=document.getElementById("captchan2");
	var y=document.getElementById("captchasym");
	n1=Math.floor((Math.random()*(100-1+1))+1);
	n2=Math.floor((Math.random()*(100-1+1))+1);
	x.innerHTML=n1;
	z.innerHTML=n2;
	
	if(n1>n2)
	{
		flag=1;
		var o1=Math.floor((Math.random()*(2-1+1))+1);
		if(o1==1){
			flags=1;
		y.innerHTML="/";	
		}
		if(o1==2){
			flags=2;
			y.innerHTML="-";
		}
		
	}
	else
	{
		flag=2;
	var o2=Math.floor((Math.random()*(2-1+1))+1);
		if(o2==1){
			flags=3;
		y.innerHTML="*";	
		}
		if(o2==2){
			flags=4;
			y.innerHTML="+";
		}
	}
	
}
function checkres(){
	
	if(flag==1){
		if(flags==1){
				resor=Math.floor(n1/n2);
		}
		if(flags==2){
			resor=n1-n2;
			
		}
	}
	if(flag==2){
		if(flags==3){
			resor=n1*n2;
			
		}
		if(flags==4){
			resor=n1+n2;
		}
	}
	var res=document.getElementById("captchares").value;
	console.log(resor);
	console.log(res);
	if(res!=resor)
	{
		
		document.getElementById("validorinvalid").innerHTML="Inorrect Captcha";
		captcha();
	}
	else{
		document.getElementById("validorinvalid").innerHTML="Correct";
		
	}
}

captcha();

//Weather API to be integrated here!
function wc(){
var cname="Bhubaneswar";
var handler=new XMLHttpRequest();
var link="http://api.apixu.com/v1/current.json?key=481d45110351424ebc3104644170409&q="+cname+"";//paste here with proper api
handler.open("GET",link,true);
handler.onreadystatechange=function(){
	if(this.status==200 && this.readyState==4){
	var jsondata=JSON.parse(this.responseText);
	console.log(jsondata);
	var fout=jsondata.location.name+"<br>";
	fout+="  Humidity:"+jsondata.current.humidity+"%"+" |Temrature:"+jsondata.current.temp_c+"deg"+"   |Windspeed: "+jsondata.current.wind_kph+"kph";
	document.getElementById("headerp2").innerHTML=fout;
		
	}
};
handler.send();
}
wc();

function nextpagelol(){
$("#box3").slideUp(1000);
$("#box4").slideDown(1000);
}

function validemail(){
var e1=document.forms["myFrom1s"]["email1"].value;
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//copied from stackoverflow.com
if(e1.match(re)){
document.getElementById("email1").style.border="1px solid white";
		document.getElementById("email1").style.color="black";
		document.getElementById("tooltiptextemail").style.opacity="0"
		document.getElementById("tooltiptextemail").style.visibility="hidden";
		f6=true;
}
else{
document.getElementById("email1").style.border="5px solid red";
		document.getElementById("email1").style.color="black";
		document.getElementById("tooltiptextemail").style.opacity="1"
		document.getElementById("tooltiptextemail").style.visibility="visible";
		f6=false;
}
if(e1.length==0)
{
document.getElementById("email1").style.border="1px solid white";
		document.getElementById("email1").style.color="black";
		document.getElementById("tooltiptextemail").style.opacity="0"
		document.getElementById("tooltiptextemail").style.visibility="hidden";
		f6=false;
}
}

$("#additemtolist").click(function(){
	var x=$("#itemadd").val();
	var m="<input type='checkbox'checked name='int' value="+x+">"+x+"";
	$(".cbsitem").prepend(m);
	console.log(m);
});