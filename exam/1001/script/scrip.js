  var picnum;   //全局变量用来记录是第几张图片
	  var picsrc;    //全局变量用来记录图片的url
	  var strr;
	  var i=1;      //全局变量用来记录是否是首次显示此网页
     function hun(){
	 src=document.getElementById("picshow").src;   //获得当前图片的url，pic/01.jpg
	
	 a=src.lastIndexOf("/");  //获得“/”的位置
	 src=src.substring(a+1);  //获得01.jpg
	 b=src.indexOf(".");     //获得“.”的位置
	  
	 src=src.substring(0,b);   //得到01

	 
	 strr=src.substring(1,b);   //判断是哪个相片
	/* document.write(strr);*/
	  strrnum=parseInt(strr);
	  
	 
	 num=parseInt(src);     // 因为上面获得是字符型的，下面要参加数字运算，
                       //所有要将字符型转换成整型；此时获得 1
	 	 picnum=num; 
	 	        // 赋值，记录当前是第一张图片	 
	 }
	 
	function funz(){
	if(i==1){                   //若网页是首次访问，为何这样做呢？
	 i=i+1;                    //防止刚打开网页图片是从第二张图片开始
                              //循环
	 picnum=picnum;    		  //若是，则图片的张数不会增加
	 }else{picnum=picnum+1;}    //若不是，图片的张数会增加一，将要显示下
                              //一张图片
	if(picnum==4) picnum=1;     //若是picnum等于4，则要重新赋值为1，达
                              //到循环的效果。	 
	 	picsrc="images/0"+picnum+".jpg";  //生成图片的URL
	document.getElementById("picshow").src=picsrc;  //赋值
 
        	picsrc="images/00"+picnum+".jpg";  //生成图片的URL
	document.getElementById("picshow1").src=picsrc;  //赋值      
	}
	
	function move(){
	 hun();
	 funz();
	}
	

	