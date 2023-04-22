$(document).ready(function(){
    $(".sendMail").click(function(){
         var body = $("#message").val();
         var _href = $("a.sendMail").attr("href");
         $("a.sendMail").attr("href", _href + '&body='+body);
    });
   
 });