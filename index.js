const express = require('express');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send({msg: "Welcome to Dalarnos back-end"})
});

app.use('/projects', projectRoutes);
app.use('/testimonials', projectRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 