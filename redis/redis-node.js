const redis = require('ioredis');
const client = new redis(6379);

client.on('connect', function() {
    console.log('Connected!');
  });
client.on("error", (err) => {
    console.log(err);
});


client.set('bangtan', 'bangtan seonyodan', function(err, reply) {
console.log(reply); 
});

client.get('bangtan', function(err, reply) {
    console.log(reply);
  });

client.rpush(['tannies', 'taehyung', 'jungkook','jimin'], function(err, reply) {
    console.log(reply); 
  });
client.lrange('tannies', 0, -1, function(err, reply) {
console.log("full list",reply); 
});
client.lrange('tannies', 0, 1, function(err, reply) {
    console.log("slice of list",reply); 
});


client.quit();