$(window).ready(function(){
var i=0;
var dui=0;
var myFun={
	allQuestions:[
		{question:"1.奇葩的“葩”字与下面哪个字读音相同：", choices:["疤","拔","啪","爬"]},
		{question:"2.每年高考为什么要定在6月的7、8日: ", choices:["678，数字比较顺","678与“录取吧”谐音","7月太热影响考试","这个要问教育部"]},
		{question:"3.高考作文明确规定不能使用下面哪种文体: ", choices:["说明文","文言文","冥文","诗歌"]},
		{question:"4.以下哪些可以带着进考场：", choices:["手机","纸条","老师","望远镜"]},
		{question:"5.截至去年，高考37年来，英语听力中男人邀请女人外出44次，女人答应____次；女人邀请男人外出17次，男人答应___次：", choices:["0/0","0/17","44/0","44/17"]},
		{question:"6.以下哪位影视明星当年高考英语只考了27分：", choices:["杨幂","黄磊","李冰冰","范冰冰"]},
		{question:"7.以下哪位企业家当年高考数学考过奇葩的1分：", choices:["马云","雷军","李彦宏","马化腾"]},
		{question:"8.以下哪位名人参加的高考次数最多：", choices:["汤唯","马云","俞敏洪","李修平"]},
		{question:"9.以下哪个人通过高考读上了大学：", choices:["王宝强","孟非","韩寒","郭敬明"]},
		{question:"10.高考选择题必须使用以下哪种铅笔涂写答案：", choices:["2B","SB","HB","NB"]},
		{question:"11.以下哪种情况可能不会得零分: ", choices:["证明题，答案写“不管你信不信，反正我信了”","填空题，答案写“这个题目不会做，望老师手下留情”","判断题，既打“√”又打“×”","作文题，不知所云随便写上800字"]},
		{question:"12.在考场上没有头绪应该怎么办:", choices:["向邻桌求助","请老师透露答案","拿出准备好的纸条抄","冷静一下找回头绪"]},
		{question:"13.2013高考，出现了以下哪种奇葩行为: ", choices:["老师发试卷时某男生四肢颤抖连喊要见妈","某男生后脑勺剃“GK必胜”进考场","某女生高考两天连丢两次准考证","以上三种都真实出现"]},
		{question:"14.以下哪句不属于高考标语:", choices:["提高一分，干掉千人","进清华，与主席总理称兄道弟","打出来！堕出来！流出来！就是不能生下来！","扛得住给我扛；扛不住，给我死扛"]},
		{question:"15.高考作文字数不少于___字，最终能转发___次；一条微博的字数限制是___字，老师评论___条。:", choices:["600/0/140/1","600/1/120/0","800/0/120/1","800/0/140/1"]},
		{question:"16.玉皇大帝和如来哪个大:", choices:["如来","玉皇大帝","太上老君","观音菩萨"]},
		{question:"17.老子和孔子打架，谁赢:", choices:["老子","平手","孔子","猜不到"]},
		{question:"18.以下哪对冤家成了基友:", choices:["阿里巴巴和腾讯","百度和谷歌","360和QQ","赶集和58"]},
		{question:"19.下列名字中体现了中国主流传统文化思想的是:", choices:["干露露","郭美美","张玉凤","任贤齐"]},
		{question:"20.最常用来与“高端大气上档次”相配的是:", choices:["低调奢华有内涵","低端粗俗没文化","忧郁深沉无所谓","狂拽帅气吊炸天"]},
		{question:"21.复旦大学最近深陷什么门:", choices:["学位门","抄袭门","南大门","北大门"]},
		{question:"22.在历史上谁的轻功最强:", choices:["小李飞刀","赵云","曹操","令狐冲"]},
		{question:"23.从历史上草船借箭的经典故事我们可以学到最重要的结论是什么:", choices:["诸葛亮很聪明","诸葛亮上知天文下知地理","人至贱（箭）则无敌","草船借箭打败了周瑜计谋"]},
		{question:"24.李小鹏与女儿奥莉参加了以下哪个节目:", choices:["爸爸去哪儿了","爸爸去哪里了","爸爸回来了","爸爸出去了"]},
		{question:"25.以下哪条是李晨范冰冰亲自发的微博:", choices:["我们","冰冰有李","冰临晨下","有李有范"]},
		{question:"26.户籍档案找不到了，房产过户如何向地税局证明“你妈是你妈”:", choices:["到派出所开证明","到社区或单位开证明","做亲子鉴定","向媒体和总理反映情况"]},
		{question:"27.卖手机的老罗是谁:", choices:["罗振宇","罗永浩","罗志祥","罗大佑"]},
		{question:"28.微信这么牛逼的产品到底是谁研发出来的:", choices:["李小龙","张小龙","马化腾","马明哲"]},
		{question:"29.本考题到底是哪个奇葩微信公众号出的:", choices:["诗词世界","图个好看","内涵小笑话","我不是奇葩"]},
		{question:"30.考完本奇葩考题你将作何选择:", choices:["将成绩分享到朋友圈","关注微信“我不是奇葩”","再也不想好好活了","以上都选择"]}
	],
	alljieda:[
		{jieda:"啪"},
		{jieda:"这个要问教育部"},
		{jieda:"诗歌"},
		{jieda:"老师"},
		{jieda:"0/17"},
		{jieda:"马云"},
		{jieda:"李修平（解析：汤唯三次、马云三次，俞敏洪三次、李修平四次）"},
		{jieda:"郭敬明"},
		{jieda:"2B"},
		{jieda:"作文题，不知所云随便写上800字"},
		{jieda:"冷静一下找回头绪"},
		{jieda:"以上三种都真实出现"},
		{jieda:"打出来！堕出来！流出来！就是不能生下来！"},
		{jieda:"800/0/140/1"},
		{jieda:"因为玉帝斗不过孙悟空，如来打赢了孙悟空。"},
		{jieda:"孔子提倡孝道，不敢打老子"},
		{jieda:"赶集和58"},
		{jieda:"任贤齐"},
		{jieda:"低调奢华有内涵"},
		{jieda:"抄袭门"},
		{jieda:"曹操（说曹操曹操就到！！）"},
		{jieda:"人至贱（箭）则无敌"},
		{jieda:"爸爸回来了"},
		{jieda:"我们"},
		{jieda:"向媒体和总理反映情况"},
		{jieda:"罗永浩"},
		{jieda:"张小龙"},
		{jieda:"我不是奇葩"},
		{jieda:"以上都选择"}
	],
	answer:function(daan){
		if(daan==myFun.alljieda[i].jieda){
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
		i=-1;
		i++;
		switch(i){
		case 29:
		$("#ev").text("看看你有多奇葩")
		break;
	    case 30:
		$("#btn").css("display","none");
        myFun.fenshu();
		break;
		}

		var timu=$("#timu").text(myFun.allQuestions[i].question);
		var li1=$(".answer1").text(myFun.allQuestions[i].choices[0]);
		var li2=$(".answer2").text(myFun.allQuestions[i].choices[1]);
		var li2=$(".answer3").text(myFun.allQuestions[i].choices[2]);
		var li2=$(".answer4").text(myFun.allQuestions[i].choices[3]);
		$("#jiedu").css("display","none");
		$("#mobai").css("display","none");
		$("#xianqi").css("display","none");
		$("#btn").css("display","none");
		$(".footer").css("display","block");
		$(".tishu").html("<p><span>"+(i+1)+"</span>/30</p>");

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
		$("#zhezhao").css({"display":"block","position": "fixed","background": "#000","z-index": "1001","-moz-opacity": "0.7","opacity":".70","filter": "alpha(opacity=70)","width":"100%","height":"100%",});
		
		$("#shareImg").css({"display":"block","position": "absolute","top":"0px","right":"0px;","background": "#000","z-index": "1002","-moz-opacity": "0.7","opacity":".70","filter": "alpha(opacity=70)","width":"100%","height":"100%"});
		tt();
	}
}
/* 调用方法部分 */
    /* 答案事件 */
	$(".answer1").bind("click",function(){
	    var dn=$(".answer1").text(); 
		myFun.answer(dn);
	});
	$(".answer2").bind("click",function(){ 
		var dn=$(".answer2").text();
		myFun.answer(dn);
	});
	$(".answer3").bind("click",function(){ 
		var dn=$(".answer3").text();
		myFun.answer(dn);
	});
	$(".answer4").bind("click",function(){ 
		var dn=$(".answer4").text();
		myFun.answer(dn);
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
	$(".shine").click(function(){
		$("#container").css("display","none");
		$(".container").css("display","block");
		myFun.ev();
	})
  
});
/*	var MyFen=myfun.fenshu();*/
// 分享随机标题函数

function tt(){
	  var fs=myFun.fenshu();
   	  var t=null;
	  if(fs<50){
		t="史上最奇葩高考题，我居然“葩商”不足！救救我吧！";
	  }else if(100>fs>=50){
        t="史上最奇葩高考题，我原来“葩商”不错！你也来试试吧！";
	  }else if(fs>=100){
        t="史上最奇葩高考题，我竟然“葩商”十足！也是醉了！";
	  } 
	  return t;
}