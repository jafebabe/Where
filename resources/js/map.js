
function initialize() {
  var map = new BMap.Map('map');
  map.centerAndZoom(new BMap.Point(121.491, 31.233), 13);

  var geolocation = new BMap.Geolocation();
  	geolocation.getCurrentPosition(function(r){
  		if(this.getStatus() == BMAP_STATUS_SUCCESS){
  			var mk = new BMap.Marker(r.point);
  			map.addOverlay(mk);
  			map.panTo(r.point);
  		}
  		else {
  			alert('failed'+this.getStatus());
  		}
  	},{enableHighAccuracy: true})
}

function loadScript() {
  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=ZvBGNtIpTgxUGRcvCvqnQ41l&callback=initialize";
  document.body.appendChild(script);
}



window.onload = loadScript;