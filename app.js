const request = require('postman-request')
const url ='http://api.weatherstack.com/current?access_key=306cb7db452a89257aab27efd19be91c&query=0.89729,100.34920'
request({ url: url }, (error, response) => {
//console.log(response)
const data = JSON.parse(response.body)
//console.log(data)
//console.log(data.current)
console.log(data.current.temperature)
})

const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/padang.json?access_token=pk.eyJ1Ijoic2Fsc2FiaWxsYS1haG1hZDA3IiwiYSI6ImNsbXc4NXhseDBvYmQycHF3NHV4d29ydTAifQ.wWUN8o0OXOVzOZHOotm0zQ&limit=1'
request({ url: geocodeURL, json: true }, (error,
response) => {
    const latitude = response.body.features[0].center[1]
    const longitude =
response.body.features[0].center[0]
    console.log(latitude, longitude)
})