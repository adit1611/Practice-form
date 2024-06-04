// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST api/contacts
// @desc    Save a contact form submission
// @access  Public
router.post('/', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newContact.save()
        .then(contact => res.json(contact))
        .catch(err => res.status(400).json({ error: 'Unable to save contact form submission' }));
});

module.exports = router;
