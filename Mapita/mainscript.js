require ([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/layers/VectorTileLayer",
  ],
  function(Map, MapView, FeatureLayer, VectorTileLayer)
  {
    // Code to create the map and view will go here
      var map = new Map({
      ground: "world-elevation"
    });
      var view = new MapView({
      container: "viewMap", // Reference to the DOM node that will contain the view
      map: map, // References the map object created in step 3
      center: [-73.783892,2.8894434],
      zoom: 4
    });

      var tileLayer = new VectorTileLayer({
      portalItem: {id: "b8010bd07ff94d5983e0579df4216709"}
    });

    map.add(tileLayer);

      const layer = new FeatureLayer({
      url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/ColombiaFauna_1_WFL1/FeatureServer/1",
      title: "AvistamientoFauna"
    });
    map.add(layer)


    var template = {
      // autocasts as new PopupTemplate()
      title: "{NOMBRE}",
      content: [{
       type: "text",
       },

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
                caption: "",
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
