import React from "react";
import EditingPage from "./EditingPage";

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            /* TODO: add an edit button instead of full elem click */
            elem: (
                <div
                    className="note"
                    onClick={() => {
                        this.openEditingPage();
                    }}
                >
                    <h3 className="note-title">{props.title}</h3>
                    <div className="note-content">{props.content}</div>
                </div>
            ),
        };
    }

    handleSubmit(e) {
        /* TODO: persist to DB */
        this.setState({
            title: e.target[0].value,
            content: e.target[1].value,
            elem: (
                <div
                    className="note"
                    onClick={() => {
                        this.openEditingPage();
                    }}
                >
                    <h3 className="note-title">{e.target[0].value}</h3>
                    <div className="note-content" dangerouslySetInnerHTML={{ __html: e.target[1].value}} />
                </div>
            ),
        });
        e.preventDefault();
    }

    openEditingPage() {
        this.setState({
            elem: (
                <EditingPage
                    title={this.state.title}
                    content={this.state.content}
                    onSubmit={(e) => {
                        this.handleSubmit(e);
                    }}
                ></EditingPage>
            ),
        });
    }

    render() {
        return this.state.elem;
    }
}

export default Note;
