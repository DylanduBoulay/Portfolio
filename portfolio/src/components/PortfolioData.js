import img1 from "../assets/images/projects/img1.jpg";
import img2 from "../assets/images/projects/img2.jpg";
import img3 from "../assets/images/projects/img3.jpg";
import img4 from "../assets/images/projects/img4.jpg";
import img5 from "../assets/images/projects/img5.jpg";
import img6 from "../assets/images/projects/img6.jpg";
import img7 from "../assets/images/projects/img7.jpg";
import img8 from "../assets/images/projects/img8.jpg";
import img9 from "../assets/images/projects/img9.jpg";
import img10 from "../assets/images/projects/img10.jpg";

     


const PortfolioData = [
    {
        image: img1,
        title: "IT Professional Project",
        tldr: "A team based, VR Boxing (+ Virtuix Omniwalker), project for our clients, with guidance of our supervisor. ",
        description: "Omniwalker Project: Designed to rehabillitate Parkinsons patients by using a VR headset (Quest 2) to stimulate arm movement using a virtual environment and incorporate social interaction." 
        + "The clients problem was that: The most enjoyment between the players came from interacting with each other, even if the game was single player. As an extension on the Neuromender project (Neuromender consisted of only single player games, using the Kinect) we were tasked with incorporating social interaction into game."
        + " We had to make a boxing game and to meet the criteria we were requested to add multiplayer. We explored some of the technologies available, we stared with Mirror, but ultimately settled on Photon."
        + " In conjunction with the multiplayer we were tasked with creating a lobby system, so that players could join and leave the game at will."
        + " Among the criteria was also, creating a single player mode. For this we settled on timed target practice. Throughout the gamemode, targets would popup with a corresponding letter to inform the user which hand to hit which target with."
        + " Additionally, the controllers were designed to track vector3 data + quaternion data to be streamed into a database for further analysis from the clinician. The game would be setup using the clinician web interface, also made by our group, to specify the game parameters for the player." ,
        AllMedia: [img1, img2],
        technologies: " Unity, C#, Quest 2 VR headset, Photon, SQL, PHP, JSON, AJAX, Github",
        link: "",
    },
    {
        image: img4,
        title: "Dementia Project/App",
        tldr: "",
        description: "A project designed to help people with dementia to remember things. They would store information on an interactive map and place markets of relevant people or tasks they were to do.",
        AllMedia: [],
        technologies: " C#, GMaps API, LINQ, XML/SOAP",
        link: "",
    },
    {
        image: img3,
        title: "Dementia Project - Extension",
        tldr: "A project designed to help people with dementia to remember things, storing helpers in a database and linking them with the user. As well as API interaction with a social media platform to help the user stay connected with their helper and circle of people.",
        description: "The solution was to create a system that would help them remember things, and also help them stay connected with their circle of people. The system would be a mobile app that would allow the user to create, remove or edit their helpers, and link them with the user account. The app would also connect with the users Twitter Account to allow further interaction",
        AllMedia: [],
        technologies: " ASP.net, C#, CSHTML, CSS, SQL, Twitter APIS, LINQ, XML/SOAP",
        link: "",
    },
    
    {
        image: img5,
        title: "Portfolio Website v1",
        tldr: "A simple portfolio website using basic html, css and javascript.",
        description: "A website designed to showcase my skills and projects. It was designed to be a single page website with a navbar that would scroll to the relevant section.", 
        AllMedia: [],
        technologies: " HTML, CSS, Javascript, UNIX for FTP and hosting",
        link: "",
    },
    {
        image: img2,
        title: "Portfolio Website v2 (this website)",
        tldr: "A portfolio website using react, bootstrap and react-bootstrap.",
        description: "A website designed to showcase my skills and projects. It was designed to be a single page website with a navbar that would scroll to the relevant section. I wanted to create more animated website compared to V1 and took liberty in exploring different libraries/frameworks to handle what I wanted. I settled on React and searched the React libraries and watched a few tutorials. While I am pleased with the current result, I want to dive further into what React can really do.",
        AllMedia: [],
        technologies: " React, Bootstrap, React-Bootstrap, Javascript, Emailjs, html, css, Javascript, Github",
        link: "",
    },
    {
        image: img6,
        title: "3D Model - Simple objects",
        tldr: "Simple props made in Maya. ",
        description: "A collection of simple 3D models, a cask, a crate, an oil drum and a hammer. Each prop was textured using Adobe Photoshop to create the Normal, diffuse and roughness maps.",
        AllMedia: [],
        technologies: " Maya 2022, Adobe Photoshop",
        link: "",
    },
    {
        image: img7 ,
        title: "3D Model - Buildings",
        tldr: "A collection of buildins and Props. ",
        description: "A collection of buildings, one simple and one complex in design as well as a gattling gun and sandbags, each one is textured using a combination of simple textures or diffuse, normal and height maps.",
        AllMedia: [],
        technologies: " Maya 2022, Adobe Photoshop",
        link: "",
    },
    {
        image: img8,
        title: "3D Model - Spaceship",
        tldr: "A spaceship model made in Maya",
        description: "A spaceship made of simple and complex shapes, textured using a combination of simple textures or diffuse, normal and height maps. It was based off another design/tutorial that I found online but I wanted to make it my own so I deviated a bit.",
        AllMedia: [],
        technologies: " Maya 2022, Adobe Photoshop",
        link: "",
    },
    {
        image: img9,
        title: "Doom mod - Map",
        tldr: "A map for the game Doom, designed to be a mini-slaughter map using GZDoom specific features such as line sector portals, 3D floors and slopes. ",
        description: "A single map made for Doom. The intention of the mod was to gather playtest data from playtesters, I put my map on Doomworld for feedback and playtesting which can be found below. I was given freedom to select a game to mod for my uni class, I chose Doom as I have always loved it since I was a kid. It was super cool to not only make the map but to be able to get others to test it out as well.",
        AllMedia: [],
        technologies: " GZDoom, Ultimate Doom Builder, Slade 3",
        link: "https://www.doomworld.com/forum/topic/132070-doom-map-uni-project-playtesters-wanted/",
    }
]

export default PortfolioData