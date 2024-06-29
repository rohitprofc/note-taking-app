import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import './styles.css';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/notes');
            setNotes(response.data);
        } catch (err) {
            console.error('Error fetching notes:', err);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className='container'>
            <h1>Notes</h1>
            <AddNote fetchNotes={fetchNotes} />
            {notes.map((note) => (
                <NoteItem key={note._id} note={note} fetchNotes={fetchNotes} />
            ))}
        </div>
    );
};

export default NoteList;
