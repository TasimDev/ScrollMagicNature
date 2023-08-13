$(document).ready(function () {
    let contoller = new ScrollMagic.Controller();
    let timeLine = new TimelineLite();

    let PinScene = new ScrollMagic.Scene({
        triggerElement: "#home",
        triggerHook: 0,

    })

        .setPin('#home')
        .addTo(contoller);

    timeLine
        .to($('.people'), 2, { y: -200 })
        .to($('.mountain'), 2, { y: -100 }, "-=2")
        .to($('#info'), 2, { top: '0%' }, "-=2");

    let scene = new ScrollMagic.Scene({
        triggerElement: "#home",
        duration: "100%",
        triggerHook: 0
    })
        .setTween(timeLine)
        .addTo(contoller);


    $('.content').each(function () {
        let contentScene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "100%",
            triggerHook: 0.9

        })
            .setClassToggle(this, 'fade-in')
            .addTo(contoller);
    })

    let activLogo = new ScrollMagic.Scene({
        triggerElement: '.content',

    })
        .setClassToggle('.logo', 'active')
        .addTo(contoller);
    let activMenu = new ScrollMagic.Scene({
        triggerElement: '.content',

    })
        .setClassToggle('.menu', 'active')
        .addTo(contoller);

});
$(document).on("scroll", function () {
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    $("div.progress-bar").css("width", progress + "%");
})


function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

var $anime = $("path#anime");

// prepare SVG
pathPrepare($anime);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
    .add(TweenMax.to($anime, 2, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
    .add(TweenMax.to("path", 1, { stroke: "#121212", ease: Linear.easeNone }), 0);	// change color during the whole thing

// build scene
var sceneAnimation = new ScrollMagic.Scene({ triggerElement: "#animation", duration: 300, tweenChanges: true })
    .setTween(tween)
    .addTo(controller);





