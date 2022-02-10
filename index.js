const cors = require('cors');
const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const contactRoute = require('./routes/contactRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({msg: "Welcome to Dalarnos back-end"})
});

app.use('/projects', projectRoutes);
app.use('/testimonials', testimonialRoutes);
app.use('/contact', contactRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 