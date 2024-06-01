import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListings  from "./components/JobsListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards/>
      <JobsListings/>
      <ViewAllJobs/>
    </>
  );
};

export default App;
