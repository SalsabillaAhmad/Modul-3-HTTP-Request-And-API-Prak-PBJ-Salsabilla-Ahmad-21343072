const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=306cb7db452a89257aab27efd19be91c&query=0.89729,100.34920&units.m'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' +
response.body.current.temperature +
    ' derajat celcius. Kemungkinan terjadinya hujan adalah' 
    + response.body.current.precip
        + '%' + ' Cuaca Hari Ini Adalah ' 
        + response.body.current.weather_descriptions )
})

