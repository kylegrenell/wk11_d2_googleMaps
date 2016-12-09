var init = function(){

  // var container = document.getElementById('melbourne-map');
  // var melbourne = {lat: -37.8058693, lng: 144.9783477};
  // var melbourneMap = new MapWrapper(container, melbourne, 13);
  // melbourneMap.addMarker(melbourne);
  // melbourneMap.addClickEvent();


  var container = document.getElementById('tokyo-map');
  var tokyo = {lat: 35.652832, lng: 139.839478};
  var tokyoMap = new MapWrapper(container, tokyo, 11);

  tokyoMap.addMarker(tokyo);
  tokyoMap.addClickEvent();
}

  
      


window.onload = init;