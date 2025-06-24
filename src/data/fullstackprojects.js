import Images from '../assets/images';

export const fullStackProjects = [

  
  
  {
    "id": 1,
    "name": "Cloudinary Upload/Delete",
    "technologies": "MongoDB, Express, Vue, Node.js",
    "images": [Images.AiImagesScreen],
    "projectLink": "https://cloudinary-upload-delete-1.onrender.com/",
    "githubLink": "https://github.com/HelleFH/cloudinary-upload-delete",
    "buttonText": "View Project",
    "githubButtonText": "GitHub",
    "descriptionHeader": "Image Management App using Vue.js and Cloudinary",
    "description": "A full-stack image management application built with Vue and Express. Users can upload and delete images via Cloudinary API integration. Secure deletion is handled through unique delete tokens, ensuring safe media operations.",
    "technologiesMore": [
      "MongoDB",
      "Express",
      "Vue",
      "Node.js",
      "Cloudinary",
      "RESTful API",
      "Multer",
      "Dotenv",
      "Axios"
    ],
    "projectDetails": [
      "Vue frontend for intuitive image uploads and deletions",
      "Cloudinary API used for image hosting, token-based deletion",
      "Express.js server with Multer middleware for handling file uploads",
      "Environment variables for secure API key management",
      "MongoDB used for storing image metadata (if needed)",
      "Clean, responsive UI with visual image previews",
      "Built with scalability and simplicity in mind"
    ]
  }
,

{
  "id": 2,
  "name": "MEVN Cart",
  "technologies": "MongoDB, Express, Vue, Node.js",
  "images": [Images.MEVNCartScreen],
  "projectLink": "https://shopping-cart-master-1-5ylu.onrender.com/",
  "githubLink": "https://github.com/hellefh/shopping-cart",
  "buttonText": "View Project",
  "githubButtonText": "GitHub",
  "descriptionHeader": "MEVN Stack Shopping Cart with Cart Storage and User Authentication",
  "description": "A full-stack shopping cart app built with the MEVN stack. Users can sign up, log in securely, and manage a persistent shopping cart. Includes real-time form validation, cart updates, and detailed product pages.",
  "username": "hellefruergaard@mevn-shop.com",
  "password": "password123",
  "technologiesMore": [
    "MongoDB",
    "Express",
    "Vue",
    "Node.js",
    "RESTful API",
    "Multer",
    "Zustand",
    "Formik",
    "Yup",
    "Bcrypt",
    "Jsonwebtoken"
  ],
  "projectDetails": [
    "User authentication (signup, login, logout)",
    "Secure password handling with Bcrypt",
    "JWT-based session management",
    "Form validation using Formik and Yup",
    "Cart features: add, remove, update products",
    "Product detail view with dynamic routing",
    "State managed with Zustand",
    "Vue and TailwindCSS for responsive UI"
  ]
}
,

{
  "id": 3,
  "name": "Monty Hall",
  "technologies": "Flask, JavaScript, HTML, CSS, p5.js",
  "images": [Images.MontyHallScreen],
  "projectLink": "https://monty-hall-explained.onrender.com",
  "githubLink": "https://github.com/HelleFH/monty-hall-simulator",
  "buttonText": "View Project",
  "githubButtonText": "GitHub",
  "descriptionHeader": "Interactive Monty Hall Simulation and Game",
  "description": "A dual-experience app where users can simulate the Monty Hall problem statistically using Python and experience it interactively through a JavaScript-based game. Great for exploring probability theory and decision-making under uncertainty.",
  "technologiesMore": [
    "Flask",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "p5.js",
    "AJAX",
    "Canva (animation)",
    "JSON"
  ],
  "projectDetails": [
    "Flask backend that simulates 'stay', 'switch', and 'random' strategies over user-defined trials",
    "Returns simulation data including win rates and progression history",
    "JavaScript game built with p5.js for interactive Monty Hall gameplay",
    "Auto mode option to watch randomized plays in sequence",
    "Integrated lightweight animation from Canva for added visual appeal",
    "Intuitive UI prompts for switching/staying decisions",
    "Statistics persist between sessions using local storage",
    "Perfect mix of math, logic, and user interaction for learning"
  ]
}
,

    {
      id: 4,
      name: "News Site",
      technologies: "HTML, CSS, JS",
      images: [Images.NewsSiteScreen],
      projectLink: "https://helle-avis-site.onrender.com/",
      githubLink: "https://github.com/HelleFH/Helle-avis-site/tree/main",
      buttonText: "View Project",
      githubButtonText: "GitHub",
      descriptionHeader: "Made with Vanilla JS",
      description: "A news website for Copenhagen, built with vanilla JavaScript.",
      technologiesMore: ["JavaScript"]
    },
    {
      id: 5,
      name: "Netflix Clone",
      technologies: "JavaScript",
      images: [Images.NetflixScreen],
      projectLink: "https://hellefh.github.io/Netflix-clone-main/",
      githubLink: "https://github.com/HelleFH/Netflix-clone-main",
      buttonText: "View Project",
      githubButtonText: "GitHub",
      descriptionHeader: "Netflix-like streaming platform clone",
      description: "Netflix Clone is a web application that replicates the user interface and functionalities of Netflix.",
      technologiesMore: ["JavaScript"]
    },
    {
      id: 6,
      name: "Lightbox Gallery",
      technologies: "JQuery",
      images: [Images.DinosaursScreen],
      projectLink: "https://hellefh.github.io/Lightbox-gallery/",
      githubLink: "https://github.com/hellefh/Lightbox-gallery",
      buttonText: "View Project",
      githubButtonText: "GitHub",
      descriptionHeader: "Interactive image gallery with JQuery",
      description: "A simple site that showcases an interactive image gallery using JQuery showing AI images of dinosaurs.",
      technologiesMore: ["JQuery"]
    },
    {
      id: 7,
      name: "Front Page",
      technologies: "HTML, CSS",
      images: [Images.LegeKrogenScreen],
      projectLink: "https://hellefh.github.io/Legekrogen/",
      githubLink: "https://github.com/hellefh/legekrogen",
      buttonText: "View Project",
      githubButtonText: "GitHub",
      descriptionHeader: "Simple front page for Web Shop using HTML and CSS",
      description: "CSS and HTML for a webshop. It showcases a basic online shop layout with product listings.",
      technologiesMore: ["HTML", "CSS"]
    },
];
