/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img2={max:1,pos:0};
	Img2[0]=new Image();Img2[0].src='algo1011001.jpg';
	Img2[1]=new Image();Img2[1].src='algo1011002.jpg';
	Img26={max:1,pos:0};
	Img26[0]=new Image();Img26[0].src='algo1011009.gif';
	Img26[1]=new Image();Img26[1].src='algo1011010.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e2\').src':(IE)?'e2.src':'document.e2.src';
	IDP[2]=(V5)?'document.getElementById(\'e26\').src':(IE)?'e26.src':'document.e26.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
