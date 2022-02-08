const express = require('express');
const fixArrayId = require('../helpers');
const app = express.Router();

let projects = [{
    id: 1,
    title:"Calculator",
    stack:"Html, Css",
    github:"https://github.com/F1uffyDe5troyer/Project-do-over",
    netlify:"https://friendly-jennings-1a27d9.netlify.app/",
    img:"https://i.postimg.cc/43nQDmzM/Calculator.png"
  },
  {
    id: 2,
    title:"Css animation landing site",
    stack:"Html, Css",
    github:"Url",
    netlify:"https://eager-beaver-21dff1.netlify.app/",
    img:"https://i.postimg.cc/nLsqdNxf/Css-animation.png"
  },
  {
    id: 3,
    title:"Dark theme site",
    stack:"Html, Css",
    github:"https://github.com/F1uffyDe5troyer/Nav-bar-website",
    netlify:"https://sleepy-pare-db86c3.netlify.app/",
    img:"https://i.postimg.cc/FHzSRw7k/Dark-theme.png"
  },
  {
    id: 4,
    title:"Flower Store",
    stack:"Html, Css",
    github:"https://github.com/F1uffyDe5troyer/Single-page-site",
    netlify:"https://quizzical-lumiere-12f95f.netlify.app/",
    img:"https://i.postimg.cc/SRm2pvBs/E-commerce.png"
  },
  {
    id: 5,
    title:"First Site",
    stack:"Html, Css",
    github:"https://github.com/F1uffyDe5troyer/Calculator",
    netlify:"https://sleepy-payne-35b730.netlify.app/",
    img:"https://i.postimg.cc/fyWLP0dS/First-Site.png"
  },
];

app.get('/', (req, res) => {
    res.send(projects);
});

app.get('/:id', (req, res) => {
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({ msg: 'Project not found' });
    res.send(projects);
});

app.post('/', (req, res) => {
    let { title, stack, github, netlify, img} = req.body;
    if (!title || !img || !stack || !github || !netlify) 
    res.status(404).send({ msg:'Not all info sent'});

    let newProject = { 
        id: projects.length + 1,
        title, 
        stack, 
        github, 
        netlify,
        img
    };
projects.push(newProject);
res.send(newProject);
});

// UPDATE A PROJECT (update item in array)
app.put('/:id', (req, res) => {
    // FIND PROJECT INDEX IN PROJECTS
    let project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({ msg: "Project not found" });
    let { title, img, github, netlify, stack } = req.body;
  
    // WRITE DETAILS TO PROJECT
    if (title) project.title = title;
    if (stack) project.stack = stack;
    if (github) project.github = github;
    if (netlify) project.netlify = netlify;
    if (img) project.img = img;
    res.send(project);
  });
  

app.delete('/:id', (req, res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({ msg: 'Item removed' });
});

module.exports = app;