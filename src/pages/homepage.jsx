import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobsListings from "../components/JobsListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
