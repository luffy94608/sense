/**
 * Created by luffy on 16/5/28.
 */
$(document).ready(function () {
    var initPage = {
        /**
         * 获取url参数
         * @param name
         * @returns {null}
         */
         getParams :function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
         },
        /**
         * 初始化menu slide
         */
         initMenuSlide : function () {
            var opts = {
                menuItemSlideNode:$('.sn-header .menu .bg-slide'),
                menuItemNode : $('.sn-header .menu>div'),
                menuItemSlideNodeStr:'.sn-header .menu .bg-slide',
                menuItemNodeStr : '.sn-header .menu>div'
            };
            $(document).on('mouseover',opts.menuItemNodeStr,function () {
                var left = $(this).offset().left;
                $('.sub-menu,.sub-menu-group',$(this)).addClass('active');
                if($(this).html()){
                    opts.menuItemSlideNode.stop().animate({'left':left},'fast');
                }
            });
            $(document).on('mouseout',opts.menuItemNodeStr,function () {
                $('.sub-menu,.sub-menu-group',$(this)).removeClass('active');
                opts.menuItemSlideNode.stop().animate({'left':'-115px'},'fast');
            });
            $(document).on('mouseover','.sub-menu>li',function () {
                $('.sub-child-menu',$(this)).addClass('active');
            });
            $(document).on('mouseout','.sub-menu>li',function () {
                $('.sub-child-menu',$(this)).removeClass('active');
            });
        },
        /**
         * 初始化网站地图 右移动动画
         */
        initSiteMapAnimation:function () {
            var opts = {
                target:'.sn-sm-item .info,.snphc-link>a,.animate_hover_move',
                left:'15px'
            };
            $(document).on('mouseover',opts.target,function () {
                var $this = $(this);
                $this.stop().animate({'left':opts.left});
            });
            $(document).on('mouseout',opts.target,function () {
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
                targetCon:$('.sn-tab-content>div')
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
            var tab = initPage.getParams('tab');
            if(tab>0) {
                opts.target.removeClass('active');
                var obj = opts.target.eq(tab);
                var tmpId = obj.find('a').data('id');
                obj.addClass('active');
                opts.targetCon.removeClass('active');
                $(tmpId).addClass('active');
            }
        },
        /**
         * 初始化诚聘精英 列表伸缩效果
         */
        initRecruitLiEvent:function () {
            var opts = {
                target:$('.sn-wr-list>li'),
                targetCon:'.sn-wrl-desc'
            };
            opts.target.bind('click',function () {
                var $this = $(this);
                if($(opts.targetCon,$this).html()==0){
                    return false;
                }
                var siblingsLis  = $this.siblings();
                siblingsLis.removeClass('active');
                siblingsLis.find(opts.targetCon).slideUp();

                if($this.hasClass('active')){
                    $(opts.targetCon,$this).slideUp();
                    $this.removeClass('active');
                }else{
                    $(opts.targetCon,$this).slideDown();
                    $this.addClass('active');
                }
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
            $(document).on('click','.swiper-button-black',function (e) {
                e.stopPropagation();
                e.preventDefault();
            });
            var opts = {
                target:'.sn-partners .sm-p-list img',
                targetParent:'.sn-partners .sm-p-list li',
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
                    'http://eabax.com'
                ]
            };
            $(document).on('click',opts.targetParent,function () {
                var index = $(this).index();
                if(opts.hrefMap[index]){
                    window.location.href= opts.hrefMap[index];
                }
            });
            $(document).on('mouseover',opts.target,function () {
                var $this = $(this);
                var src = $this.attr('src');
                if(src.indexOf(opts.srcStr)!==-1 && src.indexOf(opts.replaceStr) ===-1){
                    var newSrc = src.replace(opts.srcStr,opts.replaceStr);
                    $this.attr('src',newSrc);
                }

            });
            $(document).on('mouseout',opts.target,function () {
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
            
        },
        /**
         * 返回顶部
         */
        initScrollTop :function () {
            var oTop = document.getElementById("sn_go_top");
            var screenw = document.documentElement.clientWidth || document.body.clientWidth;
            var screenh = document.documentElement.clientHeight || document.body.clientHeight;
            oTop.style.left = screenw - oTop.offsetWidth +"px";
            oTop.style.top = screenh - oTop.offsetHeight + "px";
            window.onscroll = function(){
                var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
            };
            oTop.onclick = function(){
                document.documentElement.scrollTop = document.body.scrollTop =0;
            };

        },
        /**
         * 修正 sn-phc-item 高度
         */
        initFixedSnPhcItemHeight :function () {
            $('.sn-phc-item .snphc-desc').height($('.sn-phc-item .sn-phcd-center').height());
        },
        /**
         * 初始化首页列表切换动画
         */
        initHomeSwitchBtn:function () {
            var status= false;
            $('.sn-phcm-list a').unbind().bind('click',function (e) {
                var othersLi = $(this).parents('li').siblings();
                var imgs = othersLi.find('img');
                if(imgs.length){
                    var srcStr = '.png';
                    var activeStr = '_active.png';
                    for (var j=0;j<imgs.length;j++){
                        var tmpObj = othersLi.find('img').eq(j);
                        var tmpImg = tmpObj.attr('src');
                        if(tmpImg.indexOf(activeStr)!==-1){
                             tmpImg = tmpImg.replace(activeStr,srcStr);
                            tmpObj.attr('src',tmpImg);
                        }
                    }
                    var currentImgObj = $(this).find('img');
                    var currentImg =currentImgObj.attr('src');
                    if(currentImg.indexOf(srcStr)!==-1 && currentImg.indexOf(activeStr) ===-1){
                        currentImg = currentImg.replace(srcStr,activeStr);
                        currentImgObj.attr('src',currentImg);
                    }
                }
                othersLi.removeClass('active');
                $(this).parents('li').removeClass('active').addClass('active');

                e.preventDefault();
                e.stopPropagation();
                if(!status){
                    var len=$('.sn_phc_menu').length;
                    if(len>0){
                        for (var i=0;i<len;i++){
                            var tmp=$('.sn_phc_menu').eq(i);
                            tmp.data('position',tmp.offset().top);
                        }
                    }
                    status= true;
                }
                var initObj = $('.sn_phc_menu').eq(0);
                var initId = '#'+initObj.attr('id');
                var srcId = initObj.data('id');
                if(!srcId){
                    srcId = initId;
                }
                var srcPTop = $(srcId).offset().top;
                var id = $(this).attr('href');
                var targetTop = $(id).offset().top;
                var srcPosition= $(srcId).data('position');
                var targetPosition= $(id).data('position');

                var diffSHeight = targetTop - srcPosition;
                var diffTHeight = srcPTop - targetPosition;
                initObj.data('id',id);
                move(srcId)
                    .set('opacity', '0.5')
                    .y(diffSHeight)
                    .end(function () {
                        move(srcId)
                            .set('opacity', '1')
                            .duration(1000)
                            .end();
                    });
                move(id)
                    .set('opacity', '0.5')
                    .y(diffTHeight)
                    .end(function () {
                        move(id)
                            .set('opacity', '1')
                            .duration(1000)
                            .end();
                    });

            });

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
                    locks:'locks.html',
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
                    try_and_buy:'lock_jr5_std.html?tab=2',
                    //解决方案
                    solution:'solution.html',
                    game_industry:'su_game.html',
                    manage_industry:'su_manage.html',
                    architecture_industry:'su_art.html',
                    edu_and_doc:'su_edu.html',
                    common_industry:'su_common.html',
                    //支持
                    support:'',
                    su_platform:'su_platform.html',
                    su_download:'download.html',
                    download_5:'download_5.html',
                    download_4s:'download_4s.html',
                    download_1:'download_1.html',
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
                    area:'http://www.senselock.com/en/index.php'
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
        /**
         * 浏览器判断
         */
        initBrowserVerision : function () {
            var browser=navigator.appName;
            var b_version=navigator.appVersion;
            var version=b_version.split(";");
            if(version.length<2){
                return false;
            }
            var trim_Version=version[1].replace(/[ ]/g,"");
            if(browser=="Microsoft Internet Explorer")
            {
                if(trim_Version=="MSIE6.0"||trim_Version=="MSIE7.0"||trim_Version=="MSIE8.0"||trim_Version=="MSIE9.0")
                {
                    alert('您好，您的浏览器版本较低，如显示不正常，请升级浏览器到IE10以上.')
                }
            }
        },

        /**
         *首页menu 浮动
         */
        initHomeFixed:function () {
          var url = window.location.href;
            if(url.indexOf('index.html')===-1){
                $('.sn-header').css('position','relative');
            }else{
                $('.sn-header').css('position','fixed');
            }
        },
        /**
         * 表格颜色间隔
         */
        initTableGapColor: function () {
            $(".sn-ld-params tr:nth-child(odd)").addClass("odd");
        },
        run : function () {
            // initPage.initBrowserVerision();
            initPage.initMenuSlide();
            initPage.initSwiperEvent();
            initPage.initPartnersAnimation();
            initPage.initSiteMapAnimation();
            initPage.initLocationUrlEvent();
            initPage.initFixedSnPhcItemHeight();
            initPage.initHomeSwitchBtn();
            initPage.initQQ();
            initPage.initTabChangeEvent();
            initPage.initRecruitLiEvent();
            initPage.initTableGapColor();
            initPage.initHomeFixed();
            setTimeout(function () {
                initPage.initScrollTop();
            },300)
        }
    };

    initPage.run();

});