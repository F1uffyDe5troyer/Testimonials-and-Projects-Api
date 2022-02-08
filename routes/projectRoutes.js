const express = require('express');
const fixArrayId = require('../helpers');
const app = express.Router();

let projects = [{
    id: 1,
    title:"Banana",
    stack:"Html",
    github:"Url",
    netlify:"Url",
    img:"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
  },
  {
    id: 2,
    title:"Banana",
    stack:"Html",
    github:"Url",
    netlify:"Url",
    img:"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
  },
  {
    id: 3,
    title:"Banana",
    stack:"Html",
    github:"Url",
    netlify:"Url",
    img:"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
  },
  {
    id: 4,
    title:"Banana",
    stack:"Html",
    github:"Url",
    netlify:"Url",
    img:"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
  },
  {
    id: 5,
    title:"Banana",
    stack:"Html",
    github:"Url",
    netlify:"Url",
    img:"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
  },
  {
    id: 6,
    title:"Banana",
    stack:"Html",
    github:"Url",
    netlify:"Url",
    img:"https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg"
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