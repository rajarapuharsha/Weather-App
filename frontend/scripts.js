 
 
 const link="https://api.openweathermap.org/data/2.5/weather?&appid=49db3add0ff876016a405b0db56d9612&units=metric"
    const city=document.querySelector(".input")
    const image=document.querySelector(".weather-icon")
    async function weather() {
        const response=await fetch(link+`&q=${city.value}`)
        let data=await response.json();
        console.log(data)
        let a=data.main.temp
        let b=data.main.humidity
        let c=data.wind.speed
        let d=data.main.pressure
       document.querySelector(".temp").innerHTML=a+"°c"
       document.querySelector(".Humidity").innerHTML=b
       document.querySelector(".wind").innerHTML=c+"KM/h"
       document.querySelector(".presure").innerHTML=d+"Pa"
    }
    
    document.querySelector(".search").addEventListener("click" ,()=>{
        document.querySelector(".city").innerHTML=city.value
        image.src="assets/rain.png"
        image.style.width="120px"
        image.style.height="120px"
         weather();
    })