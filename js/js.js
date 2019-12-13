
var sllTop;
var divsTop = 330;/*document.getElementsByClassName('content')[0].offsetTop; 获取当前对象到其上级层顶部的距离*/
window.onscroll = function(){
		var onBtn = document.getElementById('top-box');
		sllTop = document.documentElement.scrollTop||document.body.scrollTop;//如果浏览器不支持第一个事件则选择第二
		
		if(sllTop >= 40){
				$('.header-con').css('padding','0');
				$('.logo img').css({'width':'50','margin-top':'5px','margin-left':'10px'});
			}else{
				$('.header-con').css('padding','10px 0');
				$('.logo img').css({'width':'60','margin-top':'0px','margin-left':'0px'});
			}
			
		    if(sllTop>240){
		      $('#tbox2').css('display','block')
			    }else{
		      		$('#tbox2').css('display','none');
			    }
			if(sllTop>=divsTop){
				$('.left-list').css('position','fixed');
			}else{
				$('.left-list').css('position','');
			}
			tlistTop();
		// if(sllTop >= 500){
		// 	onBtn.style.display = "block";
		// }else{
		// 	onBtn.style.display = "none";
		// 	 };
/*		回到顶部按钮
		onBtn.onclick = function (){
			timer = setInterval(function(){
				var sllTop = document.documentElement.scrollTop||document.body.scrollTop;//如果浏览器不支持第一个事件则选择第二
				var ispeed = Math.floor(-sllTop / 6);// Math.floor()为取整函数
				document.documentElement.scrollTop = document.body.scrollTop = sllTop + ispeed;
				if(sllTop < 10){
					clearInterval(timer);//清除timer的定时器
					document.documentElement.scrollTop = document.body.scrollTop = 0
					}
				},30);
		}//结束1*/
	};
$(function(){
$(".taoba").click(function(event) { 
		      var i = $(this).index();
		      var id= $('.dingwei')[i];
		     $("html,body").animate({scrollTop: $(id).offset().top-80}, 800);
		   });


$(".list-text").click(function(event) { 
		      var i2 = $(this).index();
		      var id2= $('.sethome-con')[i2];
		     $("html,body").animate({scrollTop: $(id2).offset().top-80}, 800);
		   });
});

function tlistTop(){
	
	var sethome_conHeight;
	var tihsHeight;
	var list_text = document.getElementsByClassName('fa-caret-right');
	if(list_text.length === 0){
  	return false;  //如果匹配到0个元素，则将函数返回，不继续执行
	}
	arr1 = []; //存储元素的top距离页面顶部的高度
	for(var i=0; i<=4; i++){
		thisHeight = document.getElementsByClassName('sethome-con')[i].offsetTop+divsTop-80;
		arr1.push(thisHeight); //将循环获取到的值添加到数组里面
	}

	if(sllTop>=arr1[0]){
		list_text[0].style.opacity=1;
		list_text[1].style.opacity=0;
		list_text[2].style.opacity=0;
		list_text[3].style.opacity=0;
		list_text[4].style.opacity=0;
	}if(sllTop>=arr1[1]){
		list_text[0].style.opacity=0;
		list_text[1].style.opacity=1;
		list_text[2].style.opacity=0;
		list_text[3].style.opacity=0;
		list_text[4].style.opacity=0;
	}if(sllTop>=arr1[2]){
		list_text[0].style.opacity=0;
		list_text[1].style.opacity=0;
		list_text[2].style.opacity=1;
		list_text[3].style.opacity=0;
		list_text[4].style.opacity=0;
	}if(sllTop>=arr1[3]){
		list_text[0].style.opacity=0;
		list_text[1].style.opacity=0;
		list_text[2].style.opacity=0;
		list_text[3].style.opacity=1;
		list_text[4].style.opacity=0;
	}if(sllTop>=arr1[4]){
		list_text[0].style.opacity=0;
		list_text[1].style.opacity=0;
		list_text[2].style.opacity=0;
		list_text[3].style.opacity=0;
		list_text[4].style.opacity=1;
	}
}

