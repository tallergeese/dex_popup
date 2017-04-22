$(document).ready(displayMsgPopup)

function displayMsgPopup(){
  setTimeout(function(){
    $("#msg-popup").removeClass("hidden")
  }, 2000)
  $("#msg-popup svg").click(closeMsgPopup)
}
function closeMsgPopup(){
  $("#msg-popup").addClass("hidden");
}