var getCheck = new Array();
getCheck[""] = 1;
getCheck[""] = 1;
getCheck[""] = 1;
getCheck[""] = 1;

function getRealistic() {
    var rTotal = 0;
    var selectedRealistic = document.forms["frmCareer"]["chkRealistic"];

    for (var sel = 0; sel < selectedRealistic.length; sel++) {
        if (selectedRealistic[sel].checked)
            rTotal += getCareer[selectedRealistic[sel].value]
    }

    document.getElementById("priceTot").innerHTML = "$r" + (Total * 75)
}