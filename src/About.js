import tetraFull from "./assets/tetra-full.png";
import React from "react";

const About = () => {
    return ( 
        <div className="about-container">
            <h1>About me</h1>
            <div className="about">
            <img src={ tetraFull } alt="tetra-full" style={{ width: "40%" }}/>
            <div className="about-text" style={{ fontSize: "120%", alignSelf: "center", paddingLeft: "1rem" }}>
            <p>I'm Mayté from México, and I'm a watercolor enthusiast. Marove Aqua started in early 2021 as a little personal side project to decorate my appartment. Before that, I had never painted with watercolors, and the experience was a game changer to me.</p>
            <br/>
            <p>My paints are focused on hyperrealism still lifes, all made with Winsor and Newton pigments over cold pressed paper. I keep practicing and improving my techniques, and always looking for inspiration. If you have any suggestions or want to order a customize painting, please contact me and I'll be happy to reach you.</p>
            </div>
            </div>
        </div>
     );
}
 
export default About;