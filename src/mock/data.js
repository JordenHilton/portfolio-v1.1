import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jorden', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jorden',
  subtitle: 'I\'m a Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'dogs.jpeg',
  paragraphOne: 'Front-End Web Developer - Saint Louis, Missouri',
  paragraphTwo: 'I began building in late 2019.  Since then I have developed experience using the following tools: HTML, CSS, Bootstrap, SCSS, Javascript, Node.js.  Currently I am learning the React framework',
  paragraphThree: 'When not coding I enjoy spending time with my two puppies.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'photography.jpg',
    title: 'Photographer Site',
    info: 'This is a single page Photographers site for showcasing work and displaying contact information.  UI is built out in a mobile first design.',
    info2: '',
    url: 'https://jordenhilton.github.io/photography/',
    repo: 'https://github.com/JordenHilton/weatherapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lyrical.jpg',
    title: 'Lyric Word Count & Search',
    info: 'This SPA stores songs and allows the user to view word stats of each stored song.',
    info2: '',
    url: 'https://jordenhilton.github.io/notary/',
    repo: 'https://github.com/JordenHilton/notary', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Finger Lickin\' Chicken',
    info: 'This is a single page restaurant home page.  This responsive site showcases the businesses offerings to potential consumers.  This UI is built out using React Components.',
    info2: '',
    url: 'https://jordenhilton.github.io/chickenwebsite/',
    repo: 'https://github.com/JordenHilton/chickenwebsite', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Weather App',
    info: 'This is a single page weather application.  The users city-search will fetch current weather data from the openweathermap API and return current conditions to the DOM.',
    info2: '',
    url: 'https://jordenhilton.github.io/weatherapp/',
    repo: 'https://github.com/JordenHilton/weatherapp', // if no repo, the button will not show up
  },
  
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
