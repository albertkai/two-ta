$(function() {

    $('#ei-slider').eislideshow({
        animation			: 'slide',
        autoplay			: true,
        slideshow_interval	: 3000,
        titlesFactor		: 0
    });

    var App = {};

    App.header = new Header();
    App.catalogLeft = new CatalogLeft();
    App.catalogMain = new CatalogMain();
    App.itemPage = new ItemPage();
    //App.checkoutPage = new CheckoutPage();
    App.cabinetPage = new CabinetPage();
    App.blogPage = new BlogPage();
});


var Header = Backbone.View.extend({
    el: $('body'),
    events: {
        'mouseover #basket-thumb': 'basketShow',
        'click #basket-thumb': 'basketShow',
        'click .cross, #h-basket-overlay': 'basketClose',
        'click #menu-toggle': 'menuToggle',
        'click ._dropdown-within': 'dropdown',
        'scroll': 'hideHeader'
    },
    initialize: function(){
        $('html').on('scroll', function(){
            $('header').addClass('_hidden');
        });
    },
    basketShow: function(){
        $('#basket-preview').addClass('_opened');
        if($('#h-basket-overlay').length === 0){
            $('body').prepend('<div id="h-basket-overlay"></div>')
        }
    },
    basketClose: function(){
        $('#basket-preview').removeClass('_opened');
        $('#h-basket-overlay').remove();
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

var CatalogLeft = Backbone.View.extend({
    el:  $('#catalog'),
    events: {
        'click .menu-open': 'menuToggle',
        'click .circle': 'filterToggle'
    },
    initialize: function(){
        $('.collapsible').collapsible();
    },
    menuToggle: function(){
        if($('#catalog-menu').hasClass('_opened')){
            $('#catalog-menu').removeClass('_opened');
        } else {
            $('#catalog-menu').addClass('_opened');
        }
    },
    filterToggle: function(e){
        $(e.target).toggleClass('_checked');
    }
});

var CatalogMain = Backbone.View.extend({
    el: $('.main-catalog'),
    initialize: function(){
        $('.sort select').chosen();
    }
});

var ItemPage = Backbone.View.extend({
    el: $('#item-page'),
    events: {
        'mouseenter .arrow': 'showPreview',
        'mouseleave .arrow': 'hidePreview'
    },
    initialize: function(){
        this.$itemPreview = $('#item-preview');
        //$('#liquid').liquidcarousel({height:160});
        $('.r-carousel').bxSlider({
            slideWidth: 140,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 60
        });
    },
    showPreview: function(e){
        var dir = $(e.target).data('dir');
        this.$itemPreview.addClass('_opened');
        if (dir === 'prev'){
            //load prev
        } else if (dir === 'next'){
            //load next
        }
    },
    hidePreview: function(){
        this.$itemPreview.removeClass('_opened');
    }
});

var CheckoutPage = Backbone.View.extend({
    el: $('#checkout'),
    events: {
        //
    },
    initialize: function(){
        $('.phone-mask').mask('(999) 999-9999');
        $('#checkout-form').validate();
    }
});


var CabinetPage = Backbone.View.extend({
    el: $('#cabinet'),
    initialize: function(){
        $('.carousel').find('.item').first().addClass('_active');
        $('.carousel').bxSlider({
            slideWidth: 140,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 10
        });
    }
});

var BlogPage = Backbone.View.extend({
    el: $('#blog'),
    events: {
        'click .further': 'expandArticle'
    },
    expandArticle: function(e){
        var $target = $(e.target).closest('article'),
            $text = $(e.target).find('span');
        if($text.html() === 'развернуть'){
            $text.html('свернуть');
        } else if($text.html() === 'свернуть'){
            $text.html('развернуть');
        }
        $target.toggleClass('_expanded');
    }
});