$('#gotop').click(function(){ 
	$('body,html').animate({
		scrollTop: 0
	},
	800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
})


/*选择搜索引擎*/
$('.Select-box ul').hover(function(){
	$(this).css('height','auto')
	},function(){
		$(this).css('height','40px')
		});
$('.Select-box-2 ul').hover(function(){
	$(this).css('height','auto')
	},function(){
		$(this).css('height','46px')
		});
$('.Select-box li').click(function(){
	var _tihs = $(this).attr('class');
	var _html = $(this).html();
	if(_tihs == 'baidu_s'){
		_tihs = 'https://www.baidu.com/s';
		_name = 'wd';
		}if(_tihs == 'google_s'){
			 _tihs = 'https://www.google.com/search';
			 _name = 'q';
			}if(_tihs == 'bing_s'){
               _tihs = 'https://www.bing.com/search';
               _name = 'q';
              }if(_tihs == 'miji_s'){
					 _tihs = 'https://mijisou.com/';
					 _name = 'q';
					}
	$('.baidu form').attr('action',_tihs);
	$('.this_s').html(_html);
	$('#kw').attr('name',_name);
	$('.Select-box ul').css('height','40px')
	});
$('.Select-box-2 li').click(function(){
	var _tihs = $(this).attr('class');
	var _html = $(this).html();
	if(_tihs == 'baidu_s'){
		_tihs = 'https://www.baidu.com/s';
		_name = 'wd';
		}if(_tihs == 'google_s'){
			 _tihs = 'https://www.google.com/search';
			 _name = 'q';
			}if(_tihs == 'bing_s'){
               _tihs = 'https://www.bing.com/search';
               _name = 'q';
              }if(_tihs == 'miji_s'){
					 _tihs = 'https://mijisou.com/';
					 _name = 'q';
					}
	$('.baidu form').attr('action',_tihs);
	$('.this_s').html(_html);
	$('#kw-2').attr('name',_name);
	$('.Select-box-2 ul').css('height','48px')
	});

//清空输入框内容
$('.qingkong').click(function(){
		cls();
		$(this).css('display','none')
});
function cls(){ 
	var sum=0; 
	var t = document.getElementsByTagName("INPUT"); 
	for (var i=0; i <t.length;i++){ 
		if (t[i].type=='text'){ 
			++sum; 
			t[i].value="";//清空 
		} 
	}
}

//清空输入框按钮的显示和隐藏
function if_btn(){
	var btn_obj = document.getElementById("kw")||document.getElementById("kw-2");
	var cls_btn = document.getElementById("qingkong");
	var btn_obj_val;
	var times;
	//当元素获得焦点时
	if(btn_obj == ''||btn_obj==null){
  	return false;  //如果没有找到这个元素，则将函数返回，不继续执行
	}
	btn_obj.onfocus = function(){
		times = setInterval(function(){
			btn_obj_val = btn_obj.value;
			if(btn_obj_val != 0){
				cls_btn.style.display="block";
			}else{
				cls_btn.style.display="none";
			}
		},200);
	}
	//元素失去焦点时
	btn_obj.onblur = function(){
		clearInterval(times);
	}

}
if_btn();

//首页皮肤选择列表
$('.pifu-con').hover(function(){
	$('.iex-zuhti-list').fadeIn(250);
	$('.pifu-con .link-list-a .fa-angle-down').addClass('fa-rotate-180');
},function(){
	$('.iex-zuhti-list').fadeOut(0);
	$('.pifu-con .link-list-a .fa-angle-down').removeClass('fa-rotate-180');
});

//微信二维码显示和隐藏
$('.fw-dingwei a').hover(function(){
	$('.fw-weixing').fadeIn(250);
},function(){
	$('.fw-weixing').fadeOut(0);
});


//JS代码实现浏览器网页标题的动态切换.原文：https://zhangge.net/5032.html
/*
jQuery(document).ready(function() {
    function c() {
        document.title = document[a] ? "快看，有BUG！→《" + d + "》" : d
    }
    var a, b, d = document.title;
    "undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange");
    "undefined" == typeof document.addEventListener && "undefined" == typeof document[a] || document.addEventListener(b, c, !1)
});
*/



//菜单列表显示和隐藏
var _index = null;
/*var tab_class ='.yincang-tab li';
var list_class ='.nav-list ul';
$('yincang-tab li').click(function(){
	//获取当前元素的父元素
	var tihs_div = $(this).parent().arrt('class');
	//判断点击的是那块区域
	if(tihs_div == 'ruanjian-tab'){
		alert('fafsafs')
		}
	});*/

$('.muban li').click(function(){
	_index = $(this).index();
	$(this).addClass('shaw').siblings().removeClass('shaw');
	$('.muban-list ul').eq(_index).fadeIn(250).siblings().fadeOut(0);
	});
$('.ruanjian-tab li').click(function(){
	_index = $(this).index();
	$(this).addClass('shaw').siblings().removeClass('shaw');
	$('.ruanjian-list ul').eq(_index).fadeIn(250).siblings().fadeOut(0);
	});

// $('#no-link').click(function(){
// 	layer.msg('页面还在建设中，敬请期待');
// });

//tips提示弹框

$('.list-link-4').hover(function(){
	//获取当前元素的title内容，赋值给_thisTit
	var _thisTit = $(this).attr('data-title');
	//tips提示内容为_thisTit（即等于当前鼠标滑过元素的title内容），吸附对象为当前鼠标滑过对象
	if(_thisTit != ""){	//判断条件，当前元素的data-title不等于空才执行下面的代码
		layer.tips(_thisTit, this,{
		 tips: [1,'#1E9FFF'],
		 time: 99999,
		}) ; 
	}
	 
},function(){
	$('.layui-layer-tips').css('display','none')
});

// /*简历底部联系方式tips提示*/
// function _tips(){
// 	var tipsWidth = $('.tips-con').innerWidth();
// 	$('.tips-con').css('margin-left',- tipsWidth / 2)
// }
// _tips();








