function buttonclick(sw) {
    var name =
    document.getElementById("nameInput").value;

    document.getElementById("greeting").innerHTML = "hai " + name + "!>~< ^-^"

    var pic;
    if (sw==1) {
        pic = "spikedog.png"
    }
    document.getElementById('spikedog').src = pic;
    
}
