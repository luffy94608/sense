/**
 * Created by luffy on 16/5/28.
 */
$(document).ready(function () {
    var initPage = {
        /**
         * 初始化menu slide
         */
         initMenuSlide : function () {
            var opts = {
                menuItemSlideNode:$('.sn-header .menu .bg-slide'),
                menuItemNode : $('.sn-header .menu>div')
            };
            opts.menuItemNode.mouseover(function () {
                var left = $(this).offset().left;
                $('.sub-menu,.sub-menu-group',$(this)).addClass('active');
                if($(this).html()){
                    opts.menuItemSlideNode.stop().animate({'left':left},'fast');
                }
            });
            opts.menuItemNode.mouseout(function () {
                $('.sub-menu,.sub-menu-group',$(this)).removeClass('active');
                opts.menuItemSlideNode.stop().animate({'left':'-115px'},'fast');
            });
        },
        /**
         * 初始化网站地图 右移动动画
         */
        initSiteMapAnimation:function () {
            var opts = {
                target:$('.sn-sm-item .info,.snphc-link>a,.animate_hover_move'),
                left:'15px',
            };
            opts.target.mouseover(function () {
                var $this = $(this);
                $this.stop().animate({'left':opts.left});
            });
            opts.target.mouseout(function () {
                var $this = $(this);
                $this.stop().animate({'left':'0'});
            });
        },
        /**
         * 初始化企业营销qq
         */
        initQQ : function () {
            // $(document).on('click','.open_qq',function () {
            $('.open_qq').click(function () {
                console.log(111);
                $("#BizQQWPA").trigger("click");
            });
            setTimeout(function(){
                BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4006506701, selector: 'BizQQWPA'});
            },3000);
        },
        /**
         * 合作伙伴hover
         */
        initPartnersAnimation:function () {
            var opts = {
                target:$('.sn-partners .sm-p-list img'),
                srcStr:'.png',
                replaceStr:'_active.png',
                hrefMap:[
                    'http://www.founder.com.cn/zh-cn/',
                    'http://www.kingdee.gs.cn',
                    'http://www.yonyou.com',
                    'http://www.siemens.com/entry/cn/zh/',
                    'http://www.taiji.com.cn',
                    'http://www.chanjet.com',
                    'http://www.sony.com.cn',
                    'http://www.glodon.com',
                    'http://www.iflytek.com',
                    'http://www.hikvision.com/cn/index.html',
                    'http://www.hollysys.com',
                    'http://www.hikvision.com/cn/index.html',
                    'http://eabax.com',
                ]
            };
            opts.target.parents('li').unbind().bind('click',function () {
                var index = $(this).index();
                if(opts.hrefMap[index]){
                    window.location.href= opts.hrefMap[index];
                }
            });
            opts.target.mouseover(function () {
                var $this = $(this);
                var src = $this.attr('src');
                if(src.indexOf(opts.srcStr)!==-1){
                    var newSrc = src.replace(opts.srcStr,opts.replaceStr);
                    $this.attr('src',newSrc);
                }

            });
            opts.target.mouseout(function () {
                var $this = $(this);
                var src = $this.attr('src');
                if(src.indexOf(opts.replaceStr)!==-1){
                    var newSrc = src.replace(opts.replaceStr,opts.srcStr);
                    $this.attr('src',newSrc);
                }
            });
        },
        /**
         * 初始化轮播 swiper
         */
        initSwiperEvent : function () {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 3000,//可选选项，自动滑动
                loop : true,
                effect : 'fade',
                pagination: '.swiper-pagination',
                // paginationClickable: true,
                spaceBetween: 30,
                fade: {
                    crossFade: true,
                },
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',

            });
        },
        /**
         * 返回顶部
         */
        initScrollTop :function () {
            var opts = {
                getScrollTop: function () {
                    return document.documentElement.scrollTop;
                },
                setScrollTop: function (value) {
                    document.documentElement.scrollTop = value;
                },
            };
            // JavaScript Document
            $('#sn_go_top').unbind().bind('click',function () {
                var goTop=setInterval(function () {
                    opts.setScrollTop(opts.getScrollTop()/1.1);
                    if(opts.getScrollTop()<1){
                        clearInterval(goTop);
                    }
                },10);

            });
        },
        /**
         * 修正 sn-phc-item 高度
         */
        initFixedSnPhcItemHeight :function () {
            $('.sn-phc-item .snphc-desc').height($('.sn-phc-item .sn-phcd-center').height());
        },
        /**
         * 网站跳转``
         */
        initLocationUrlEvent :function () {
            var opts = {
                target:'.js_location_url',
                urlMap:{
                    index:'index.html',
                    //产品
                    products:'',
                    //云授权平台
                    platform:'platform.html',
                    about_platform:'platform_intro.html',
                    cloud_lock:'',
                    ss_service:'',
                    in_platform:'http://developer.senseshield.com/auth/',
                    //专业工具
                    tools:'',
                    vp_tools:'vp_tools.html',
                    vp_doc_download:'files/Virbox Protector-Doc.zip',
                    auth_tools:'',
                    user_tools:'',
                    //加密锁
                    locks:'',
                    picked_5:'',
                    picked_4s:'',
                    picked_1:'',
                    try_and_buy:'',
                    //解决方案
                    solution:'',
                    game_industry:'',
                    manage_industry:'',
                    architecture_industry:'',
                    edu_and_doc:'',
                    common_industry:'',
                    //支持
                    support:'',
                    su_download:'',
                    su_problem:'',
                    su_feedback:'',
                    su_contact:'',
                    //我们
                    we:'',
                    we_desc:'',
                    we_news:'',
                    we_route:'',
                    we_intellectual:'',
                    we_property:'',
                    we_recruit:'',
                    //登录
                    login:'http://developer.senseshield.com/auth/',
                    register:'http://developer.senseshield.com/auth/register.jsp',
                    area:'http://www.senselock.com/en/index.php',
                }
            };
            // JavaScript Document
            $(document).on('click',opts.target,function () {
                var type = $(this).data('url');
                var url = opts.urlMap[type];
                if(url){
                    window.location.href=url;
                }
            });
        },

        run : function () {
            initPage.initMenuSlide();
            initPage.initSwiperEvent();
            initPage.initPartnersAnimation();
            initPage.initSiteMapAnimation();
            initPage.initScrollTop();
            initPage.initLocationUrlEvent();
            initPage.initFixedSnPhcItemHeight();
            initPage.initQQ();
        }
    };

    initPage.run();

});