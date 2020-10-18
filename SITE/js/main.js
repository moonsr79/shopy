$(function(){
    var $searchBtn = $('.shopping_nav .search_btn'),
        $searchForm = $('header form');

        $searchBtn.click(function(){
            $searchForm.toggleClass('active');
        });

        $('.main_slides ul').bxSlider({
            controls:false,
            mode: 'vertical', // 문자니까 작은 따음표로.

        });
});