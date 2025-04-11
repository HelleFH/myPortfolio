import Images from './assets/images'

export const fullStackProjects = [
  {
    id: 1,
    name: "React Store",
    technologies: "Firebase, React",
    images: [Images.ClothesStoreScreen],
    projectLink: "https://react-clothes-store.onrender.com/",
    githubLink: "https://github.com/HelleFH/react-clothes-store",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "A React Shop with a Firebase Backend and Admin Panel",
    description:
      "This is an e-commerce store built with React and integrated with Firebase for authentication and database management.",
    technologiesMore: ["Vite", "Formik", "Moment", "Yup", "Redux", "Enzyme"],
    username: "duser7707@gmail.com",
    password: "Demopassword123",
    adminUsername: "dmndmuser@gmail.com",
    adminPassword: "Demopassword123",
    projectDetails: `
      Admin CRUD operations.
      Firebase authentication.
      Firebase auth provider authentication.
      Account creation and edit.
    `,
  },
  {
    id: 2,
    name: "MERN Listings",
    technologies: "MongoDB, Express, React, Node.js",
    images: [Images.ListingScreen],
    projectLink: "https://react-listings-1.onrender.com/",
    githubLink: "https://github.com/HelleFH/react-listings",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Holiday Home Listings using MERN Stack",
    description:
      "A MERN stack application for adding listings with images, titles, descriptions, and locations. The frontend is built using React.js with Bootstrap for styling.",
    technologiesMore: [
      "Vite",
      "Bootstrap",
      "Nodemon",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "RESTful API",
    ],
    projectDetails: `
      This application allows users to upload, edit, and delete listings seamlessly in real-time. It is built with a MERN stack, enabling full-stack functionality and a smooth user experience. The core functionality revolves around integrating Cloudinary for handling image uploads, providing an efficient and scalable solution for managing media files.
    `,
  },
  {
    id: 3,
    name: "Cloudinary Upload/Delete",
    technologies: "MongoDB, Express, Vue, Node.js",
    images: [Images.AiImagesScreen],
    projectLink: "https://cloudinary-upload-delete-1.onrender.com/",
    githubLink: "https://github.com/HelleFH/cloudinary-upload-delete",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Image management with Cloudinary API",
    description:
      "This project is a web application for uploading and deleting images using the Cloudinary API.",
    technologiesMore: [
      "MongoDB",
      "Express",
      "Vue",
      "Node.js",
      "Cloudinary",
      "RESTful API",
    ],
    projectDetails: `
      This project allows users to upload and delete images from Cloudinary. It is built using Express.js for the server-side and Vue.js for the client-side. The application generates a delete token upon image upload, which is used to securely delete images from Cloudinary.
    `,
  },
  {
    id: 4,
    name: "MEVN Cart",
    technologies: "MongoDB, Express, Vue, Node.js",
    images: [Images.MEVNCartScreen],
    projectLink: "https://shopping-cart-master-1-5ylu.onrender.com/",
    githubLink: "https://github.com/hellefh/shopping-cart",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader:
      "MEVN Stack Shopping Cart with Cart Storage and User Authentication",
    description:
      "This shopping cart application, built with the MEVN stack, allows users to securely log in and manage their shopping cart.",
    username: "hellefruergaard@mevn-shop.com",
    password: "password123",
    technologiesMore: [
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
      "Jsonwebtoken",
    ],
    projectDetails: `
      User authentication (signup, login, logout).
      Form validation.
      Add products to the shopping cart.
      Manage the shopping cart (add, remove, update items).
      Product detail page.
    `,
  },
  {
    id: 5,
    name: "MERN Plant Calendar",
    technologies: "MongoDB, Express, React, Node.js",
    images: [Images.DesignIcon], // ← I didn’t find calendar-screen.png in your imports — change this if needed
    projectLink: "https://plant-calendar-1-zhbz.onrender.com",
    githubLink: "https://github.com/HelleFH/Plant-calendar",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "Plant Calendar and Reminder System with MERN Stack",
    description:
      "Work in progress! App made to track and manage plants. Users can add plants manually or search via external API.",
    username: "Hellefruergaard@plantcalendar.com",
    password: "fruergaard",
    technologiesMore: [
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
      "Moment",
    ],
    projectDetails: `
      User Management:
      - Sign Up: New users can create an account with a username, email, and password.
      - Add Plant: Users can add new plants by providing details such as plant name, species, date acquired, and a photo.
      - View Plants: Users can view a list of their plants with basic details and photos.
      - Edit/Delete Plants: Users can edit plant details or remove plants from their collection.

      Updates and Tracking:
      - Add Updates: Users can log updates for each plant, including notes, photos, and dates to track growth and health.
      - View Updates: Users can view a timeline of updates for each plant, helping them to monitor progress over time.
      - Edit/Delete Updates: Users can modify or remove updates.
    `,
  },
  {
    id: 6,
    name: "The Monty Hall Problem",
    technologies: "JQuery, Python, Chart.js",
    images: [Images.MontyHallScreen],
    projectLink: "https://monty-hall-explained.onrender.com/",
    githubLink: "https://github.com/HelleFH/product-page",
    buttonText: "View Project",
    githubButtonText: "GitHub",
    descriptionHeader: "A site where users can read about and play the Monty Hall Game",
    description:
      "The Monty Hall Problem is a famous counterintuitive statistics problem.",
    technologiesMore: ["Flask", "JQuery", "Python", "Chart.js"],
    projectDetails: `
      A site where users can learn about and play the Monty Hall Game. 
      The site explains the problem and provides an interactive game where users can simulate the Monty Hall problem and analyze the outcomes.
    `,
  },
];
