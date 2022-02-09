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
        comment: "Dalarno produces quality work and continues to go the extra mile.He has the potential to achieve greatness given the chance he just might exceed expectations.He works well in groups and can takes control.",
        img: "https://i.postimg.cc/D0mtM2xP/Alex-Sexwale.jpg",
    },
    {
        id: 3,
        full_name: "Amaarah January",
        comment: "Dalarno is a very creative, extremely hard-worker. He is very patient and will take his time to find the perfect solution to whatever he works on. He is the kind of person you can always go to for help.",
        img: "https://i.postimg.cc/d0BpQ7X9/Amaarah.jpg",
    },
    {
        id: 4,
        full_name: "Sergio Rodgers",
        comment: "Dalarno is a hard-working individual and always has good energy.He works well in teams and is also a great leader.Given the opportunity to show his skills he will do exactly that and eventually more.",
        img: "https://i.postimg.cc/kgNhw6nd/Sergio.jpg",
    },
    {
        id: 5,
        full_name: "Dale de Kock",
        comment: "Dalarno never fails to liven up a conversation with his presence. His positive demeanour and work ethic are nothing short of infectious. He would be a fantastic addition to any team that he finds himself on.",
        img: "https://i.postimg.cc/K4SJDFwz/Dale.jpg",
    },
    {
        id: 6,
        full_name: "Cameron Bowers",
        comment: "Dalarno is a very friendly and hard-working individual.He does his best with any given task and always exceeds expectations.He has a keen eye for web-design, and always makes them stand out from others.",
        img: "https://i.postimg.cc/gkW7hHWK/Cameron.jpg",
    },
];

// get objects
app.get('/', (req, res) => {
    res.send(testimonials);
});

// get objects by id
app.get('/:id', (req, res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({ msg: 'testimonial not found' });
    res.send(testimonial);
});

// Add new ojects
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

// Update entry
app.put('/:id', (req, res) => {
    let testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({ msg: "Project not found" });
    let { img, comment, full_name } = req.body;
    if (full_name) testimonial.full_name = full_name;
    if (comment) testimonial.comment = comment;
    if (img) testimonial.img = img;
    res.send(testimonial);
  });
  
// Delete entry
app.delete('/:id', (req, res) => {
    testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
    fixArrayId(testimonials);
    res.send({ msg: 'Item removed' });
});

module.exports = app;