Modernizr.load({
  test: Modernizr.input.placeholder,
  nope: 'js/placeholder.js'
});

/* Entry point into the animation 'loop'. Once the the animation is complete
           i.e. the ball is at the top, the animate call the callback function animDown */           
        

    


$(document).ready(function(){

    if(!Modernizr.cssanimations) {
            // $('#arrow').animate({ paddingTop: 15 }, {duration: 1000, easing: 'easeOutBounce'});
            function animUp() {
            $("#arrow").animate({ paddingTop: "0px" }, "slow", "swing", animDown);
        }
        function animDown() {
            $("#arrow").animate({ paddingTop: "15px" }, "slow", "swing", animUp);
        }
            animUp();


}


    mediaCheck({
        media: '(max-width: 640px)',
        entry: function() {
            $("#login-wrapper, #search-container").addClass("mobile");
            resizeMargin();
            $(window).resize(resizeMargin);
            initContact();
        },
        exit: function() {
            $("#login-wrapper, #search-container").removeClass("mobile");
            resizeMargin();
            $(window).resize(resizeMargin);
            initContact();
        }
    });

    mediaCheck({
        media: '(max-width: 768px)',
        entry: function() {
            CloneBasicInfo();
            
            // resizeMargin();
            // initContact();
            
            // WindowsWidth();
            // $(window).resize(WindowsWidth);
            
            $(window).load(ResetTags);
            ResetTags();
            $(window).resize(ResetTags);
            // $("#datapicker").datepicker("destroy");
            // $("#datapicker").prop('type', 'date');
            $(".nav-btn").click(function(e){
                e.preventDefault();
                $("#days-nav").show();
            });

            $('.nav-btn').bind('touchstart', function(e) {
               e.preventDefault();
                $("#days-nav").show();
            });

            $("#days-nav li a").click(function(e){
                e.preventDefault();
                $("#days-nav").hide();
            });
            $('#days-nav li a').bind('touchstart', function(e) {
               e.preventDefault();
                $("#days-nav").hide();
            });
        },
        exit: function() {
            RemoveClone();
            // resizeMargin();
            // initContact();
            $(window).load(TagsCenter);
            TagsCenter();
            $(window).resize(TagsCenter);
            // $( "#datepicker" ).datepicker();
        }
    });

    mediaCheck({
        media: 'only screen and (min-width: 768px) and (max-width: 1024px)',
        entry: function() {
            RemoveClone();
        },
        exit: function() {
        }
    });
    mediaCheck({
        media: '(min-width: 1024px)',
        entry: function() {
            // updateResize();
            // tagsResize();
            // $(window).resize(updateResize);
            // $(window).resize(tagsResize);
            // $(window).load(TagsCenter);
            WindowsHeightCont();
            eventFriends();
            LineUpNano();
            $(window).resize(LineUpNano);
            $(window).resize(eventFriends);
            // $(window).load(WindowsHeightCont);
            $(window).resize(WindowsHeightCont);
            $(".event-container, .assign-friends, .line-up").addClass("nano");
            $(".nano").nanoScroller();
            AddEventCenter();
            $(window).resize(AddEventCenter);
            
        },
        exit: function() {
            // $(".tags-wrapper").css('margin', '0px');
            // $(".tags-wrapper").css('width','100%');
            // $(".tags-wrapper").css('left', '0px');
            $(".nano").nanoScroller({ destroy: true });
            $(".event-container, .assign-friends, .line-up").removeClass("nano");
        }
    });
    
    

    function WindowsHeight() {
        wH = $(window).height() - 50;
        $(".event-container").height(wH);
    }

    function WindowsHeightCont(){
        wH = $(window).height();
        $(".event-container").height(wH);
    }

    // WindowsHeight();
    // $(window).resize(WindowsHeight);

    
    $('.search_event_input').keyup(function() {
        if ($.trim(this.value).length) {
            $("#search-wrapper").find("button").addClass("hover");
        } else $("#search-wrapper").find("button").removeClass("hover");
    });
    $('.register-area input').keyup(function() {
        var empty = false;
        $('.register-area input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });
        if (empty) {
            $('button').removeClass("active");
        } else {
            $('button').addClass("active");
        }
    });
    $("#log-in").click(function(e){
        e.preventDefault();
        $("#login-wrapper").fadeIn();
    });
    $("#login-wrapper").find(".close").click(function(e){
        e.preventDefault();
        $(this).parent().fadeOut();
    });
    $("#arrow").click(function() {
        var removeSplash = function () {
            $("#splash").remove();
        };
        $("html, body").animate({ 
            scrollTop: $("#splash").height()
        }, { 
            duration: 800, 
            easing: 'easeOutCubic',
            complete: removeSplash
        });
    });



    // $(".search_event_button").click(function() {
    //     // $("#events-list").css('visibility', 'visible');
    //     var removeSplash = function () {
    //         $("#splash").remove();
            
    //     };
    //     $("html, body").animate({ 
    //         scrollTop: $("#splash").height()
    //     }, { 
    //         duration: 800, 
    //         easing: 'easeOutCubic',
    //         complete: removeSplash
    //     });
    // });


    // $("#arrow").on("click", function(e) {
    //     e.preventDefault();

    //     var removeSplash = function () {
    //         // $("#events-list #sidebar, #events-list #tags").css('visibility', 'visible');
    //         $("#splash").remove();
    //         // $("#search-container").css('top', '0');
    //     };

    //     $("#splash").animate({ 
    //         height: 0
    //     }, { 
    //         duration: 450, 
    //         easing: 'jswing',
    //         complete: removeSplash
    //     });
        
    // });


    //     $(".search_event_button").on("click", function(e) {
    //     e.preventDefault();

    //     var doSth = function () {
    //         $("#events-list #sidebar, #events-list #tags").css('visibility', 'visible');
    //         $("body").css('overflow', 'auto');
    //     };

    //     $("#search-container").animate({ 
    //         height: 0
    //     }, { 
    //         duration: 450, 
    //         easing: 'jswing',
    //         complete: doSth
    //     });
        
    // });

    // $(".back-text").on("click", function(e) {
    //     e.preventDefault();
    //     $("body").css('overflow', 'hidden');
    //     $("#events-list #sidebar, #events-list #tags").css('visibility', 'hidden');
    //     $("#search-container").animate({ 
    //         height: $(window).height()
    //     }, { 
    //         duration: 450, 
    //         easing: 'jswing'
    //     });
        
    // });


    $(".search_event_option").click(function() {
        $("#settings-wrapper").fadeToggle("normal", "linear");
    });
    $("#settings .close").click(function() {
        $("#settings-wrapper").fadeOut("normal", "linear");
    });

    // Mobile - zmaknij ustawienia wyszukiwania po wybraniu opcji
    $('input:radio').change(function(){
        // Jezeli jest zaznaczony i nie jest rowny 'all'
        if ($(this).is(':checked')) {
            // Close settings
            $("#settings-wrapper").delay(400).fadeOut();
        }
    });


    function initContact() {
        if ($("#login-wrapper").hasClass('mobile')) {

            //When page loads...
            $(".tab_content").hide(); //Hide all content
            $("ul.tabs li:first").addClass("active").show(); //Activate first tab
            $(".tab_content:first").show(); //Show first tab content

            //On Click Event
            $("ul.tabs li").click(function() {

                $("ul.tabs li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".tab_content").hide(); //Hide all tab content

                var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeTab).fadeIn(); //Fade in the active ID content
                return false;
            });
        } else {
            $(".tab_content").show();
        }
    }
    function resizeMargin() {
        // Desktop
        if (!$('#search-container').hasClass('mobile')) { 
            var WindowsH = $(window).height()/2;
            $("#search-wrapper").css('margin-top', (WindowsH - 51) + "px");
        // Mobile
        } else {
            $("#search-wrapper").css('margin-top', '51px');
        }
    }
    function updateResize() {
        var SWidth = $("#sidebar").width();
        $("#sidebar").find(".sidebar-wrapper").css('width', SWidth + "px");
    }
    function tagsResize() {
        var TWidth = $("#tags").width();
        var SWidth = $("#sidebar").width();
        $(".tags-wrapper").css('width', TWidth + "px");
        $(".tags-wrapper").css('left', SWidth + "px");
        var tagsWrapper = $(".tags-wrapper"); 
        var tagsHeight = $(tagsWrapper).height() / 2;
        $(tagsWrapper).css('margin-top', -(tagsHeight) + "px");
    }
    function TagsCenter() {
        var TWidth = $("#tags .tags-container").height() /2;
        var WWidth = $(window).height() /2;
        var res = WWidth - TWidth;
        // var SWidth = $("#sidebar").width();
        // $(".tags-wrapper").css('width', TWidth + "px");
        // $(".tags-wrapper").css('left', SWidth + "px");
        // var tagsWrapper = $(".tags-wrapper"); 
        // var tagsHeight = $(tagsWrapper).height() / 2;
        // $(tagsWrapper).css('margin-top', -(tagsHeight) + "px");
        $('#tags .tags-container').css('margin-top', res + "px");
        var TagsW = $('#tags').outerWidth();
        $('#tags .tags-wrapper').css('width', TagsW + "px");
        
    }
    function ResetTags(){
        $('#tags .tags-container').css('margin-top', "0px");
    }

    
    function NavMobile() {
        $("#mobile ul").on("click", ".init", function(e) {
            e.preventDefault();
            $(this).closest("#mobile ul").children('li.list').toggle();
        });

        var allOptions = $("ul").children('li.list');
        $("#mobile ul").on("click", "li.list", function(e) {
            e.preventDefault();
            // allOptions.children('a').removeClass('active');
            // $(this).children('a').addClass('active');
            allOptions.removeClass('active');
            $(this).addClass('active');
            $("#mobile ul").children('.init').html($(this).html());
            allOptions.toggle();
        });
    }

    NavMobile();

    function AddFav(){
        var FavIcon = $(".favourite-icon");
        $(".event-item").find(".event-link").each(function(){
            $(this).click(function(e) {
                e.preventDefault();
                if ( $(this).find(FavIcon).hasClass("active") ) {
                    $(this).find(FavIcon).removeClass("active");   
                    $(this).find(".cover-hover-background").removeClass("active");
                } else {
                    $(this).find(FavIcon).addClass("active");
                    $(this).find(".cover-hover-background").addClass("active");
                }
            });
        }); 
    }

    AddFav();
    
    


    // if ( !$("#events-list").hasClass("mobile") ) {

    // }
    

    $('[data-scroll-index=0]').find(".tags-wrapper").clone().fadeIn().appendTo("#tags");
    $('[data-scroll-index=2]').find(".tags-wrapper .day").css('font-size', '54px');
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 800,
        activeClass: 'active',
        onPageChange: function(pageIndex) {

            

            




            $("#tags").children().fadeOut().remove();
            $('[data-scroll-index=' + pageIndex + ']').find(".tags-wrapper").clone().fadeIn().appendTo("#tags");

            $(".close-tags").click(function(e){
                e.preventDefault();
                $("#tags").fadeOut();
            });

            mediaCheck({
                media: '(max-width: 768px)',
                entry: function() {
                    // $(tagsWrapper).css('background', pageColor);
                    // $("#days-nav li.init").html($("#days-nav li.list").find('[data-scroll-nav=' + pageIndex + ']').html());
                    $(".nav-btn").html($("#days-nav li").find('[data-scroll-nav=' + pageIndex + ']').html());
                    $(window).load(ResetTags);
                    ResetTags();
                    $(window).resize(ResetTags);
                    $(".nav-btn").click(function(e){
                e.preventDefault();
                $("#days-nav").show();
            });

            $('.nav-btn').bind('touchstart', function(e) {
               e.preventDefault();
                $("#days-nav").show();
            });

            $("#days-nav li a").click(function(e){
                e.preventDefault();
                $("#days-nav").hide();
            });
            $('#days-nav li a').bind('touchstart', function(e) {
               e.preventDefault();
                $("#days-nav").hide();
            });
                },
                exit: function() {
                    $(window).load(TagsCenter);
                    TagsCenter();
                    $(window).resize(TagsCenter);
                }
            });

            mediaCheck({
                media: '(min-width: 1024px)',
                entry: function() {

                    var resultWrapper = $("#events-list");
                    var eventHover = $(resultWrapper).find(".cover-hover-background");
                    var tagsWrapper = $("#tags");

                    $(tagsWrapper).css('background', pageColor);
                    
                    if (pageIndex == 0) {
                        var pageColor = "#ecfed4";
                    }
                    if (pageIndex == 1) {   
                        var pageColor = "#d4f6fe";
                    }
                    if (pageIndex == 2) {   
                        var pageColor = "#fef1d6";
                    }
                    if (pageIndex == 3) {   
                        var pageColor = "#e7d8fc";
                    }
                    if (pageIndex == 4) {   
                        var pageColor = "#e0fede";
                    }
                    if (pageIndex == 5) {   
                        var pageColor = "#ffdac6";
                    }
                    if (pageIndex == 6) {   
                        var pageColor = "#d9fff5";
                    }

                    $(resultWrapper).css('background', pageColor);
                    $(eventHover).css('background', pageColor);
                },
                exit: function() {
                }
            });

        }
    });

    function eventFriends() {
        var joinH = $(".join-to-event").outerHeight();
        var windowH = $(window).height();
        var assignH = windowH - joinH;
        $(".assign-friends").height(assignH);
    }
    
    function LineUpNano() {
        var windowH = $(window).height();
        var tescik = windowH - 640;
        $('.line-up').height(tescik);
        
    }
    


    function CloneBasicInfo() {
        var CloneBasic = $(".tescik").clone();
        $(CloneBasic).insertBefore('.event-container .content .header');
    }

    function RemoveClone() {
        $(".event-container .content").find(".tescik").css('display', 'none').remove();
    }



    $("#open-map").click(function(e){
        e.preventDefault();
        $("#event-map").fadeIn();
    });
    $("#close-map").click(function(e){
        e.preventDefault();
        $("#event-map").fadeOut();
    });

    // FadeIn the panels!
    $("a.lineup").click(function(e){
        e.preventDefault();
        $("#event-basic-info").fadeIn();
    });
    $("a.friends").click(function(e){
        e.preventDefault();
        $("#event-friends").fadeIn();
    });

    // FadeOut the panels
    $("#event-basic-info .close-btn").click(function(e){
        e.preventDefault();
        $(this).parent().fadeOut();
    });
    $("#event-friends .close-btn").click(function(e){
        e.preventDefault();
        $(this).parent().fadeOut();
    });

    

    $(".tags-btn").click(function(e){
        e.preventDefault();
        $(".searched-events").css("overflow", "hidden");
        $(".events-list").css("overflow", "hidden");
        $("body").css("overflow", "hidden");

        $("#tags").fadeIn();
    });
    $(".close-tags").click(function(e){
        e.preventDefault();
        $(".searched-events").css("overflow", "auto");
        $(".events-list").css("overflow", "auto");
        $("body").css("overflow", "auto");
        $("#tags").fadeOut();
    });
    $('#my_input').multipleInput();

    function AddEventCenter(){
        var Wrapper = $("#addevent_wrapper");
        // var WrapperH = $(Wrapper).height() / 2;
        // var WrapperW = $(Wrapper).width() / 2;
        var WrapperH = $(Wrapper).height();
        var WindowH = $(window).height();
        var Result = (WindowH / 2) - (WrapperH / 2);
        $(Wrapper).css({
            "height" : WrapperH + "px",
            "margin-top" : Result + "px"
        });
    }
    
    $( "#datepicker" ).datepicker();

    $('.time').timepicker();

    $('.artist-wrapper a.add-btn').on('click', function(e){
        e.preventDefault();
        var clonethis = $(this).parent().clone( true, true );
        $(".choose_file").after(clonethis);
        $(this).unbind().text("-").removeClass("add-btn").addClass("remove-btn");
            $(".artist-wrapper a.remove-btn").on('click', function(e){
            e.preventDefault();
            $(this).parent().fadeOut();
        });
    });

    $(".nav-btn").click(function(e){
        e.preventDefault();
        $("#sidebar").fadeIn();
    });
    // $("#sidebar nav #nav li a").click(function(e){
    //     e.preventDefault();
    //     $("#sidebar").fadeOut();
    // });

    $('#file').customFileInput();   
    
});