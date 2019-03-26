
var index=0,
	img_count=4,
	timer=null,
	locatArr = [0, -720, -1440, -2160],
	box=document.getElementsByClassName("box")[0],
	dot=document.getElementsByClassName("dot")[0];

function moveTo(location){
	var taget_position=parseInt(window.getComputedStyle(box).left-locatArr[location]);
	box.style.left=locatArr[location]+"px";
}

function nextPlay(){
	if(index==3){
		moveTo[0];
		index=0;
	}else{
		moveTo(++index);
	}
}

function lastPlay(){
	if(index==0){
		moveTo[3];
		index=3;
	}else{
		moveTo(--index);
	}
}

function display(){
	var initLeft=parseInt(window.getComputedStyle(box).left);
	if(index==img_count-1){
		moveTo(0);
		index=0;
	}else{
		moveTo(++index);
	}
}

function bindEvent(){
	var li=dot.getElementsByTagName("li");
	var next=document.getElementsByClassName("next")[0];
	var last=document.getElementsByClassName("last")[0];
	next.addEventListener("click",function(){
		clearInterval(timer);
		nextPlay();
		timer=setInterval(display,2000);
	});
	last.addEventListener("click", function(){
		clearInterval(timer);
		lastPlay();
		timer=setInterval(display,2000);
	});
	for(var i=0;i<4;i++){
		(function(j){
			li[j].addEventListener("click", function(){
			clearInterval(timer);
			index=j;
			moveTo(index);
			timer=setInterval(display,2000);
			})
		}(i))
	}
}

function start(){
	timer = setInterval(display,2000);
	var timerDot = setInterval(function(){
		var dots = document.getElementsByClassName("dot")[0];
		var singledot = dots.getElementsByTagName("li");
		for(var i=0;i<4;i++){
			singledot[i].className="";
		}
		singledot[index].className="act";
	},20)
	bindEvent();
}

start();