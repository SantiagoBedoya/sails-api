function calcDistance(lat1, lng1, lat2, lng2){
    return Math.sqrt(Math.pow((lat2-lat1), 2) + Math.pow((lng2-lng1), 2));
}

module.exports = {
    calcDistance
}