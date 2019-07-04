/* global $ */

jQuery(function(){

    function fadeIn()
{
   $(this).fadeIn( fadeOut );
}

function fadeOut()
{
   $(this).fadeOut( fadeIn );
}

fadeIn.call($(".signal"));
 
 });

 

 //向かいたい先の位置を変数positionに入れる。
var topPos = $("#topPos").offset().top;
var eaPos = $("#eaPos").offset().top;
var freePos = $("#freePos").offset().top;
var livePos = $("#livePos").offset().top;
var linePos = $("#linePos").offset().top;
var startPos = $("#startPos").offset().top;　//最初の要素の、ドキュメント上での表示位置[y軸]を返す

var bootstrap_enabled = (typeof $().modal == 'function');


//TO TOP BUTTON
$(document).on("click","#toTop",function(){
   console.log("pressed!");
   $("html,body").animate({
        scrollTop : topPos // さっき変数に入れた位置まで
    }, {
        queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
    });
});

$(document).on("click",".btn-default",function(){
    console.log("pressed!");
    $("html,body").animate({
         scrollTop : topPos // さっき変数に入れた位置まで
     }, {
         queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
     });
 });

$(document).on("click","#toEA",function(){
    console.log("pressed!");
    $("html,body").animate({
         scrollTop : eaPos // さっき変数に入れた位置まで
     }, {
         queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
     });
 });

 $(document).on("click","#toFree",function(){
    console.log("pressed!");
    $("html,body").animate({
         scrollTop : freePos // さっき変数に入れた位置まで
     }, {
         queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
     });
 });

 $(document).on("click","#toStream",function(){
    console.log("pressed!");
    $("html,body").animate({
         scrollTop : livePos // さっき変数に入れた位置まで
     }, {
         queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
     });
 });

 $(document).on("click","#toLine",function(){
    console.log("pressed!");
    $("html,body").animate({
         scrollTop : linePos // さっき変数に入れた位置まで
     }, {
         queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
     });
 });

 $(document).on("click","#toStart",function(){
    console.log("pressed!");
    $("html,body").animate({
         scrollTop : startPos // さっき変数に入れた位置まで
     }, {
         queue : false,　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
     });
 });


