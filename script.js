document.getElementById('BtnDonate').addEventListener('click', function(){
	console.log("There are three speeches on this page.");
  //Code in here executes when the user clicks the "Donate" button.
});
document.getElementById('BtnChurchill').addEventListener('click', function(){
	console.log("This speech was written by Winston Churchill in 1940. It is false that this year is B.C.E.");
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	console.log("This speech was written by Ghandi in 1942. It is false that this year is B.C.E.");
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
	console.log("This speech was written by Demosthenes in 342. It is true that this year is B.C.E.");
  //Code in here executes when the user clicks the "Demosthenes" button.
});

var speech1 = {
	author: "Winston Churchill",
	year: "1940",
	bce: false
};

var speech2 = {
	author: "Ghandi",
	year: "1942",
	bce: false
};

var speech3 = {
	author: "Demosthenes",
	year: "342",
	bce: true
};

var speeches = [speech1, speech2, speech3];
var yearDifference = speech[1].year - speech[0].year;
console.log("Winston's speech and Ghandi's speech are" + yearDifference + "years apart");
