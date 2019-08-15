require([
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/FeatureLayer",
          "esri/PopupTemplate",
          "esri/layers/VectorTileLayer",

        ], function(Map, MapView,FeatureLayer,  popupTemplate) {

        var map = new Map({
          basemap: "VectorTileServer"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-73.783892,2.8894434],
          zoom: 7
        });

        const layer = new FeatureLayer({
         url: "http://geoapps.esri.co/arcgis/rest/services/AvistamientoFaunal/AvistamientoFauna/MapServer/0"
      });
      map.add(layer);

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
