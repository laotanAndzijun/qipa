$(window).ready(function(){
var i=0;
var dui=0;
var myFun={
	allQuestions:[
		{question:"1.人生在世不称意，明朝散发弄扁舟。这里的“扁”字念：", choices:["piān","biǎn"], correctAnswer: 0},
		{question:"2.徒令上将挥神笔，终见降王走传车。这里的“令”字念: ", choices:["lìng","líng"], correctAnswer: 1},
		{question:"3.最是一年春好处，绝胜烟柳满皇都。这里的“胜”字念: ", choices:["shēng","shèng"], correctAnswer: 0},
		{question:"4.楼上有愁春不成，小桃风雪凭阑干。这里的“凭”字念：", choices:["bìn","píng"], correctAnswer: 0},
		{question:"5.契阔阻风期，荏苒成雨别。这里的“契”字念：", choices:["qì","qiè"], correctAnswer: 1},
		{question:"6.白头虽强醉，不似少年欢。这里的“强”字念：", choices:["qiǎng","qiáng"], correctAnswer: 0},
		{question:"7.客舍并州已十霜，归心日夜忆咸阳。这里的“并”字念：", choices:["bīng","bìng"], correctAnswer: 0},
		{question:"8.苗而不秀岂其天，不使童乌与我玄。这里的“与”字念：", choices:["yǔ","yù"], correctAnswer: 1},
		{question:"9.蝉声不断草堂静，潦水已归村路通。这里的“潦”字念：", choices:["liáo","lǎo"], correctAnswer: 1},
		{question:"10.万事固难轻忖度，百年犹有未更尝。这里的“更”字念：", choices:["gèng","gēng"], correctAnswer: 1},
		{question:"11.愁肠泥酒人千里，泪眼倚楼天四垂。这里的“泥”字念: ", choices:["ní","nì"], correctAnswer: 1},
		{question:"12.身坐众香国，蒲团诗思新。这里的“思”字念:", choices:["sì","sī"], correctAnswer: 0},
		{question:"13.丛竹晓兼风力横，高梧夜挟雨声骄。这里的“横”字念: ", choices:["hèng","héng"], correctAnswer: 0},
		{question:"14.春水乱滩船下疾，晓风残月酒醒迟。这里的“醒”字念:", choices:["xīng","xǐng"], correctAnswer: 0},
		{question:"15.晓了莲经义，堪任宝盖迎。这里的“任”字念:", choices:["rén","rèn"], correctAnswer: 0},
		{question:"16.既高才数黜，官又下迁，乃作《进学解》以自喻。这里的“数”字念:", choices:["shǔ","shù"], correctAnswer: 1},
		{question:"17.无那尘缘容易绝。这里的“那”字念:", choices:["nà","naì"], correctAnswer: 1},
		{question:"18.但使龙城飞将在， 不教胡马度阴山。这里的“教”字念:", choices:["jiāo","jiào"], correctAnswer: 0},
		{question:"19.独掩陈编吊兴废，窗前山雨夜浪浪。这里的“浪”字念:", choices:["làng","láng"], correctAnswer: 1},
		{question:"20.人间不当花看。这里的“当”字念:", choices:["dāng","dàng"], correctAnswer: 1}
	],
	alljieda:[
		{jieda:"这里的“扁”字应念“piān”，在平水韵中属下平声一先韵，是“小”的意思。不能念成“biǎn”。"},
		{jieda:"这里的“令”字应念“líng”，在平水韵中属下平声八庚韵，是“使”的意思。不能念成“lìng”。"},
		{jieda:"这里的“胜”字应念“shēng”，在平水韵中属下平声十蒸韵。“胜”字在平水韵中分属蒸韵和去声二十五径韵，音不同意义相同。现在汉语中只有“shèng”的读音。"},
		{jieda:"这里的“凭”应念“bìn”，在平水韵中属去声二十五径韵。“凭”字在平水韵中分属蒸韵和去声二十五径韵，音不同意义相同。现在汉语中只有“píng”的读音。"},
		{jieda:"这里的“契”字念“qiè”，是“久别”的意思，不能念成“qì”。"},
		{jieda:"这里的“强”字念“qǎing”，勉强的意思，不能念成“qáing”。"},
		{jieda:"这里的“并”字念“bīng”，不能念成“bìng”。"},
		{jieda:"这里的“与”字念“yù”，不念“yǔ”。"},
		{jieda:"这里的“潦”字念“lǎo”，是“大雨水，雨后积水”的意思。不能念成“liáo”。"},
		{jieda:"这里的“更”字念“gēng”，不能念成“gèng”。"},
		{jieda:"这里的“泥”字念“nì”，不能念成“ní”。"},
		{jieda:"这里的“思”字念“sì”，不能念成“sī”或“si ”。"},
		{jieda:"这里的“横”字念“hèng”,不能念成“héng”。"},
		{jieda:"表示醒了酒、清醒的意思念平声。这个地方的醒字只能念平声，否则就出律了。"},
		{jieda:"表示担当之义，如堪任、难任、力任，念平声。"},
		{jieda:"表示屡次之意，音硕，入声。"},
		{jieda:"又如那堪：柳永“更那堪、冷落清秋节。”一音耐，通奈。"},
		{jieda:"表示使令之意只读平声。"},
		{jieda:"沧浪亦读平声。故《沧浪诗话》不能读成沧làng诗话。"},
		{jieda:"当作、只当，读去声。"}
	],
	answer:function(p){
		if(p==myFun.allQuestions[i].correctAnswer){
			$("#mobai").css("display","block");
			dui++;
		}else{
			$("#xianqi").css("display","block");
		}
		$("#jiedu").text(myFun.alljieda[i].jieda);
		$("#jiedu").css("display","block");
		$("#btn").css("display","block");
		$(".footer").css("display","none");

	},
	ev:function (){
		i++;
		/*if(i>=19){
			$("#btn").css("display","none");
			$("#fenshu").css("display","block");
		}*/
		switch(i){
		case 19:
		$("#ev").text("查看你的分数")
		/* $("#btn").css("display","none"); */
		/* $("#fenshu").css("display","block");	 */
		break;
	    case 20:
		$("#btn").css("display","none");
        myFun.fenshu();
		break;
		/* 	
		case 21:
		$("#btn").css("display","none"); */
        
	}
		var timu=$("#timu").text(myFun.allQuestions[i].question);
		var li1=$(".answer1").text(myFun.allQuestions[i].choices[0]);
		var li2=$(".answer2").text(myFun.allQuestions[i].choices[1]);
		$("#jiedu").css("display","none");
		$("#mobai").css("display","none");
		$("#xianqi").css("display","none");
		$("#btn").css("display","none");
		$(".footer").css("display","block");
		$(".tishu").html("<p><span>"+(i+1)+"</span>/20</p>");

	},
	fenshu:function (){
		var fshu=dui*5;
		$("#content").css("display","none");
		$("#fenshu").css("display","none");
		$(".tishu").css("display","none");
		$(".share span").text("你获得的分数是"+fshu+"分!");
		$("#cfenshu").css("display","block");
		return fshu;
	},
	fx:function (){
		/* $("#fx").css("display","block"); */
		$("#zhezhao").css({"display":"block","position": "fixed","background": "#000","z-index": "1001","-moz-opacity": "0.7","opacity":".70","filter": "alpha(opacity=70)","width":"100%","height":"100%",});
		
		$("#shareImg").css({"display":"block","position": "absolute","top":"0px","right":"0px;","background": "#000","z-index": "1002","-moz-opacity": "0.7","opacity":".70","filter": "alpha(opacity=70)","width":"100%","height":"100%"});
	}
}
/* 调用方法部分 */
    /* 答案事件 */
	$(".answer1").bind("click",function(){ 
		myFun.answer(0);
	});
	$(".answer2").bind("click",function(){ 
		myFun.answer(1);
	});
	/* ev是属于next按钮的 */
	$("#ev").bind("click",function(){ 
		myFun.ev();
	});
	/* 查看分数事件 */
	$("#fenshu").bind("click",function(){ 
		myFun.fenshu();
	});
	/* 分享事件 */
	$(".shareImg").bind("click",function(){
		myFun.fx();
	});
	
	$("#shareImg").bind("click",function(){
		$("#shareImg").css("display","none");
		$("#zhezhao").css("display","none");
	});
	var MyFen=myfun.fenshu();
  
});