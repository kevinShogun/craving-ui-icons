import React, { useState } from 'react'
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export const TextEditor = () => {

    const [state, setstate] = useState({
        editorState: EditorState.createEmpty(),
    })

    const onEditorStateChange = (editorState) => {
        setstate(
            {editorState}
        )
    }

    const {editorState} = state


    return (
        <div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />;

        </div>
    )
}
