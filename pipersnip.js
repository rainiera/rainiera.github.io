var url = "http://piper.ngrok.io"

var funnelresolver = window.location.href.substr(window.location.href.lastIndexOf("/")+1)

window.onload = function() {
  console.log('piper is working...');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url + '/incr/' + funnelresolver);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('piper HIT');
      console.log(xhr.response);
    }
  }
  xhr.send();
}
