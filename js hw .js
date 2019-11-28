function getId(a) {
	return document.getElementById(a);
}
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);

}
let x = document.getElementsByClassName("mySlides");

function showDivs(n) {
	let i;
	let x = document.getElementsByClassName("mySlides");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	};
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
	form.children[slideIndex - 1].checked = true;
}

getId('first').onmouseover = function () {
	getId('s1').style.display = 'block';
}
getId('first').onmouseout = function () {
	getId('s1').style.display = 'none';
}
getId('second').onmouseover = function () {
	getId('s2').style.display = 'block';
}
getId('second').onmouseout = function () {
	getId('s2').style.display = 'none';
}
getId('third').onmouseover = function () {
	getId('s3').style.display = 'block';
}
getId('third').onmouseout = function () {
	getId('s3').style.display = 'none';
}
getId('fourth').onmouseover = function () {
	getId('s4').style.display = 'block';
}
getId('fourth').onmouseout = function () {
	getId('s4').style.display = 'none';
}

let timer;
let letsGo;
getId('play').addEventListener('click', function () {

    getId('play').style.display = 'none';
   getId('pause').style.display = 'block';
letsGo=setInterval(function () {
   function carousel() {
       let  i;
       let x = document.getElementsByClassName("mySlides");
       for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";
       }
       slideIndex++;
       if (slideIndex > x.length) {
           slideIndex = 1
       }
       x[slideIndex - 1].style.display = "block";
       form.children[slideIndex - 1].checked = true;
   }
   carousel();
},2000)
})
getId('pause').addEventListener('click', function () {
   getId('play').style.display = 'block';
   getId('pause').style.display = 'none';
   clearTimeout(letsGo);
})



getId('first').addEventListener('click', function () {
	x[3].style.display = "none";
	x[1].style.display = "none";
	x[2].style.display = "none";
	x[0].style.display = "block";
	form.children[0].checked = true;
	slideIndex = 1;
})
getId('second').addEventListener('click', function () {
	x[0].style.display = "none";
	x[3].style.display = "none";
	x[2].style.display = "none";
	x[1].style.display = "block";
	form.children[1].checked = true;
	slideIndex = 2;
})
getId('third').addEventListener('click', function () {
	x[0].style.display = "none";
	x[1].style.display = "none";
	x[3].style.display = "none";
	x[2].style.display = "block";
	form.children[2].checked = true;
	slideIndex = 3;
})

getId('fourth').addEventListener('click', function () {
	x[0].style.display = "none";
	x[1].style.display = "none";
	x[2].style.display = "none";
	x[3].style.display = "block";
	form.children[3].checked = true;
	slideIndex = 4;
})
