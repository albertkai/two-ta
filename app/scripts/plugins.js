/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */



(function( window, $, undefined ) {

    /*
     * debouncedresize: special jQuery event that happens once after a window resize
     *
     * latest version and complete README available on Github:
     * https://github.com/louisremi/jquery-smartresize
     *
     * Copyright 2012 @louis_remi
     * Licensed under the MIT license.
     *
     * This saved you an hour of work?
     * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
     */
    (function($) {

        var $event = $.event,
            $special,
            resizeTimeout;

        $special = $event.special.debouncedresize = {
            setup: function() {
                $( this ).on( "resize", $special.handler );
            },
            teardown: function() {
                $( this ).off( "resize", $special.handler );
            },
            handler: function( event, execAsap ) {
                // Save the context
                var context = this,
                    args = arguments,
                    dispatch = function() {
                        // set correct event type
                        event.type = "debouncedresize";
                        $event.dispatch.apply( context, args );
                    };

                if ( resizeTimeout ) {
                    clearTimeout( resizeTimeout );
                }

                execAsap ?
                    dispatch() :
                    resizeTimeout = setTimeout( dispatch, $special.threshold );
            },
            threshold: 150
        };

    })(jQuery);

    $.fn.smartresize 			= function( fn ) {
        return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
    };

    $.Slideshow 				= function( options, element ) {

        this.$el			= $( element );

        /***** images ****/

            // list of image items
        this.$list			= this.$el.find('ul.ei-slider-large');
        // image items
        this.$imgItems		= this.$list.children('li');
        // total number of items
        this.itemsCount		= this.$imgItems.length;
        // images
        this.$images		= this.$imgItems.find('img:first');

        /***** thumbs ****/

            // thumbs wrapper
        this.$sliderthumbs	= this.$el.find('ul.ei-slider-thumbs').hide();
        // slider elements
        this.$sliderElems	= this.$sliderthumbs.children('li');
        // sliding div
        this.$sliderElem	= this.$sliderthumbs.children('li.ei-slider-element');
        // thumbs
        this.$thumbs		= this.$sliderElems.not('.ei-slider-element');

        // initialize slideshow
        this._init( options );

    };

    $.Slideshow.defaults 		= {
        // animation types:
        // "sides" : new slides will slide in from left / right
        // "center": new slides will appear in the center
        animation			: 'sides', // sides || center
        // if true the slider will automatically slide, and it will only stop if the user clicks on a thumb
        autoplay			: false,
        // interval for the slideshow
        slideshow_interval	: 3000,
        // speed for the sliding animation
        speed			: 800,
        // easing for the sliding animation
        easing			: '',
        // percentage of speed for the titles animation. Speed will be speed * titlesFactor
        titlesFactor		: 0.60,
        // titles animation speed
        titlespeed			: 800,
        // titles animation easing
        titleeasing			: '',
        // maximum width for the thumbs in pixels
        thumbMaxWidth		: 150
    };

    $.Slideshow.prototype 		= {
        _init 				: function( options ) {

            this.options 		= $.extend( true, {}, $.Slideshow.defaults, options );

            // set the opacity of the title elements and the image items
            this.$imgItems.css( 'opacity', 0 );
            this.$imgItems.find('div.ei-title > *').css( 'opacity', 0 );

            // index of current visible slider
            this.current		= 0;

            var _self			= this;

            // preload images
            // add loading status
            this.$loading		= $('<div class="ei-slider-loading">Loading</div>').prependTo( _self.$el );

            $.when( this._preloadImages() ).done( function() {

                // hide loading status
                _self.$loading.hide();

                // calculate size and position for each image
                _self._setImagesSize();

                // configure thumbs container
                _self._initThumbs();

                // show first
                _self.$imgItems.eq( _self.current ).css({
                    'opacity' 	: 1,
                    'z-index'	: 10
                }).show().find('div.ei-title > *').css( 'opacity', 1 );

                // if autoplay is true
                if( _self.options.autoplay ) {

                    _self._startSlideshow();

                }

                // initialize the events
                _self._initEvents();

            });

        },
        _preloadImages		: function() {

            // preloads all the large images

            var _self	= this,
                loaded	= 0;

            return $.Deferred(

                function(dfd) {

                    _self.$images.each( function( i ) {

                        $('<img/>').load( function() {

                            if( ++loaded === _self.itemsCount ) {

                                dfd.resolve();

                            }

                        }).attr( 'src', $(this).attr('src') );

                    });

                }

            ).promise();

        },
        _setImagesSize		: function() {

            // save ei-slider's width
            this.elWidth	= this.$el.width();

            var _self	= this;

            this.$images.each( function( i ) {

                var $img	= $(this);
                imgDim	= _self._getImageDim( $img.attr('src') );

                $img.css({
                    width		: imgDim.width,
                    height		: imgDim.height,
                    marginLeft	: imgDim.left,
                    marginTop	: imgDim.top
                });

            });

        },
        _getImageDim		: function( src ) {

            var $img    = new Image();

            $img.src    = src;

            var c_w		= this.elWidth,
                c_h		= this.$el.height(),
                r_w		= c_h / c_w,

                i_w		= $img.width,
                i_h		= $img.height,
                r_i		= i_h / i_w,
                new_w, new_h, new_left, new_top;

            if( r_w > r_i ) {

                new_h	= c_h;
                new_w	= c_h / r_i;

            }
            else {

                new_h	= c_w * r_i;
                new_w	= c_w;

            }

            return {
                width	: new_w,
                height	: new_h,
                left	: ( c_w - new_w ) / 2,
                top		: ( c_h - new_h ) / 2
            };

        },
        _initThumbs			: function() {

            // set the max-width of the slider elements to the one set in the plugin's options
            // also, the width of each slider element will be 100% / total number of elements
            this.$sliderElems.css({
                'max-width' : this.options.thumbMaxWidth + 'px',
                'width'		: 100 / this.itemsCount + '%'
            });

            // set the max-width of the slider and show it
            this.$sliderthumbs.css( 'max-width', this.options.thumbMaxWidth * this.itemsCount + 'px' ).show();

        },
        _startSlideshow		: function() {

            var _self	= this;

            this.slideshow	= setTimeout( function() {

                var pos;

                ( _self.current === _self.itemsCount - 1 ) ? pos = 0 : pos = _self.current + 1;

                _self._slideTo( pos );

                if( _self.options.autoplay ) {

                    _self._startSlideshow();

                }

            }, this.options.slideshow_interval);

        },
        // shows the clicked thumb's slide
        _slideTo			: function( pos ) {

            // return if clicking the same element or if currently animating
            if( pos === this.current || this.isAnimating )
                return false;

            this.isAnimating	= true;

            var $currentSlide	= this.$imgItems.eq( this.current ),
                $nextSlide		= this.$imgItems.eq( pos ),
                _self			= this,

                preCSS			= {zIndex	: 10},
                animCSS			= {opacity	: 1};

            // new slide will slide in from left or right side
            if( this.options.animation === 'sides' ) {

                preCSS.left		= ( pos > this.current ) ? -1 * this.elWidth : this.elWidth;
                animCSS.left	= 0;

            }

            // titles animation
            $nextSlide.find('div.ei-title > h2')
                .css( 'margin-right', 50 + 'px' )
                .stop()
                .delay( this.options.speed * this.options.titlesFactor )
                .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
                .end()
                .find('div.ei-title > h3')
                .css( 'margin-right', -50 + 'px' )
                .stop()
                .delay( this.options.speed * this.options.titlesFactor )
                .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )

            $.when(

                    // fade out current titles
                    $currentSlide.css( 'z-index' , 1 ).find('div.ei-title > *').stop().fadeOut( this.options.speed / 2, function() {
                        // reset style
                        $(this).show().css( 'opacity', 0 );
                    }),

                    // animate next slide in
                    $nextSlide.css( preCSS ).stop().animate( animCSS, this.options.speed, this.options.easing ),

                    // "sliding div" moves to new position
                    this.$sliderElem.stop().animate({
                        left	: this.$thumbs.eq( pos ).position().left
                    }, this.options.speed )

                ).done( function() {

                    // reset values
                    $currentSlide.css( 'opacity' , 0 ).find('div.ei-title > *').css( 'opacity', 0 );
                    _self.current	= pos;
                    _self.isAnimating		= false;

                });

        },
        _initEvents			: function() {

            var _self	= this;

            // window resize
            $(window).on( 'smartresize.eislideshow', function( event ) {

                // resize the images
                _self._setImagesSize();

                // reset position of thumbs sliding div
                _self.$sliderElem.css( 'left', _self.$thumbs.eq( _self.current ).position().left );

            });

            // click the thumbs
            this.$thumbs.on( 'click.eislideshow', function( event ) {

                if( _self.options.autoplay ) {

                    clearTimeout( _self.slideshow );
                    _self.options.autoplay	= false;

                }

                var $thumb	= $(this),
                    idx		= $thumb.index() - 1; // exclude sliding div

                _self._slideTo( idx );

                return false;

            });

        }
    };

    var logError 				= function( message ) {

        if ( this.console ) {

            console.error( message );

        }

    };

    $.fn.eislideshow			= function( options ) {

        if ( typeof options === 'string' ) {

            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function() {

                var instance = $.data( this, 'eislideshow' );

                if ( !instance ) {
                    logError( "cannot call methods on eislideshow prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    return;
                }

                if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
                    logError( "no such method '" + options + "' for eislideshow instance" );
                    return;
                }

                instance[ options ].apply( instance, args );

            });

        }
        else {

            this.each(function() {

                var instance = $.data( this, 'eislideshow' );
                if ( !instance ) {
                    $.data( this, 'eislideshow', new $.Slideshow( options, this ) );
                }

            });

        }

        return this;

    };

})( window, jQuery );

