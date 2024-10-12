import Certifications from "../components/Home/Certifications";
import Information from "../components/Home/Information";
import Hero from "../components/Home/Hero";
import Meeting from "../components/Home/Meeting";
import Rating from "../components/Rating";
import Trustus from "../components/Home/Trustus";
import CommonDiseases from "../components/Home/Commondiseases";
import ExpertTime from "../components/Home/Expertteam";
const Home = () => {
  return (
    <div>
    <Hero/>
    <Certifications/>
    <Information/>
    <CommonDiseases/>
    <Meeting/>
    <Rating/>
    <Trustus/>
    <ExpertTime/>
  

   
    </div>
  );
};

export default Home;
