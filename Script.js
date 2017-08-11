alert("Convert Km to miles or Miles to Km");
var KM = "KM"
var Miles = "Miles"
var userinput = prompt("Enter KM to convert Km to miles and Miles to convert Miles to km");
do {
    if (userinput === KM) {
        var userinput1 = prompt("Enter Kilometer");
        alert("Miles is " + userinput1 * 0.62137119);

        let answer = prompt("Would you like to try again?, type in KM or Miles", "KM")
        KM = answer

    } else if (userinput === Miles) {
        var userinput2 = prompt("Enter Miles");
        alert("Km is" + userinput2 * 1.609344);
    } else {
        alert("I have set your choice KM, because you didn't read the instruction properly")
        userinput = KM
    }
} while (userinput === KM);

var userFname = prompt("What is you first name");
alert(userFname);
var userLname = prompt("What is you last name");
alert(userLname);
var answer = userFname + " " + userLname
alert("Your name is " + answer);