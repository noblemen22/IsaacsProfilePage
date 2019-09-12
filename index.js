//document["imgName"].src="
//get img src 'attribute' from html
//onclick  function runs
//onlick function change the img src

/*function changeImage(){
  //alert("hi");
  var image = document.getElementById('myImg');
  var imageSrc = image.src;
    alert(imageSrc);


} */

function changeImage() {
var image = document.getElementById('myImg');
var imageSrc = image.src;


  if(image.src.match("https://www.classic-recreations.com/wp-content/uploads/2017/08/04-classic-recreations-shelby-gt500cr-grey.jpg")){
    
    image.src = "https://www.classic-recreations.com/wp-content/uploads/2017/08/02-shelby-gt500cr-545.jpg"
  }else{
   image.src = "https://www.classic-recreations.com/wp-content/uploads/2017/08/04-classic-recreations-shelby-gt500cr-grey.jpg";
  }

  var counter = 0;


}//end of function


/*function date(){
 var date = new Date().toLocaleDateString();
document.getElementById('date').innerHTML = date;
}
window.onload = date();*/

 var date = new Date().toLocaleDateString();
var datetext = document.getElementById("date");
datetext.innerHTML = date;
 datetext.style.color = "white"

//alert(date)

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
/*End of Dark Mode*/
$(function () {
   $('#contact-form').validator();
   $('#contact-form').on('submit', function (e) {
   if (!e.isDefaultPrevented()) {
     var url = "contact.php";
       $.ajax({
       type: "POST",
       url: url,
       data: $(this).serialize(),
       success: function (data)
{

var messageAlert = 'alert-' + data.type;
var messageText = data.message;
var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

if (messageAlert && messageText) {
$('#contact-form').find('.messages').html(alertBox);
$('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
