import { LoadImages } from "../helper/LoadImage";

const avianMedicalImages = LoadImages(require.context("../assets/images/project/avian_medical", false, /\.(png|jpe?g|svg)$/));
const personalWebImages = LoadImages(require.context("../assets/images/project/personal_web", false, /\.(png|jpe?g|svg)$/));
const nanyangAppImages = LoadImages(require.context("../assets/images/project/nanyang_app", false, /\.(png|jpe?g|svg)$/));
const avianTickectQCImages = LoadImages(require.context("../assets/images/project/avian_ticket_qc", false, /\.(png|jpe?g|svg)$/));
const avianTicketSSMImages = LoadImages(require.context("../assets/images/project/avian_ticket_ssm", false, /\.(png|jpe?g|svg)$/));
const avianRPCImages = LoadImages(require.context("../assets/images/project/avian_rpc", false, /\.(png|jpe?g|svg)$/));
const avianAutonomousMaintenanceImages = LoadImages(require.context("../assets/images/project/avian_autonomous_maintenance", false, /\.(png|jpe?g|svg)$/));
const avianOEEMetalImages = LoadImages(require.context("../assets/images/project/avian_oee_metal", false, /\.(png|jpe?g|svg)$/));
const avianPQSImages = LoadImages(require.context("../assets/images/project/avian_pqs", false, /\.(png|jpe?g|svg)$/));
const avianRMPlanningImages = LoadImages(require.context("../assets/images/project/avian_rm_planning", false, /\.(png|jpe?g|svg)$/));
const adiwarnaImages = LoadImages(require.context("../assets/images/project/adiwarna", false, /\.(png|jpe?g|svg)$/));

