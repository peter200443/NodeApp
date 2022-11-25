let WebLink = [Connection,Activity,Announcement,Personal,Message]
WebLink[0].addEventListener("click",function(){
    parent.window.location.assign("Connection");
})
WebLink[1].addEventListener("click",function(){
    parent.window.location.assign("Activity");
})
WebLink[2].addEventListener("click",function(){
    parent.window.location.assign("Announcement");
})
WebLink[3].addEventListener("click",function(){
    parent.window.location.assign("Personal");
})
WebLink[4].addEventListener("click",function(){
    parent.window.location.assign("Message");
})


let Announcement_Vedio = [
    "https://www.youtube.com/embed/JmtycoXq330",
    "https://www.youtube.com/watch?v=1pYtVwIAvhY&t=701s"
]