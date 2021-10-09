

/* Generise random string duzine "duzina" */

exports.generisiString = function(duzina){

    var tekst = "";
    var moguce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < duzina; i++ )
        tekst += moguce.charAt(Math.floor(Math.random() * moguce.length));

    return tekst;
}


/* Generise random broj duzine 12 cifara */

exports.generisiSifru = function() {
  let min = Math.ceil(100000000000);
  let max = Math.floor(999999999999);
  return Math.floor(Math.random() * (max - min)) + min;
}
