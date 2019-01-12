let h,m,s;
let initial= 60;


function setup(){
	createCanvas(400,600);
	background(51);

}


function draw(){
	
}


function format(h,m,s){
	if(m<60 && s<60){
		fill(255);
		textSize(20);
		text(nf(h,2)+"h "+nf(m,2)+"m "+nf(s,2)+"s ",10,100);
	}
	if(m>60 || s>60){
		var min = floor(s/60)+abs(m);
		var sec =  s%60;

		if(min>60){
			var hr = floor(min/60)+ abs(h);
			var hh =  min%60;
		}
		fill(255);
		textSize(20);
		text(nf(hr,2)+"h "+nf(hh,2)+"m "+nf(sec,2)+"s ",10,100);

	}

}
// function format(h,m,s){
	
// 		var min = floor(s/60)+abs(m);
// 		var sec = s%60;

// 	if(min>=60){
// 		var hr = floor(min/60) + abs(h);
// 		var hh = min%60 ;
// 	}

// 	fill(255);
// 	textSize(20);
// 	text(nf(hr,2)+"h "+nf(hh,2)+"m "+nf(sec,2)+"s ",10,100);

	
// }

function startTimer(){
	background(51);
	h = document.getElementById('hr').value;
	m = document.getElementById('mn').value;
	s = document.getElementById('sc').value;
	format(h,m,s);
	
}

function resetTimer(){
	background(51);
	h=0;
	m=0;
	s=0;
	fill(255);
	textSize(20);
	text(nf(h,2)+"h "+nf(m,2)+"m "+nf(s,2)+"s ",10,100);
}