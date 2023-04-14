function calc(){
    var qt1 = parseInt(document.getElementById('qt1').value);
    var qt2 = parseInt(document.getElementById('qt2').value);
    var qt3 = parseInt(document.getElementById('qt3').value);

    var vl1 = parseInt(document.getElementById('vl1').value);
    var vl2 = parseInt(document.getElementById('vl2').value);
    var vl3 = parseInt(document.getElementById('vl3').value);
    
    var sbt1 = 0;
    var sbt2 = 0;
    var sbt3 = 0;

    var total = 0;

    sbt1 = vl1 * qt1;
    sbt2 = vl2 * qt2;
    sbt3 = vl3 * qt3;

    total = sbt1 + sbt2 + sbt3;

    document.getElementById('st1').value = sbt1;
    document.getElementById('st2').value = sbt2;
    document.getElementById('st3').value = sbt3;

    document.getElementById('total').value = total;
} 