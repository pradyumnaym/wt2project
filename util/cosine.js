function cosinesimilarity(a, b){
    var moda = 0.00001;
    var modb = 0.00001;
    a.forEach(ele=>moda+=(ele*ele));
    b.forEach(ele=>modb+=(ele*ele));
    moda = Math.sqrt(moda);
    modb = Math.sqrt(modb);
    dotprod = 0
    for(var i=0;i<a.length;i++){
        dotprod += a[i]*b[i];
    }
    return dotprod / (moda * modb);
}

module.exports = cosinesimilarity;
