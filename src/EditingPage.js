import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

class EditingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content,
        };
        props.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }

    render() {
        /* TODO: add cancel btn */
        return (
            <div className="note-edit-page" key={this.state.title}>
                <h3>Éditez la note</h3>
                <form onSubmit={this.props.onSubmit}>
                    <input
                        type="text"
                        defaultValue={this.state.title}
                        onFocus={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <>
                        <Editor
                            initialValue={this.state.content}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins:
                                    "preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools help charmap quickbars emoticons",
                                toolbar:
                                    "undo redo | formatselect | " +
                                    "bold italic backcolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                contextmenu: "link image imagetools table",
                                skin: "oxide-dark",
                                content_css: "dark",
                            }}
                        />
                    </>
                    <div className="flex-align-right my-20">
                        <button type="submit" className="btn">
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditingPage;
