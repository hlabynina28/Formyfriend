$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(){
    $("#popup").show();
    const changeurl="#form"
    history.pushState(null, "form",changeurl );
}
addEventListener("popstate",function(e){
    window.history.back();
    $("#popup").hide();
},false);

function PopUpHide(){
    $("#popup").hide();
}
 function clear() {
  let namefield = document.getElementsByName("name");
  let email = document.getElementsByName("email");
  let phone=document.getElementsByName("phone");
  let organization=document.getElementsByName("orgname");
  let message = document.getElementsByName("message");
  let check = document.getElementsByName("checkbox");
  namefield[0].value = "";
  email[0].value = "";
  message[0].value = "";
  check[0].checked = false;
  phone[0].value="";
  organization[0].value="";
}
  $(function(){
      $(".myForm").submit(function(e){
          e.preventDefault();
          var href = $(this).attr("action");
          $.ajax({
              type: "POST",
              dataType: "json",
              url: href,
              data: $(this).serialize(),
              success: function(response){
                  if(response.status == "success"){
                     
                      alert("Данные отправлены, спасибо!");
                      clear();
                      PopUpHide()
                  }else{
                      alert("Ошибка отправления: " + response.message);
                  }
              }
          });
      });
  });