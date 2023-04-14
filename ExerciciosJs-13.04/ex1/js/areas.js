function calc(){
    var la = parseInt(document.getElementById('la').value);
    var lb = parseInt(document.getElementById('lb').value);
    var ld = parseInt(document.getElementById('ld').value);
    var ra = 0;
    var rb = 0;
    var rt = 0;

    ra = la * lb;
    rb = lb * ld;
    
    rt = ra + rb;

    document.getElementById('raa').value = ra;
    document.getElementById('rab').value = rb;
    document.getElementById('rat').value = rt;
} 
