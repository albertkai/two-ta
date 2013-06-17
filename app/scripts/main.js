$(function() {
    $('#ei-slider').eislideshow({
        animation			: 'slide',
        autoplay			: true,
        slideshow_interval	: 3000,
        titlesFactor		: 0
    });

    var header = new Header();
});


var Header = Backbone.View.extend({
    el: $('body'),
    events: {
        'mouseover #basket-thumb': 'basketShow',
        'click .cross': 'basketClose',
        'click #menu-toggle': 'menuToggle',
        'click ._dropdown-within': 'dropdown'
    },
    initialize: function(){
        //
    },
    basketShow: function(){
        $('#basket-preview').addClass('_opened');
    },
    basketClose: function(){
        $('#basket-preview').removeClass('_opened');
    },
    menuToggle: function(){
        if ($('nav').hasClass('_opened')){
            $('nav').removeClass('_opened');
        } else {
            $('nav').addClass('_opened');
        }
    },
    dropdown: function(e){
        e.preventDefault();
        console.log(e.target);
        var target = $(e.target).closest('li');
        if (target.hasClass('_opened')){
            target.removeClass('_opened')
        }else{
            target.addClass('_opened');
        }
    }
});