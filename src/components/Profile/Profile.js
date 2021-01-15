import React from "react";
import pic from "../../assets/images/profile-pic.jpg";
import "./style.css";

const Profile = function() {
    return (
        <div className="row content-body">
            <div className="col-0 col-lg-4">
                <img src={pic} alt="profile pic" className="profile-pic d-none d-lg-block"/>
            </div>
            <div className="col-12 col-lg-8">
                <p>My name is Ryan Ellingson.  I am a former chemical engineer who became a software developer because I enjoy solving technical problems and creating things with my own hands.</p>
                <p>I am proficient in both front end and back end technologies.  On the back end, I can build and deploy fully-featured web applications in either Java, using Maven and a Tomcat web server, or in JavaScript using Node.js and Express.  Between the two I prefer working in Java, and have obtained my certification as an Oracle Certified Foundations Associate in Java.  I have created web projects in Java and Node.js that employ user authentication and database connectivity.  I have used MongoDB and Firebase databases, but I really enjoy working with SQL databases, and have worked with both MySQL and PostgreSQL database management systems.</p>
                <p>On the front end side, I am comfortable working with vanilla HTML and JavaScript, but also have experience working with React.js (which incidentally was used to create this portfolio) and Angular.js.  I am also comfortable working with Bootstrap and custom CSS for styling.</p>
                <p>Outside of work, I enjoy playing the bass and hiking.  I am also a bit of a gamer, and currently enjoy Magic: the Gathering and am starting to get into StarCraft.</p>
            </div>
        </div>
    )
}

export default Profile;