import React, { useEffect, useRef } from 'react'

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const H = window.H;

        if (!mapRef.current) {
          const platform = new H.service.Platform({
            apikey: 'ApiKey' //The api key goes here
          });
          const engineType = H.Map.EngineType['HARP'];
    
          const defaultLayers = platform.createDefaultLayers({ engineType });
          const map = new H.Map(
            document.getElementById('mapContainer'),
            defaultLayers.vector.normal.map,
            {
              engineType,
              center: { lat: 0, lng: 0 },
              zoom: 2.5,
              pixelRatio: window.devicePixelRatio || 1 ,
              imprint: {
                font: "11px FiraGO",
                mark: `
                  <a target="_blank" tabindex="1" href="https://www.here.com/platform" style="color: inherit; margin: 0px 8px; text-decoration: none; pointer-events: all;">HERE platform</a>
                  <a target="_blank" tabindex="1" href="https://www.here.com/docs/category/here-sdk-for-js" style="color: inherit; margin: 0px 8px; text-decoration: none; pointer-events: all;">HERE Maps API for JavaScript</a>
                `,
              },
            }
          );
          const mapElement = map.getElement();
          const copyrightElement =
            mapElement.getElementsByClassName("H_copyright")[0];
          copyrightElement.insertBefore(
            copyrightElement.lastChild,
            copyrightElement.firstChild
          );
    
          // Add UI controls
          const ui = H.ui.UI.createDefault(map, defaultLayers);
        //   ui.removeControl('mapsettings');
          ui.removeControl('scalebar');

           // Restrict zoom level to a maximum of 5 and minimum of 2.5
        map.addEventListener('mapviewchange', () => {
            const zoom = map.getZoom();
           
            if (zoom < 2.5) {
                map.setZoom(2.5);
              }
        })
        
    
          // Enable map interaction
          const mapEvents = new H.mapevents.MapEvents(map);
          const behavior = new H.mapevents.Behavior(mapEvents);
    
        }
    }, [])
    

    return <div id="mapContainer" style={{ width: '100%', height: '100vh', position: 'relative' }} />;
}

export default Map