import { createContext, useCallback, useState } from "react";

export const FetchContext = createContext()

const FetchDataContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [location,setLocation] = useState("")

    const fetchJobs = useCallback(() => {
        let url;
        if (location !== "") {
          url = `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=&location=${location}`;
        } else {
          url = 'https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=&location=';
        }
        fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(res => res.json())
      .then(res => {
          setJobs(res)
          setLoading(false)
      })

    }, [location])

    const onRadioBtnChange = (e) => {
        setLocation("")
        setLocation(e.target.value)
    }

    return ( <FetchContext.Provider value={{loading,jobs,fetchJobs,location,onRadioBtnChange}}>
        {children}
    </FetchContext.Provider> );
}
 
export default FetchDataContext;