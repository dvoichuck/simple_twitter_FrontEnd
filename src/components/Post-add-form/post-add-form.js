import React, { useState } from 'react';
import './post-add-form.css';

const PostAddForm = (props) => {
    const [state, setState] = useState("");
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"
                value={props.setState}
                onChange={event => {
                    
                }}
            />
            <button
                type="submit"
                className="btn-outline-secondary"
                onClick={props.onClick}
                >
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm