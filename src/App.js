import React, { useEffect, useState } from "react";
import Job from "./Job";

// https://course-api.com/react-tabs-project

const App = () => {
  const [getData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const setTimeOutLoading = (seconds) => {
    setTimeout(() => {
      setLoading(false);
    }, seconds * 2000);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("https://course-api.com/react-tabs-project");

      if (res.status >= 200 && res.status <= 299) {
        const data = await res.json();

        setTimeOutLoading(1);
        setData(data);
        console.log(data);
      } else {
        setTimeOutLoading(1);
        setError(true);
        throw new Error(`Some thing went wrong! ${res.statusText}`);
      }
    } catch (err) {
      setTimeOutLoading(1);
      setError(true);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <h2 className="heading__secondary">Loading....</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h2 className="heading__secondary">Something went wrong!....</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="heading__primary">Experience</h1>

      <Job data={getData}></Job>
    </div>
  );
};

export default App;
