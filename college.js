var images = [
"image1.jpg",
"image2.jpg",
"image3.jpg"
];
var index = 0;
function changeImage(){
index++;
if(index >= images.length)
{
index = 0;
}
document.getElementById("slide").src = images[index];
}
setInterval(changeImage,3000);
function validateForm(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if(name == "" || email == "")
{
alert("Please fill all fields");
return false;
}
alert("Message Sent Successfully");
return true;
}
