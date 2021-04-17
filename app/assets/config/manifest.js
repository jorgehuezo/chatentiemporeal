<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){ 
$("#room_channel").focus();
//Appending HTML5 Audio Tag in HTML Body
$('<audio id="chatAudio"><source src="notify.ringtones-xperia-notification" type="audios/ringtones-xperia-notification"><source src="ringtones-xperia-notification" type="audio/mpeg"><source src="notify.wav" type="audio/wav"></audio>').appendTo('body');

$("#trig").on("click",function(){
var a = $("#room_channel").val().trim();
if(a.length > 0)
{
$("#room_channel").val(''); 
$("#room_channel").focus();
$("<li></li>").html('<img src="small.jpg"/><span>'+a+'</span>').appendTo("#room_channel");
// Scrolling Adjustment 
$("#chat").animate({"scrollTop": $('#chat')[0].scrollHeight}, "slow");
$('#chatAudio')[0].play();
}
});
});
</script>