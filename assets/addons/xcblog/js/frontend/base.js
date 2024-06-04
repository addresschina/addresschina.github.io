(function(_w) {

    var w = _w;

    //main namespace
    G = {};
    G.Config = {

    };

    G.Fun = {
        area_refresh: function(){
            var count = G_AREA.length;
            var index = Math.floor(Math.random() * count);
            var rows = G_AREA[index];

            $('.result-box').empty();
            $.each(rows['data_config'], function(i){
                var row = rows['data_config'][i];
                var key = row['key'];
                var dl = $('<dl></dl>');
                dl.append('<dt><h3>'+row['value']+'</h3></dt>');
                $.each(rows['data'][key], function(j){
                    var data_row = rows['data'][key][j];
                    var dd = $('<dd></dd>');
                    dd.append('<label>'+data_row['key_name']+'</label>');
                    dd.append('<span><b>'+data_row['value']+'</b></span>');
                    dl.append(dd);
                })

                $('.result-box').append(dl);
            })
        },
        init: function() {
            //显示二级导航
            $("#bs-example-navbar-collapse-1 .navbar-nav li.dropdown").mouseover(function() {
                $(this).addClass("open");
            }).mouseout(function() {
                $(this).removeClass("open");
            });


            $(window).scroll(function(e) {
                if ($(window).scrollTop() > 100) {
                    $(".gotop").fadeIn(500).css("display", "block");
                } else {
                    $(".gotop").fadeOut(500).css("display", "none");
                }
            });

            $(".gotop").click(function(e) {
                $('body,html').animate({ scrollTop: 0 }, 500);
                return false;
            });

            G.Fun.area_refresh();
            $('#js_area_refresh').click(function(){
                G.Fun.area_refresh();
            })

            // G.Fun.bind_province($('#country').val(), $('#province').data('current'));

            // $('#country').change(function(){
            //     G.Fun.bind_province($(this).val(), $('#province').data('current'));
            // });

            // $('#province').change(function(){
            //     G.Fun.bind_city($(this).val(), $('#city').data('current'));
            // });
        }
    };

    $(function() {
        G.Fun.init();
    });
})();