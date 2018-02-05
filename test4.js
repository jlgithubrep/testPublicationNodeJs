var searchStrings = function (data, callback) {
    let j = 0;

    for (var h = 0; h < data.filtre.length; h++) {
        
        for (var i = 0; i <= (data.chaine.length - data.filtre[h].length); i++) { //pas besoin d'aller jusqu'au bout de la chaine
            if (data.chaine.substr(i, (data.filtre[h].length)) == data.filtre[h]) {
                j++;
            }
        }
        
        console.log(h,j);
    }

    if (j > 0) {
        return callback(null, j);
    } else {
        return callback("Les sous-chaine " + data.filtre + " non retrouvées dans la chaine principale");
    }
};

var str = "aabaabbbabbbaa";
var ch = ["ab", "ba", "abba"];
//var ch = ["ac", "ca", "acca"];
var data = { chaine: str, filtre: ch };

searchStrings(data, function (err, result) {
    if (err)
        console.error("erreur :" + err)
    else
        console.log(ch + " apparaissent " + result + " fois en tout dans la chaine principale")
});

