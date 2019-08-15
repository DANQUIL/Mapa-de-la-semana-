require ([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/FeatureLayer",
  "esri/layers/VectorTileLayer",
  "esri/WebMap"
  ],
  function(Map, SceneView, FeatureLayer, VectorTileLayer, WebMap)
  {
    // Code to create the map and view will go here
      var map = new Map({
      ground: "world-elevation"
    });
      var view = new SceneView({
      container: "viewMap", // Reference to the DOM node that will contain the view
      map: map, // References the map object created in step 3
      center: [-73.783892,2.8894434],
      zoom: 6
    });
    
      const layer = new FeatureLayer({
      url: "http://geoapps.esri.co/arcgis/rest/services/AvistamientoFaunal/AvistamientoFauna/MapServer/0",
      title: "AvistamientoFauna"
    });
    map.add(layer)
  
      var tileLayer = new VectorTileLayer({
      portalItem: {id: "e1e7d711648140288e20d3c0f60245d1"}
    });
    map.add(tileLayer);

    var template = {
      // autocasts as new PopupTemplate()
      title: "{NOMBRE}",
      content: [{
       type: "text",
       text: "hola puto mundo"},

        {
          type: "fields",
          fieldInfos: [

            {

              fieldName: "TIPO",
              label: "Avistamiento de tipo"
            },
            {
              fieldName: "MUNICIPIO",
              label: "Municipio"
            },
            {
              fieldName: "DEPARTAMENTO",
              label: "Departamento"
            },
            {
              fieldName: "REFERENCIA",
              label: "Sitio Oficial",
              format: {
                digitSeparator: true,
                places: 0
              }
            },

          ]
        },
        {
          type: "media",
          mediaInfos: [
            {
              title: "Imagen",
              type: "image",
                caption: "Imagen del artista",
              value: {
                sourceURL:"{imagen}"
              }
            },
          ]
        }

      ]
    }

   layer.popupTemplate = template;
  
});
