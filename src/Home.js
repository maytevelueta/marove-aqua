import Slider from "./components/Slider";
const Home = () => {
    return ( 
        <div className="home">
            <h3 style={{
                fontSize: "100px",
                padding: "10%"
            }}>Welcome to my virtual gallery</h3>
            <Slider/>
        </div>
     );
}
 
export default Home ;