const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import { Collect } from './mongocon';
const app = express();
// Middleware
app.use(express.json());
app.use(cors()); 


mongoose.connect('mongodb://localhost:27017/contact')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// route
    app.post('/Contact', (req, res) => {
        const newContact = new Collect({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
    
        newContact.save()
            .then(contact => res.json(contact))
            .catch(err => res.status(400).json({ error: 'Unable to save contact form submission' }));
    });

    const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));