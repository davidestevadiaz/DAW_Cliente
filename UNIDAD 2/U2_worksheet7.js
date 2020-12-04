//1. Develop a web app in which:
   //1. Test if geolocation is available.
   //2. If it's available, show the current position (latitude and longitude)
   //3. If it isn't available, show a message for each and everyone of the possible errors.
   //4. Improve your code so you show the position continuously (although the user could be in moving, so it could change)
   //5. Find the way to meassure the distance traveled.
   

  function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(posicion) {
      const latitud  = posicion.coords.latitude;
      const longitud = posicion.coords.longitude;
      
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;
      mapLink.textContent = `Latitud: ${latitud} °, Longitud: ${longitud} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Localización no soportada por el navegador';
    } else {
      status.textContent = 'Localizando…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);
     
  
  //3. Repeat exercise 2 using another maps library, like Google Maps.
     //1.  Find a way to know the address of your location (reverse geocoding).
     function geoFindMe() {
       const status = document.querySelector('#status');
       const mapLink = document.querySelector('#map-link');
       mapLink.href = '';
       mapLink.textContent = '';
       function success(posicion) {
         const latitud  = posicion.coords.latitude;
         const longitud = posicion.coords.longitude;
         status.textContent = '';
         mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
         mapLink.href = `https://www.google.es/maps/@${latitud},${longitud}ks`;
         mapLink.textContent = `Latitud: ${latitud} °, Longitud: ${longitud} °`;
       }
       function error() {
         status.textContent = 'Unable to retrieve your location';
       }
       if(!navigator.geolocation) {
         status.textContent = 'Localización no soportada por el navegador';
       } else {
         status.textContent = 'Localizando…';
         navigator.geolocation.getCurrentPosition(success, error);
       }
     }
     document.querySelector('#find-me').addEventListener('click', geoFindMe);
     