/*!
 reflection.js for jQuery v1.11
 (c) 2006-2013 Christophe Beyls <http://www.digitalia.be>
 MIT-style license.
 */
(function(a){a.fn.extend({reflect:function(b){b=a.extend({height:1/3,opacity:0.5},b);return this.unreflect().each(function(){var c=this;if(/^img$/i.test(c.tagName)){function d(){var g=c.width,f=c.height,l,i,m,h,k;i=Math.floor((b.height>1)?Math.min(f,b.height):f*b.height);l=a("<canvas />")[0];if(l.getContext){h=l.getContext("2d");try{a(l).attr({width:g,height:i});h.save();h.translate(0,f-1);h.scale(1,-1);h.drawImage(c,0,0,g,f);h.restore();h.globalCompositeOperation="destination-out";k=h.createLinearGradient(0,0,0,i);k.addColorStop(0,"rgba(255, 255, 255, "+(1-b.opacity)+")");k.addColorStop(1,"rgba(255, 255, 255, 1.0)");h.fillStyle=k;h.rect(0,0,g,i);h.fill()}catch(j){return}}else{if(!window.ActiveXObject){return}l=a("<img />").attr("src",c.src).css({width:g,height:f,marginBottom:i-f,filter:"FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity="+(b.opacity*100)+", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY="+(i/f*100)+")"})[0]}a(l).css({display:"block",border:0});m=a(/^a$/i.test(c.parentNode.tagName)?"<span />":"<div />").insertAfter(c).append([c,l])[0];m.className=c.className;a.data(c,"reflected",m.style.cssText=c.style.cssText);a(m).css({width:g,height:f+i,overflow:"hidden"});c.style.cssText="display: block; border: 0px";c.className="reflected"}if(c.complete){d()}else{a(c).load(d)}}})},unreflect:function(){return this.unbind("load").each(function(){var c=this,b=a.data(this,"reflected"),d;if(b!==undefined){d=c.parentNode;c.className=d.className;c.style.cssText=b;a.removeData(c,"reflected");d.parentNode.replaceChild(c,d)}})}})})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
jQuery(function($) {
    $("img.reflect").reflect({/* Put custom options here */});
});