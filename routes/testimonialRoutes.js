const express = require('express');
const fixArrayId = require('../helpers');
const app = express.Router();

let testimonials = [
    {
        id: 1,
        full_name: "Jason Wandrag",
        comment: "lorem100",
        img: "Url",
    },
    {
        id: 2,
        full_name: "Alex sexwale",
        comment: "lorem100",
        img: "Url",
    },
    {
        id: 3,
        full_name: "Amaarah January",
        comment: "lorem100",
        img: "Url",
    },
    {
        id: 4,
        full_name: "Sergio Rodgers",
        comment: "lorem100",
        img: "Url",
    },
    {
        id: 5,
        full_name: "Dale de Kock",
        comment: "lorem100",
        img: "Url",
    },
    {
        id: 6,
        full_name: "Cameron Bowers",
        comment: "lorem100",
        img: "Url",
    },
];

app.get('/', (req, res) => {
    res.send(testimonials);
});

app.get('/:id', (req, res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({ msg: 'testimonial not found' });
    res.send(testimonials);
});

app.post('/', (req, res) => {
    let { full_name, comment, img} = req.body;
    if (!comment || !img || !full_name) 
    res.status(404).send({ msg:'Not all info sent'});

    let newTestimonial = { 
        id: testimonials.length + 1,
        full_name, 
        comment, 
        img
    };
    testimonials.push(newTestimonial);
res.send(newTestimonial);
});

app.put('/:id', (req, res) => {
    let testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({ msg: "Project not found" });
    let { img, comment, full_name } = req.body;
    if (full_name) project.full_name = full_name;
    if (comment) project.comment = comment;
    if (img) project.img = img;
    res.send(testimonial);
  });
  

app.delete('/:id', (req, res) => {
    testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
    fixArrayId(testimonials);
    res.send({ msg: 'Item removed' });
});

module.exports = app;