var tanggalAcara = new Date("May 26, 2022 08:00:00").getTime();

var x = setInterval(function(){
    var tanggalSaiki = new Date().getTime();
    var selangDino = tanggalAcara - tanggalSaiki;

    var dinone = Math.floor(selangDino / (1000*60*60*24));
    var jame = Math.floor((selangDino % (1000*60*60*24)) / (1000*60*60));
    var menite = Math.floor((selangDino % (1000*60*60)) / (1000*60));
    var detike = Math.floor((selangDino % (1000*60)) / 1000);

    document.getElementById("tanggalnya").innerHTML = dinone + " hari " + jame + " jam " + menite + " menit " + detike + " detik";

    if(selangDino < 0){
        clearInterval(x);
        document.getElementById("tanggalnya").innerHTML = "0 hari 0 jam 0 menit 0 detik";
    }
}, 1000);