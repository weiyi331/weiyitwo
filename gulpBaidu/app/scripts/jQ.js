/**
 * Created by tianshaoxing on 2017/9/22.
 */

$(function () {
    $('.many div>i').click(function () {
        $('.many .ultwo').toggle();
        $('.many #ulthree').hide()
    });

    $('.jiak span>i').click(function () {
        $('.shezhi').toggle();
    },function () {
        $('.shezhi').toggle();
    });

    $('.jiak span>i').click(function () {
        $('.many').toggle();
    });

    $('.shezhi nav .ying>i').click(function () {
        $('middle').toggle();
    });

    $('.shezhi nav .ying>i').click(function () {
        $('header div>span').css({
            "opacity":"1"
        })
    });

    $('header div>#chang').click(function () {
        $('middle').show();
    });

    $('header div>#chang').click(function () {
        $('header div>#chang').css({
            "opacity":"0"
        })
    });

    $('header div>#chang').click(function () {
        $('.shezhi').hide();
    });

    $('header div>#chang').click(function () {
        $('.many').show();
    });

    $('.shezhi nav .ying>a').click(function () {
        $('.wenhao').toggle();
    },function () {
        $('.wenhao').toggle();
    });

    $('.jiak span>i').click(function () {
        $('.wenhao').hide();
    });


    $('.many').hover(function () {
        $('.many span').show();
    },function () {
        $('.many span').hide();
    });

    $('.bianji').click(function () {
        $('.many ul').show();
    });

});

// 点击编辑显示变换SCC过程



$(function () {
    $('.bianji').click(function () {
        $('.many div>span>a').hide()
    });

    $('.bianji').click(function () {
        $('.many div>span>li').show()
    });

    $('.bianji').click(function () {
        $('.many .ultwo').hide()
    });

    $('.bianji').click(function () {
        $('.many #ulthree').hide()
    });



    $('.bianji').click(function () {

        $('.many .ulone').show().css({
            'margin-left':'22px',
            'color':'black'
        });

        $('.many .ulone>li').show().css({
            'border': '1px solid white',
            'width': '150px',
            'background': 'transparent',
            'cursor': 'move',
            'margin': '10px'
        });

        $('.many .ulone li>i').show().css({
            'width': '10%',
            'padding': '5px 14px',
            'color': 'darkgray',
            'display': 'inline-block'
        })
    });




    $('.many div>span>li').click(function () {

        $('.many .ultwo').show().css({
            'position': 'relative',
            'width': '100%',
            'height': '104px'
        });

        $('.many .ultwo>li').show().css({
            'width': '160px',
            'height': '34px',
            'background': 'transparent',
            'color': 'black',
            'font-size': '15px',
            'padding-top': '10px',
            'float': 'left'
        });

        $('.many .ultwo').show().css({
            'display':'none'
        })

    });


    $('.many div>i').click(function () {
        $('.many .ulone').show().css({
            'display':'none'
        });
    });


    $('.many div>span>li').click(function () {
        $('.many div>span>a').show()
    });

    $('.many div>span>li').click(function () {
        $('.many div>span>li').hide()
    });

    $('.many div>span>li').click(function () {
        $('.many .ultwo').show()
    });

    $('.many div>span>li').click(function () {
        $('.many .ulone').hide()
    });


    $('.fenlei').click(function () {
        $('.many .ultwo').hide();
    });


    $('.fenlei').click(function () {
        $('.many #ulthree').toggle();
    },function () {
        $('.many #ulthree').toggle();
    });


    $('.jiak span>.tuijian').click(function () {
       $('.many-two').show();
        $('.many').hide();
    });

    $('.jiak>i').click(function () {
        $('.many-two').hide();
        $('.many').show();
    });

});
//单例模式
$(document).ready(function () {
    var index={
        init:function(){
            var me=this;
            me.render();
            me.bind();
        },
        render:function(){
            var me=this;
           me.switchColor=$("#switchColor");
           me.colorItem=$("#colorItems .colorItem");
        },
        bind:function(){
            var me=this;
            me.switchColor.on('click',function () {
                $("#colorItems").css({"top":"0"});
            });
            me.colorItem.on('click',function () {
                document.body.style.background=$(this).css('background-color');
            });
            $(document).click(function(e){
                e = window.event || e;
                var obj = e.srcElement || e.target;
                if((!$(obj).is("#colorItems"))&&(!$(obj).is("#switchColor"))) {
                    $("#colorItems").css({"top":"-225px"});
                }
            });
            $(window).scroll(function () {
                var t=$(this).scrollTop();
                if (t>200){
                    $('.jiantou').fadeIn();
                }else {
                    $('.jiantou').fadeOut();
                }
            });
            window.onscroll=function(){
                console.log($(window).scrollTop());
                if($(window).scrollTop()>186){
                    $("#divBaidu").css({
                        "top":"0px"
                    });
                }else{
                    $("#divBaidu").css({
                        "top":"-55px"
                    });
                }
            };
        }
    }
    index.init();
})


