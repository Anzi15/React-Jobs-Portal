import { useState, useEffect } from "react";
import JobListing from "./JobListing"
import LoadingSpinner from "./LoadingSpinner";

const JobsListings = ({isHome = false}) => { 
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
    const fetchJobs = async ()=>{
      try {
        const res =  await fetch(apiUrl);
        const data = await res.json();
        setJobs(data) 
      } catch (error) {
        console.log(`error fetching data : ${error}`)
      } finally{
        setLoading(false)
      }
    }
      
    fetchJobs()
  },[])
  
  return (
    <section className="bg-blue-50 px-4 py-10 relative">
    <div className="container-xl lg:container m-auto bg-inherit">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? 
      <LoadingSpinner/> : 
        <>
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          )) }
        </>
        }
        {}
      </div>
    </div>
  </section>
  )
}

export default JobsListings