function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        } 
        if (hours > 13){
         var displayHours = hours - 12;
        }
        var displayTime = displayHours + ":" + minutes + " ";
        if(hours > 11){
            displayTime+="PM";
        } else {
            displayTime+="AM"
        }
        
        setTimeout("updateTime()",1000);
        document.getElementById("time").innerHTML=displayTime;
    }
    updateTime();

var d = new Date();
document.getElementById("date").innerHTML = d.toLocaleDateString();