export const project = [
  {
    id: 1,
    name: "Avian Ticket QC",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "Ticket QC is a website requested by the Operational division, Quality Control & Processing (QCP) department of PT. Avia Avian. This website aims to facilitate the teams within the division in managing their tasks.",
    github: "",
    github2: "",
    demo: "",
    cover: avianTickectQCImages["1.png"],
    img: Object.values(avianTickectQCImages),
    featured: false,
  },
  {
    id: 2,
    name: "Avian Ticket SSM",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "Ticket SSM is a website requested by the Strategic System Management (SSM) division  of PT. Avia Avian with the aim of facilitating users in submitting requests for Standard Operating Procedures (SOP) for new workflows or changes to existing SOPs. Through this platform, the SSM team can easily manage all incoming requests and store all related data in a centralized database. This makes it easier to manage and monitor the status of requests, as well as ensure the accuracy and security of the data.",
    github: "",
    github2: "",
    demo: "",
    cover: avianTicketSSMImages["1.png"],
    img: Object.values(avianTicketSSMImages),
    featured: false,
  },
  {
    id: 3,
    name: "Avian RPC",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "Avian RPC is a website requested by the Resin Production division  of PT. Avia Avian for recording the maintenance of Plant, Tandon, and Reactor cleanliness. This website aims to digitize maintenance records, making the process paperless and centralizing all data. By doing so, it simplifies data management, ensuring that all maintenance activities are accurately recorded and easily accessible. The centralized database helps in tracking the maintenance schedules, monitoring the status of each task, and maintaining the overall cleanliness standards efficiently. This website was designed to be used on tablet.",
    github: "",
    github2: "",
    demo: "",
    cover: avianRPCImages["1.png"],
    img: Object.values(avianRPCImages),
    featured: false,
  },
  {
    id: 4,
    name: "Avian Autonomous Maintenance",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "Autonomous Maintenance is a website requested by the Production division  of PT. Avia Avian, designed to record or checklist the condition of machine spare parts periodically. If any spare parts are found to be in poor condition, a maintenance request form can be generated. The website aims to digitize the recording of spare parts conditions and the creation of maintenance forms, streamlining the process and ensuring that maintenance issues are promptly addressed and documented. This website was designed to be used on tablet.",
    github: "",
    github2: "",
    demo: "",
    cover: avianAutonomousMaintenanceImages["1.png"],
    img: Object.values(avianAutonomousMaintenanceImages),
    featured: false,
  },
  {
    id: 5,
    name: "Avian Medical",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "Avian Medical is a website requested by the Operational division, HRGA department of PT. Avia Avian. Avian Medical was created to digitize their tasks such as health assessments, medical check-ups, management of health-related activities, and medicine stock management. With this website, all data is recorded digitally, making it easier to search for and use.",
    github: "",
    github2: "",
    demo: "",
    cover: avianMedicalImages["1.png"],
    img: Object.values(avianMedicalImages),
    featured: false,
  },
  {
    id: 6,
    name: "Avian OEE Metal",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "Avian OEE Metal is a website requested by the Production division of PT. Avia Avian to monitor and enhance the effectiveness of the can production machines at PT. Avia Avian. This project does not involve creating a new website but rather refactoring or updating the existing Avian OEE Metal site. The focus is on modernizing the UI/UX to meet the latest standards while ensuring that Laravel packages and versions remain current and up-to-date.",
    github: "",
    github2: "",
    demo: "",
    cover: avianOEEMetalImages["1.png"],
    img: Object.values(avianOEEMetalImages),
    featured: false,
  },
  {
    id: 7,
    name: "Nanyang App",
    tech: ["flutter", "supabase"],
    desc: "The Nanyang App is a comprehensive Human Resource Management System (HRMS) developed as my final project in college, with PT. Nanyang Bogajaya Industri as the subject of the project. This application streamlines various HR functions, making it easier for employees and administrators to manage essential tasks. It is designed to be accessible on both mobile and desktop platforms, ensuring flexibility and convenience.",
    github: "https://github.com/aldocahyadi30/nanyang_application",
    github2: "https://github.com/aldocahyadi30/nanyang_application_desktop",
    demo: "",
    cover: nanyangAppImages["1.png"],
    img: Object.values(nanyangAppImages),
    featured: true,
  },

  {
    id: 8,
    name: "Avian PQS",
    tech: ["laravel", "bootstrap", "vue", "mysql"],
    desc: "Avian PQS is a website designed to display the status of work orders (SPK). The platform provides real-time updates on the current status of each work order, allowing users to track progress and manage tasks efficiently.",
    github: "",
    github2: "",
    demo: "",
    cover: avianPQSImages["1.png"],
    img: Object.values(avianPQSImages),
    featured: false,
  },
  {
    id: 9,
    name: "Avian RM Planning",
    tech: ["laravel", "bootstrap", "mysql"],
    desc: "RM Planning is a website requested by the Production division for managing raw material stock and work order management (SPK). The website facilitates the efficient oversight of inventory levels for raw materials and the handling of work orders, ensuring streamlined operations and accurate tracking of production resources.",
    github: "",
    github2: "",
    demo: "",
    cover: avianRMPlanningImages["1.png"],
    img: Object.values(avianRMPlanningImages),
    featured: false,
  },
  {
    id: 10,
    name: "Personal Web",
    tech: ["react", "tailwind"],
    desc: "My personal website is a comprehensive showcase of my skills, projects, and professional journey. Built using React and Tailwind CSS, the website features a responsive and user-friendly design, ensuring a seamless experience across all devices. The site serves as a portfolio, highlighting my expertise in web and mobile application development, and provides insights into my background, education, and work experiences. It includes detailed sections for each of my projects, with descriptions and technologies used.",
    github: "https://github.com/aldocahyadi30/portfolio-web/",
    github2: "",
    demo: "",
    cover: personalWebImages["1.png"],
    img: Object.values(personalWebImages),
    featured: true,
  },
  {
    id: 11,
    name: "Adiwarna 2024",
    tech: ["react", "tailwind"],
    desc: "Adiwarna is an annual event hosted by Petra Christian University, showcasing the final assignments of Visual Communication Design students. I contributed to this project by developing the front end of the Adiwarna website, focusing on creating a visually appealing and user-friendly interface. The website plays a crucial role in presenting the students' work and supporting the broader goals of the event.",
    github: "https://github.com/albertirgi/Adiwarna",
    github2: "",
    demo: "https://adiwarna.vercel.app/",
    cover: adiwarnaImages["1.png"],
    img: Object.values(adiwarnaImages),
    featured: true,
  },
];

export const techs = [
  {
    id: 1,
    key: "html",
    name: "HTML",
  },
  {
    id: 2,
    key: "css",
    name: "CSS",
  },
  {
    id: 3,
    key: "js",
    name: "JavaScript",
  },
  {
    id: 4,
    key: "php",
    name: "PHP",
  },
  {
    id: 5,
    key: "python",
    name: "Python",
  },
  {
    id: 6,
    key: "dart",
    name: "Dart",
  },
  {
    id: 7,
    key: "firebase",
    name: "Firebase",
  },
  {
    id: 8,
    key: "supabase",
    name: "Supabase",
  },
  {
    id: 9,
    key: "github",
    name: "GitHub",
  },
  {
    id: 10,
    key: "mysql",
    name: "MySQL",
  },
  {
    id: 11,
    key: "postgres",
    name: "PostgreSQL",
  },
  {
    id: 12,
    key: "bootstrap",
    name: "Bootstrap",
  },
  {
    id: 13,
    key: "tailwind",
    name: "Tailwind",
  },
  {
    id: 14,
    key: "laravel",
    name: "Laravel",
  },
  {
    id: 15,
    key: "react",
    name: "React JS",
  },
  {
    id: 16,
    key: "flutter",
    name: "Flutter",
  },
];
