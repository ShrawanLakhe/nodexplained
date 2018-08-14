const getTouristDestinationInfo = require('./server');

(async function() {
    const destination = await getTouristDestinationInfo();
    console.log('destination', destination);
})();