import React from "react";
import "./style.css";
import Resume from "../../assets/RyanEllingsonResume.pdf";

const Contact = function() {
    return (
        <div className="row content-body">
            <div className="col-12">
                <p>My email address is <a href="mailto:ellin150@umn.edu">ellin150@umn.edu</a></p>
                <p>My GitHub can be found at <a href="https://github.com/RyanEllingson">https://github.com/RyanEllingson</a></p>
                <p>My LinkedIn can be found at <a href="https://linkedin.com/in/ryan-ellingson-25171614">https://linkedin.com/in/ryan-ellingson-25171614</a></p>
                <p>Click <a href={Resume} target="_blank" rel="noopener noreferrer">here</a> to view my resume</p>
            </div>
        </div>
    );
}

export default Contact;