var MapWrapper = function(container, center, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });

  // conatiner tells it where its going to put the map... div
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    var contentString = 'Tokyo, officially Tokyo Metropolis, is one of the 47 prefectures of Japan, and is both the capital and most populous city of Japan. Tokyo Metropolis was formed in 1943 from the merger of the former Tokyo Prefecture (東京府 Tōkyō-fu) and the city of Tokyo (東京市 Tōkyō-shi).';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
          infowindow.open(this, marker);
        });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log("marker called");
      // console.log(event);
      console.log(event.latLng.lat());
      var position = {lat: event.latLng.lat(), lng:event.latLng.lng()}
      this.addMarker(position);
    }.bind(this))
  }


}




