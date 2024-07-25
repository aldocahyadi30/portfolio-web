import { LoadImages } from "../helper/LoadImage";

const avianMedicalImages = LoadImages(require.context('../assets/images/project/avian_medical', false, /\.(png|jpe?g|svg)$/));
const personalWebImages = LoadImages(require.context('../assets/images/project/personal_web', false, /\.(png|jpe?g|svg)$/));
const nanyangAppImages = require('../assets/images/project/nanyang_app.png');

export const project = [
  { 
    id: 1, 
    name: "Personal Web", 
    tech: ["react", "tailwind"], 
    desc: "", 
    github: "", 
    github2: "", 
    cover: personalWebImages['1.png'], 
    img: Object.values(personalWebImages), 
    featured: true 
  },
  { 
    id: 2, 
    name: "Nanyang App", 
    tech: ["flutter", "supabase"], 
    desc: "", 
    github: "", 
    github2: "", 
    cover: nanyangAppImages, 
    img: [nanyangAppImages], 
    featured: true 
  },
  {
    id: 3,
    name: "Avian Medical",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "",
    github: "",
    github2: "",
    cover: avianMedicalImages['1.png'],
    img: Object.values(avianMedicalImages),
    featured: true,
  },
];
