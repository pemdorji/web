function displayAlert(){
    alert ("this is alert");
}
function displayConfrom(){
    if (confirm("true")){
        document.getElementById("para1").innerHTML = "press enter okk";
    }else {
        document.getElementById("para1").innerHTML = "you enter cancel";
    }
}
function displayPromt(){
    let color = prompt("please enter the best color: ", "Blue");
    document.getElementById("para2").innerHTML = "your best color is " +  color;
}
function calculateNumber(){
    let x = 2 + 3 + "5" + 2;
    const y = 10;
    document.getElementById("para1").innerHTML = x;
}
