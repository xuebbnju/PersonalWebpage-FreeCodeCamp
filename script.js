$(document).ready(function(){

   $(window).scroll(function(){

     var top =$(document).scrollTop(),
         items=$("main").find(".item"),
          menus=$("#nav");
          currentId="";
        
          items.each(function(){
          	 var m = $(this);
             if(top<200){
               currentId="#top"
             }
          else if (top>m.offset().top-300) {

             currentId ="#"+m.attr("id");

          }else{
          	return false;
          }
        


          });

         
   var currentLink=menus.find(".hover");
          if(currentId&&currentLink.attr("href")!=currentId){
          	currentLink.removeClass("hover");
          	//menus.find("[href=currentId]").addClass("hover");
          $('a[href="'+ currentId +'"]').addClass('hover');
          }
   });
});




$(function () {
     // body...
      $("body").on("input propertychange",".form-item",function(e){
      $(this).toggleClass("form-filled",!!$(e.target).val());})
     .on("focus",".form-item",function(){
      $(this).addClass("form-focused");})
     .on("blur",".form-item",function(){
      $(this).removeClass("form-focused");});
   });
//$('body').scrollspy({ target: '#banner' });
// $(function(){
//   $('body').on("click","a.scrollable",function (e) {
    
//     var m=$(this);
//     $("html body").stop().animate({scrollTop:$(m.attr("href")).offset().top},1500,'easeInOutExpo');
//      e.preventDefault();
//   });
// });
// $(function() {$('body').on('click', 'a.scrollable', function(event) {
//   var $anchor = $(this);
//   $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
//   event.preventDefault();
//   });
// });