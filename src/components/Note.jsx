import react from "react";

function Note(props) {

    // let title = "";
    // let content = "";

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

export default Note;