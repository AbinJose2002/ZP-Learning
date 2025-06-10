import { useState } from 'react'
import axios from 'axios'
import cloudy from '../assets/cloudy.jpg'
import morning from '../assets/morning.jpg'
import afternoon from '../assets/afternoon.jpg'
import evening from '../assets/night.jpg'

type Props = {}

interface locationData {
    name: string;
    region: string;
    country: string;
    localtime: string;
}

interface currentData {
    temp_c: number;
    is_day: string;
    feelslike_c: number;
    wind_kph: number;
    cloud: number;
    vis_km: number
    wind_dir: string;
    pressure_mb: number;
    humidity: number;
    uv: string;
    condition: {
        icon: string;
        text: string;
    };
}

interface placeData {
    name: string;
}

const Weather = (props: Props) => {
    const [placeName, setPlaceName] = useState<string>('')
    const [placeFetched, setPlaceFetched] = useState<placeData[]>([])
    const [current, setCurrent] = useState<currentData | null>(null)
    const [location, setLocation] = useState<locationData | null >(null)
    const [image, setImage] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [timeSession, setTimeSession] = useState<string>("Morning")
    const handlePlaceAutoComplete = async () => {
        try {
            const placeFetchRes = await axios.get(`http://api.weatherapi.com/v1/search.json?key=a187b55187bf420391b51741250906&q=${placeName}`)
            if(placeFetchRes.status === 200){
                console.log(placeFetchRes.data)
                setPlaceFetched(placeFetchRes.data)
            }else{
                console.log(placeFetchRes.statusText)
            }
        } catch (error) {
            
        }
    }

    const weatherImage : {[key:string]:string} = {
        cloud : cloudy,
        Morning: morning,
        Afternoon: afternoon,
        Evening: evening
    }

    const searchWeather = async () => {
        try {
            const weatherRes = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a187b55187bf420391b51741250906&q=${placeName}&aqi=no`);
            if(weatherRes.status === 200){
                setPlaceName('')
                setCurrent(weatherRes.data.current)
                setLocation(weatherRes.data.location)
                setImage("https:" + weatherRes.data.current.condition.icon)
                const dateStr = location?.localtime; // e.g., "2025-06-09 15:30"
                const dateObj = new Date(dateStr);

                let curHr = dateObj.getHours()

                if (curHr < 12) {
                    setTimeSession("Morning")
                } else if (curHr < 18) {
                    setTimeSession("Afternoon")
                } else {
                    setTimeSession("Evening")
                }
                console.log(time)
                // Get just the date
                const formattedDate = dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                });
                // Get just the time
                const formattedTime = dateObj.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                });
                setTime(formattedTime)
                setDate(formattedDate)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const cardStyle = { minHeight: "150px",background: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(3.5px)",
        WebkitBackdropFilter: "blur(3.5px)", // for Safari support
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)"
    }

  return (
    // <div  className=' d-flex flex-column align-items-center'>
    //     <h1 className=''>Weather App</h1>
    //     <div>
    //         <input type="text" placeholder='Enter the first 4 character of the place' value={placeName} onChange={(e)=>{
    //             setPlaceName(e.target.value)
    //             if(placeName.length >=3)
    //                 handlePlaceAutoComplete()
    //         }}/>
    //         <button onClick={()=>{searchWeather()}}>Submit</button>
    //     </div>
    //     {placeFetched.map((item,index)=>{
    //         return(
    //             <button key={index} onClick={()=>setPlaceName(item.name)}>{item.name}</button>
    //         )
    //     })}
    // </div>

    <div className="container py-5">
      <div
        className="row mx-auto"
        style={{  height: "auto", overflow: "hidden" }}
      >
        <div
          className="col-md-4 col-12 p-4 d-flex align-items-center justify-content-center flex-column"
          style={{ backgroundColor: "#b8b8b8", borderRadius: "20px 0 0 20px", minHeight: "300px" }}
        >
          <div className='d-flex w-100 flex-column flex-md-row align-items-center justify-content-center gap-2 mb-3'>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the first 4 character of the place"
              value={placeName}
              onChange={(e) => {
                setPlaceName(e.target.value)
                if (placeName.length >= 2)
                  handlePlaceAutoComplete()
              }}
            />
            <button className="btn btn-primary mt-2 mt-md-0" onClick={() => { searchWeather() }}>Submit</button>
          </div>
          <div className='col-12' style={{borderRadius:"20px"}}>
            {placeFetched.length > 0 && placeName && placeFetched.map((item, index) => (
  <div
    className="bg-primary text-white col-12"
    style={{ padding: "10px", border: "1px solid white", cursor: "pointer" }}
    key={index}
    onClick={() => setPlaceName(item.name)}
  >
    {item.name}
  </div>
))}

          </div>
          {current?.temp_c ? (
          <div className="my-2 d-flex flex-column justify-content-center align-items-center">
                <img src={image} alt="weather-icon" width={150} />
            <div className='d-flex'>
                <h1 className="text-center">{current?.temp_c }<sup>o</sup>C</h1>
            </div>
                <h1 className="text-center" style={{borderBottom: "2px solid black", paddingBottom: '20px'}}>{current?.condition.text }</h1>
                <h4>{time && time}</h4>
                <h4>{date}</h4>
                <h4>{current?.is_day ? "Day" : "Night"}</h4>
                <h2 className='text-center'>{`${location?.name}, ${location?.region}, ${location?.country}`}</h2>
          </div>
          ) : (
            <>
                <h2 className='text-center'>Your Local Weather, Simplified</h2>
                <h4 className='text-center'>Stay ahead with precise temperature & condition updates.</h4>
            </>
          )}
        </div>
       <div
  className="col-md-8 col-12 p-4"
  style={{
    backgroundImage: `url(${weatherImage[timeSession]})`,
    boxShadow: "var(--box-shadow) inset",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0 20px 20px 0",
    minHeight: "300px",
  }}
>
  <div className="row text-white">
    <div className="col-md-4 col-6 mb-3">
      <div className="p-3 border rounded" style={cardStyle}>
        <h5>Temperature Feels Like</h5>
        {current?.feelslike_c != null && <p>{current.feelslike_c}<sup> o</sup>C</p>}
      </div>
    </div>
    <div className="col-md-4 col-6 mb-3">
      <div className="p-3 border rounded " style={cardStyle}>
        <h5>Wind</h5>
        {current?.wind_kph != null && <p>{current.wind_kph} km/h</p>}
        {current?.wind_dir != null && <p>{current.wind_dir}</p>}
      </div>
    </div>
    
    <div className="col-md-4 col-6 mb-3">
      <div className="p-3 border rounded" style={cardStyle}>
        <h5>UV Index</h5>
        {current?.uv != null && <p>{current.uv} </p>}
      </div>
    </div>

    <div className="col-md-4 col-6 mb-3">
      <div className="p-3 border rounded" style={cardStyle}>
        <h5>Visibility</h5>
        {current?.vis_km != null && <p>{current.vis_km} km</p>}
      </div>
    </div>
    
    <div className="col-md-4 col-6 mb-3">
      <div className="p-3 border rounded" style={cardStyle}>
        <h5>Pressure</h5>
        {current?.pressure_mb != null && <p>{current.pressure_mb} pb</p>}
      </div>
    </div>
    
    <div className="col-md-4 col-6 mb-3">
      <div className="p-3 border rounded" style={cardStyle}>
        <h5>SunrCloudise</h5>
        {current?.cloud != null && <p>{current.cloud}</p>}
      </div>
    </div>
    <p>Powered By Weather API</p>
  </div>
</div>



      </div>
    </div>
  )
}

export default Weather
