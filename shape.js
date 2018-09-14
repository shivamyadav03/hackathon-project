$(document).ready(function(){
    hackathon=$('#hackathon');
    innovazia=$('#innovazia');
    or=$('#Ok');
    hackathon.mouseenter(function(){
        console.log('hover');
        hackathon.animate({width:'58%'},50,function () {
       console.log('complete');
    });
    innovazia.animate({width:'38%'},50,function () {
        console.log('complete');
    });
    or.animate({left:'58%'},50,function () {
        console.log('complete');
    })});
    hackathon.mouseleave(function(){
        console.log('hover');
        hackathon.animate({width:'48%'},50,function () {
            console.log('complete');
        });
        innovazia.animate({width:'48%'},50,function () {
            console.log('complete');
        });
        or.animate({left:'48%'},50,function () {
            console.log('complete');
        })});
    //for hover on innovazia
    innovazia.mouseenter(function(){
        console.log('hover');
        hackathon.animate({width:'38%'},50,function () {
            console.log('complete');
        });
        innovazia.animate({width:'58%'},50,function () {
            console.log('complete');
        });
        or.animate({left:'38%'},50,function () {
            console.log('complete');
        })});
    innovazia.mouseleave(function(){
        console.log('hover');
        hackathon.animate({width:'48%'},50,function () {
            console.log('complete');
        });
        innovazia.animate({width:'48%'},50,function () {
            console.log('complete');
        });
        or.animate({left:'48%'},50,function () {
            console.log('complete');
        })});

});