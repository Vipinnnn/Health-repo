window.onload = function () {
    inactivityTime();
}

var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function logout() {
       
        
        auth.signOut().then(() => {
             alert("Session  Expired Please Login Again")
                console.log("User Signed Out");
                location.replace("./signin.html");

            })
       
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 120000)
        // 1000 milliseconds = 1 second
    }
};