$(function(){
    $('.btn-player').click(function(){
        var that = $(this);
        var player = '<br><br><iframe width="560" height="315" src="//www.youtube.com/embed/'+that.attr('title')+'" frameborder="0" allowfullscreen></iframe>';
        if(that.hasClass('on')){
            that.removeClass('on').text('Open').next('p').html('');
        }else{
            that.addClass('on').text('Close').next('p').html(player);
        }
        return false;
    })
})