/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img18={max:1,pos:0};
	Img18[0]=new Image();Img18[0].src='algo1006009.gif';
	Img18[1]=new Image();Img18[1].src='algo1006010.gif';
	Img19={max:1,pos:0};
	Img19[0]=new Image();Img19[0].src='algo1007010.gif';
	Img19[1]=new Image();Img19[1].src='algo1007011.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e18\').src':(IE)?'e18.src':'document.e18.src';
	IDP[2]=(V5)?'document.getElementById(\'e19\').src':(IE)?'e19.src':'document.e19.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
