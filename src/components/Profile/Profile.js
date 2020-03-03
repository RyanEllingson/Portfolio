import React from "react";
import pic from "../../assets/images/profile-pic.jpg";
import "./style.css";

const Profile = function() {
    return (
        <div className="row content-body">
            <div className="col-0 col-lg-3">
                <img src={pic} alt="profile pic" className="profile-pic d-none d-lg-block"/>
            </div>
            <div className="col-12 col-lg-9">
                <p>My name is Ryan Ellingson.  I am a former chemical engineer who became a web developer because I enjoy solving technical problems and creating things with my own hands.</p>
                <p>I am proficient in both front end and back end technologies.  I have built basic web pages using only HTML, CSS and JavaScript, as well as full stack applications using Node and Express back ends connecting to MySQL and MongoDB databases.  I have used Firebase both for database and for user authentication, and have also built front ends using React (which was used to make this portfolio!)</p>
                <p>Outside of work, I enjoy playing the bass and hiking.  I am also a bit of a gamer, and currently enjoy Magic: the Gathering and Final Fantasy XIV.</p>
            </div>
        </div>
    )
}

export default Profile;