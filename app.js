window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const proxy = 'https://cors-anywhere.herokuapp.com/'

            const api = `${proxy}https://api.darksky.net/forecast/7378f77f32f092b949c593dc54c9d995/${lat},${long}`

            fetch(api)
            .then(data => {
                return data.json()
            })
            .then(data => {
                const {temperature, summary} = data.currently
                //Set DOM Elements from the API
                temperatureDegree.textContent = temperature
                temperatureDescription.textContent = summary
                locationTimezone.textContent = data.timezone
            })
        })
    }else{
        h1.textContent = "hey you need to enable this!"
    }
})