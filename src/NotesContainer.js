import React from "react";
import EmptyNote from "./EmptyNote";
import Note from "./Note";

class NotesContainer extends React.Component {
    constructor(props) {
        /* TODO: load notes from DB */
        super(props);
        this.state = {
            notes: Array(),
        };
    }

    createNewNote() {
        let note = (<Note title="Note vide" content="Commencez à rédiger" key={this.state.notes.length}></Note>);
        this.setState({
            notes: this.state.notes.concat(note)
        })
    }

    render() {
        return (
            <div id="notes-container">
                {this.state.notes}
                <EmptyNote key={this.state.notes.length}
                    onClick={() => {
                        this.createNewNote();
                    }}
                ></EmptyNote>
            </div>
        );
    }
}

export default NotesContainer;
