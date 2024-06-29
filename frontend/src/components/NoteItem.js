import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const NoteItem = ({ note, fetchNotes }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const updateNote = async () => {
        try {
            await axios.put(`http://localhost:5000/api/notes/${note._id}`, { title, content });
            setIsEditing(false);
            fetchNotes();
        } catch (err) {
            console.error('Error updating note:', err);
        }
    };

    const deleteNote = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/notes/${note._id}`);
            fetchNotes();  // Assuming this function correctly updates your notes list
        } catch (err) {
            console.error('Error deleting note:', err);
            if (err.response) {
                console.error('Server Error:', err.response.data.message);
            }
        }
    };
    


    return (
        <div className='note'>
            {isEditing ? (
                <div className='note-form'>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <button onClick={updateNote}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={deleteNote}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default NoteItem;
