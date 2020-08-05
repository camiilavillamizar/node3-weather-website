const request = require("request")

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3391ea77a85b611bb73efc8bfc8a482f&query=' + lat + ',' + lon

    request( {url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unnable to connect to the weather service.', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = body.current
            callback(undefined, 
                current.weather_descriptions + 
                '. Temperature: '+ current.temperature +
                ' Feelslike: ' + current.feelslike
            )
        }
    })
}

module.exports = forecast