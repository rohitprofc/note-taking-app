const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Middleware to get a note by ID
async function getNote(req, res, next) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.note = note;  // Attach note to response object
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Get all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a note by ID
router.get('/notes/:id', getNote, (req, res) => {
    res.json(res.note);
});

// Create a new note
router.post('/notes', async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    try {
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a note by ID
router.put('/notes/:id', getNote, async (req, res) => {
    const { title, content } = req.body;
    if (title != null) {
        res.note.title = title;
    }
    if (content != null) {
        res.note.content = content;
    }
    try {
        const updatedNote = await res.note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a note by ID
router.delete('/notes/:id', getNote, async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(res.note._id);
        if (!deletedNote) {
          return res.status(404).json({ message: 'Note not found' });
        }
        res.json({ message: 'Deleted Note' });
      } catch (err) {
        console.error('Error deleting note:', err);
        res.status(500).json({ message: 'Failed to delete note' });
      }
});



module.exports = router;
