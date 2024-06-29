import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const AddNote = ({ fetchNotes }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addNote = async () => {
        try {
            await axios.post('http://localhost:5000/api/notes', { title, content });
            setTitle('');
            setContent('');
            fetchNotes();
        } catch (err) {
            console.error('Error adding note:', err);
        }
    };

    return (
        <div className='note-form'>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            ></textarea>
            <button onClick={addNote}>Add Note</button>
        </div>
    );
};

export default AddNote;
