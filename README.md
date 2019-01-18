# Bienvenido al orion-entities-producer

## Instrucciones 

1. Install ngsi-parser y ocb-sender
```js
    npm install ngsi-parser ocb-sender -S

```
2. Importar la librería 

```js
    var ngsi = require("ngsi-parser");
    var ocb =  require("ocb-sender");
```

3. Configurar ocb-sender

```js
    ocb.config('http://0.0.0.0:1026/v2')
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
```
4. Convertir una simple JSON a NGSIv2 usando la ngsi.parseEntity
```js
    var entity = {
        id : "Room" + Date.now(),
        type : "Room",
        temperature : {
            value : 50,
            metadata : {
                accuracy : 70
            }
        },
        ligths : 3,
        camera : true
    }

    var ngsiEntity = ngsi.parseEntity(entity);
```

5. Crear la entidad en el Orion Context Broker usando ocb.createEntity

```js
    ocb.createEntity(ngsiEntity)
    .then(console.log)
    .catch(console.error);
```
6. Utilizar la función setInterval para actualizar un atributo de la entidad
```js
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    setInterval(()=> {
        var atribute = {
            temperature : getRandomInt(1, 50) 
        }
        ocb.updateEntityAttributeValue(entity.id, "temperature", getRandomInt(1,50))
        .then(console.log)
        .catch(console.log)
    },3000)
```

