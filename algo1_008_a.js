/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{

	Img27={max:1,pos:0};
	Img27[0]=new Image();Img27[0].src='algo1006009.gif';
	Img27[1]=new Image();Img27[1].src='algo1006010.gif';
	Img28={max:1,pos:0};
	Img28[0]=new Image();Img28[0].src='algo1007010.gif';
	Img28[1]=new Image();Img28[1].src='algo1007011.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e27\').src':(IE)?'e27.src':'document.e27.src';
	IDP[2]=(V5)?'document.getElementById(\'e28\').src':(IE)?'e28.src':'document.e28.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
