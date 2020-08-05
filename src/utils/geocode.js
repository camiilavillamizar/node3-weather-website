const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiY2FtaWlsYXZpbGxhbWl6YXIiLCJhIjoiY2tkM2s2d2NzMGdpZTM2a2M2dWFrcXljaCJ9.Cy06yXnPjWLxeSozUifTWQ&limit=1'
    request ( {url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the weather service', undefined)
        } else if(body.features.length == 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            const features = body.features[0]            
            callback(undefined, {
                latitude: features.center[1],
                longitude: features.center[0],
                location: features.place_name
            })
        }
    })
} 

module.exports = geocode