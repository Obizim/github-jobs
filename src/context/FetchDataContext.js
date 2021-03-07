// So, since this is a relatively small application, I will just make use of only one Context File

import { createContext, useCallback, useState } from "react";

export const FetchContext = createContext();
export const data = ["London", "Amsterdam", "NewYork", "Berlin"];

const FetchDataContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [checked, setChecked] = useState(false);
  const [inputLocation, setInputLocation] = useState("");

  const fetchJobs = useCallback(() => {
    setLoading(true);
    let url;
    if (location !== "") {
      url = `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=&full_time=${checked}&location=${location}`;
    } else {
      url =
        "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=&location=";
    }
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setJobs(res);
        console.log(res);
        setLoading(false);
      });
  }, [location, checked]);

  const onRadioBtnChange = (e) => {
    setLocation("");
    setLocation(e.target.value);
  };

  const onCheckedBox = (e) => {
    setChecked(e.target.checked);
  };

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (inputLocation) {
      if(data.includes(inputLocation) === false){
        data.unshift(inputLocation);
        setInputLocation("");
      }
    }
  };

  function onhandleSearch(e) {
    setInputLocation(e.target.value);
  }

  return (
    <FetchContext.Provider
      value={{
        loading,
        jobs,
        fetchJobs,
        location,
        onRadioBtnChange,
        onCheckedBox,
        inputLocation,
        onhandleSearch,
        onhandleSubmit,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchDataContext;
