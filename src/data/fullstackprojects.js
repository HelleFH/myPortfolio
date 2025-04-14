import Images from '../assets/images';

export const fullStackProjects = [
  {
    "id": 1,
    "name": "React Store",
    "technologies": "Firebase, React",
    "images": [Images.ClothesStoreScreen],
    "projectLink": "https://react-clothes-store.onrender.com/",
    "githubLink": "https://github.com/HelleFH/react-clothes-store",
    "buttonText": "View Project",
    "githubButtonText": "GitHub",
    "descriptionHeader": "Full-Stack E-Commerce App with Firebase Backend and Admin Panel",
    "description": "A full-stack e-commerce application built with React and Firebase. It includes user authentication, real-time Firestore database integration, and a secure admin panel for managing products. Users can register, log in, edit their profiles, and browse the product catalog. Admins have full CRUD access for store inventory.",
    "technologiesMore": [
      "Vite",
      "Formik",
      "Moment",
      "Yup",
      "Redux",
      "Enzyme"
    ],
    "username": "duser7707@gmail.com",
    "password": "Demopassword123",
    "adminUsername": "dmndmuser@gmail.com",
    "adminPassword": "Demopassword123",
    "projectDetails": [
      "Admin panel with full CRUD operations (products, inventory)",
      "Firebase authentication with email/password and provider support",
      "Real-time Firestore database integration",
      "Form validation using Formik and Yup",
      "Global state management with Redux",
      "Responsive design"
    ]
  },

  {
    "id": 2,
    "name": "MERN Listings",
    "technologies": "MongoDB, Express, React, Node.js",
    "images": [Images.ListingScreen],
    "projectLink": "https://react-listings-1.onrender.com/",
    "githubLink": "https://github.com/HelleFH/react-listings",
    "buttonText": "View Project",
    "githubButtonText": "GitHub",
    "descriptionHeader": "Holiday Home Listings App using the MERN Stack",
    "description": "A full-stack listings application built with the MERN stack. Users can create, update, and delete listings including image uploads, titles, descriptions, and location information. The app uses React for the frontend with Bootstrap styling, and a Node.js/Express backend connected to a MongoDB database.",
    "technologiesMore": [
      "Vite",
      "Bootstrap",
      "Nodemon",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "RESTful API",
      "Cloudinary"
    ],
    "projectDetails": [
      "Users can upload, edit, and delete holiday home listings in real time",
      "Integrated with Cloudinary for image upload and hosting",
      "Responsive frontend built with React and styled using Bootstrap",
      "Backend API built with Express and MongoDB for data persistence",
      "RESTful architecture with secure routes and error handling",
      "Modular and scalable codebase using environment variables and middleware"
    ]
  },
  
  {
    "id": 3,
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
  "id": 4,
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
  "id": 5,
  "name": "MERN Plant Calendar",
  "technologies": "MongoDB, Express, React, Node.js",
  "images": [Images.CalendarScreen], 
  "projectLink": "https://plant-calendar-1-zhbz.onrender.com",
  "githubLink": "https://github.com/HelleFH/Plant-calendar",
  "buttonText": "View Project",
  "githubButtonText": "GitHub",
  "descriptionHeader": "Plant Calendar and Reminder System with MERN Stack",
  "description": "Work in progress! This app helps users manage plant collections by adding, tracking, and updating plant care tasks. Users can also search for plants via external API.",
  "username": "Hellefruergaard@plantcalendar.com",
  "password": "fruergaard",
  "technologiesMore": [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Axios",
    "RESTful API",
    "Bcryptjs",
    "Cloudinary",
    "Multer",
    "Vite",
    "Moment"
  ],
  "projectDetails": [
    "User authentication: Sign up, login, logout",
    "Secure password hashing with Bcryptjs",
    "Add new plants with name, species, acquisition date, and photos",
    "Search plants using an external API",
    "View, edit, or delete plants from collection",
    "Add and manage care reminders with type, frequency, and due date",
    "Log and track plant growth updates with notes and photos",
    "View timeline of updates per plant for historical tracking",
    "Built with Vite and styled using MUI and custom SCSS"
  ]
},

{
  "id": 6,
  "name": "Monty Hall",
  "technologies": "Flask, JavaScript, HTML, CSS, p5.js",
  "images": [Images.MontyHallScreen],
  "projectLink": "https://monty-hall-explained.onrender.com",
  "githubLink": "https://github.com/HelleFH/monty-hall-simulator",
  "buttonText": "Play Game",
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
];
