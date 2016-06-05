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
         * 初始化tab切换
         */
        initTabChangeEvent:function () {
            var opts = {
                target:$('.sn-nav-tabs>li'),
                targetCon:$('.sn-tab-content>div'),
            };
            opts.target.find('a').click(function () {
                var $this = $(this);
                var id=$this.data('id');
                if(id){
                    opts.target.removeClass('active');
                    $this.parents('li').addClass('active');
                    opts.targetCon.removeClass('active');
                    $(id).addClass('active');
                }
            });
        },
        /**
         * 初始化诚聘精英 列表伸缩效果
         */
        initRecruitLiEvent:function () {
            var opts = {
                target:$('.sn-wr-list>li'),
                targetCon:'.sn-wrl-desc',
            };
            opts.target.click(function () {
                var $this = $(this);
                if($(opts.targetCon,$this).html()==0){
                    return false;
                }
                opts.target.removeClass('active');
                $this.siblings().find(opts.targetCon).slideUp();
                $(opts.targetCon,$this).slideDown();
                $this.addClass('active');
            });

        },
        /**
         * 初始化企业营销qq
         */
        initQQ : function () {
            setTimeout(function(){
                BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4006506701, selector: 'BizQQWPA3'});
                BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4006506701, selector: 'BizQQWPA2'});
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
                if(src.indexOf(opts.srcStr)!==-1 && src.indexOf(opts.replaceStr) ===-1){
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
                    platform:'',
                    about_platform:'platform_intro.html',
                    cloud_lock:'cloud_lock.html',
                    ss_service:'ss_service.html',
                    in_platform:'http://developer.senseshield.com/auth/',
                    //专业工具
                    tools:'',
                    vp_tools:'vp_tools.html',
                    vp_doc_download:'http://115.29.189.225/Files/Virbox%20Protector-Doc.zip',
                    auth_tools:'auth_tools.html',
                    user_tools:'user_tools.html',
                    //加密锁
                    locks:'',
                    picked_5:'lock_jr5_std.html',//标准版
                    picked_5_download:'http://115.29.189.225/Files/V5-Setup.zip',//标准版
                    picked_5_bt:'lock_jr5_bt.html',//蓝牙版
                    picked_5_bt_download:'http://115.29.189.225/Files/V5-SDK.zip',//蓝牙版
                    picked_5_usb:'lock_jr5_usb.html',//U盘版
                    picked_5_usb_download:'http://115.29.189.225/Files/V5-Setup.zip',//U盘版
                    picked_4s:'lock_jr4s_std.html',
                    picked_4s_spt:'lock_jr4s_spt.html',
                    picked_4s_net:'lock_jr4s_net.html',
                    picked_4s_clock:'lock_jr4s_clock.html',
                    picked_4s_sdk_download:'http://115.29.189.225/Files/V4-v3.4-Res.zip',
                    picked_4s_doc_download:'http://115.29.189.225/Files/V4-v3.4-Doc.zip',
                    picked_4s_net_sdk_download:'http://115.29.189.225/Files/V4Net-v3.4-Res.zip',
                    picked_4s_net_doc_download:'http://115.29.189.225/Files/V4Net-v3.4-Doc.zip',
                    picked_4s_clock_doc_download:'http://115.29.189.225/Files/V4-v3.4-Doc.zip',
                    picked_4s_clock_sdk_download:'http://115.29.189.225/Files/V4-v3.4-Res.zip',
                    picked_1:'lock_lr1_std.html',
                    picked_1_clock_sdk_download:'http://115.29.189.225/Files/V1-v1.4-Res.zip',
                    picked_1_clock_doc_download:'http://115.29.189.225/Files/V1-v1.4-Doc.zip',
                    try_and_buy:'try_and_buy.html',
                    //解决方案
                    solution:'solution.html',
                    game_industry:'su_game.html',
                    manage_industry:'su_manage.html',
                    architecture_industry:'su_art.html',
                    edu_and_doc:'su_edu.html',
                    common_industry:'su_common.html',
                    //支持
                    support:'',
                    su_download:'download.html',
                    su_problem:'problem.html',
                    su_feedback:'feedback.html',
                    su_contact:'contact.html',
                    //我们
                    we:'',
                    we_desc:'company_intro.html',
                    we_news:'news.html',
                    news_detail:'news_detail.html',
                    we_route:'we_route.html',
                    we_intellectual:'we_intellectual.html',
                    we_property:'we_property.html',
                    we_recruit:'we_recurit.html',
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
            initPage.initTabChangeEvent();
            initPage.initRecruitLiEvent();
        }
    };

    setTimeout(function () {
        initPage.run();
    },1000);
});