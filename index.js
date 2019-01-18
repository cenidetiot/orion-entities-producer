var ngsi = require("ngsi-parser");
var ocb =  require("ocb-sender");

ocb.config('http://0.0.0.0:1026/v2')
.then((result) => console.log(result))
.catch((err) => console.log(err));


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
console.log(JSON.stringify(ngsiEntity)) 

ocb.createEntity(ngsiEntity)
.then(console.log)
.catch(console.error)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*setInterval(()=> {
    var atribute = {
        temperature : getRandomInt(1, 50) 
    }
    ocb.updateEntityAttributeValue(entity.id, "temperature", getRandomInt(1,50))
    .then(console.log)
    .catch(console.log)
},3000)*/




