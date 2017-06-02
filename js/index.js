$(function () {
    var grid=$('.grid__item');
    var view=$('.view');
    var section=$(".section");
    var page=$(".page--static");
    var related=$('.related');
    var btn=$(".cd-btn");
    var info=$(".info");
    // console.log(grid)
   function linker() {
        var i=$(this).index();
        section.eq(i).addClass('show');
        page.css("display","none");
        related.css("display","none");
        view.addClass('active');
   }
    function back() {
        info.addClass('active');
    }
    function animationend() {
        var i=$(this).index();
        section.removeClass('show');
        section.eq(i).css("display","none");
        related.css("display","block");
        info.removeClass('active');
        view.removeClass('active');
        page.css("display","block");
    }
        grid.on('click',linker);
        info.on('animationend',animationend);
        btn.on('click',back);

    // $(document).ready(function() {
    //     $('body').GalMenu({
    //         'menu': 'GalDropDown'
    //     })
    // })
});