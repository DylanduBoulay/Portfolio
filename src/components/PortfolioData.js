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
import img11 from "../assets/images/projects/img11.jpg";
import img12 from "../assets/images/projects/img12.jpg";
import img13 from "../assets/images/projects/img13.jpg";
import img14 from "../assets/images/projects/img14.jpg";
import img15 from "../assets/images/projects/img15.jpg";
import img16 from "../assets/images/projects/img16.jpg";
import img17 from "../assets/images/projects/img17.jpg";
import img18 from "../assets/images/projects/img18.jpg";
import img19 from "../assets/images/projects/img19.jpg";
import img20 from "../assets/images/projects/img20.jpg";
import img21 from "../assets/images/projects/img21.png";
import img22 from "../assets/images/projects/img22.png";
import img23 from "../assets/images/projects/img23.png";
import img24 from "../assets/images/projects/img24.jpg";
import img25 from "../assets/images/projects/img25.jpg";
import img26 from "../assets/images/projects/img26.jpg";
import img27 from "../assets/images/projects/img27.jpg";
import img28 from "../assets/images/projects/img28.jpg";
import img29 from "../assets/images/projects/img29.jpg";
import img30 from "../assets/images/projects/img30.jpg";
import img31 from "../assets/images/projects/img31.jpg";
import img32 from "../assets/images/projects/img32.jpg";
import img33 from "../assets/images/projects/img33.jpg";
import img34 from "../assets/images/projects/img34.jpg";
import img35 from "../assets/images/projects/img35.jpg";
import img36 from "../assets/images/projects/img36.jpg";
import img37 from "../assets/images/projects/img37.jpg";
import img38 from "../assets/images/projects/img38.jpg";
import img39 from "../assets/images/projects/img39.jpg";

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
        + " Additionally, the controllers were designed to track vector3 data + quaternion data to be streamed into a database for further analysis from the clinician. The game would be setup using the clinician web interface, also made by our group, to specify the game parameters for the player. The link below will have some footage and some more details about the project." ,
        AllMedia: [img1, img29, img30,img31],
        technologies: "Unity, C#, Quest 2 VR headset, Photon, SQL, PHP, JSON, AJAX, Github",
        link: "https://drive.google.com/drive/folders/1ssZCUmt2KIaxhARro3w2hwki9EQ5s5z3?usp=share_link",
    },
    {
        image: img36,
        title: "Music Streaming Service",
        tldr: "A music streaming service, with a focus on the backend, using PHP and SQL. The requirement was to use the tools: PHP and SQL to build a simple music streaming service as a single page application.",
        description: "A project that was to utilise PHP, SQL and REST to respond to the user interactions based on the website activity. The website was to be a single page application,"
        + " with the user being able to search for songs, artists and albums. The user would be able to create an account, login and logout. The user would be able to add songs to their playlist, and remove songs from their playlist. "
        + "The user would be able to view their playlist, and the songs in their playlist. The user would be able to view the songs, artists and albums in the database. The user would be able to view the songs, artists and albums in the database."
        + "The idea was to be able to scale the website up by adding additional functionality, streaming, digital VSTs, merch, etc. but remains outside of my expertise.",
        AllMedia: [img36, img37, img38, img39],
        technologies: "PHP, SQL, REST, AJAX, JSON",
        link: "",
    },



    {
        image: img32,
        title: "Narrative Driven Game Project",
        tldr: "A narrative driven game project, with a focus on the narrative and the story telling aspect of the game using Unity. The requirement was to use the tools: YarnSpinner and Probuilder to build a simple game.",
        description: "A narrative driven project whereby the game is driven by player choice, each choice will affect something in the backend, be it a boolean value or an increament/decrement. While the game is very limited"
        + " in what can and can't be done, the same logic applies to most (all?) games, 'if this, then this'. The mechanics are however, very simple, with 'E' as your main tool for interaction and quests done as mainly fetch quests (with some exceptions). "
        + "The world was to made using probuilder, which is a 3D modelling tool for Unity, and the dialogue was to be done using YarnSpinner, which is a dialogue tool for Unity. The game was to be made in 2/3 weeks among balancing my university units.",
        AllMedia: [img35, img33, img34],
        technologies: "Unity, C#, YarnSpinner, Probuilder, Github",
        link: "",
    },
    {
        image: img11,
        title: "Paper Prototype Game - High Noon",
        tldr: "A paper prototype for a game called High Noon, a 2D top down, turn-based shooter. This was to attempt game development from a theoretical approach with changes applied via iterative design.",
        description: "Would be better to see the Game Design Doc in the link for the full log of Rules, Playtest data, closing thoughts etc.",
        technologies: "Paper, Pen, Pencil, Ruler, Eraser, Dice, Brain, Gun fingers,Playtesters",
        AllMedia: [img11],
        link: "https://drive.google.com/drive/folders/11E1sZpQTs1_AlNt0S3ofuEnh81CRsYAY?usp=sharing",
    },
    {
        image: img4,
        title: "Dementia Project/App",
        tldr: "A program designed to store and retrieve information input from the user on an interactive map to assists with the users memory (target is people with dementia).",
        description: "A project designed to help people with dementia to remember things. They would store information on an interactive map and place markets of relevant people or tasks they were to do. Events would be read and written to an XML file where the markers read are plotted on the map at startup. The user is able to interact with the map, much like google maps as it is using the same API. When they click on a marker, the information stored to that marker is displayed in the right-most tab.",
        AllMedia: [img4, img27, img28],
        technologies: " C#, GMaps API, LINQ, XML/SOAP",
        link: "",
    },
    {
        image: img3,
        title: "Dementia Project - Extension",
        tldr: "A project designed to help people with dementia to remember things, storing, updating, searching and removing helpers from a database and linking them with the user. As well as API interaction with a social media platform to help the user stay connected with their helper and circle of people.",
        description: "The solution was to create a system that would help them remember things, and also help them stay connected with their circle of people. The system would be a mobile app that would allow the user to create, remove or edit their helpers, and link them with the user account. The app would also connect with the users Twitter Account to allow further interaction",
        AllMedia: [img3,img24,img25,img26],
        technologies: " ASP.net, C#, CSHTML, CSS, SQL, Twitter APIS, LINQ, XML/SOAP",
        link: "",
    },
    
    {
        image: img5,
        title: "Portfolio Website v1",
        tldr: "A simple portfolio website using basic html, css and javascript.",
        description: "A static website detailing who I am and what I have done/am doing. The design was to be simple as it was more of an introduction to web development and the required programming languages.", 
        AllMedia: [img5],
        technologies: " HTML, CSS, Javascript, UNIX for FTP and hosting",
        link: "",
    },
    {
        image: img2,
        title: "Portfolio Website v2 (this website)",
        tldr: "A portfolio website using react, bootstrap and react-bootstrap.",
        description: "A website designed to showcase my skills and projects. It was designed to be a single page website with a navbar that would scroll to the relevant section. I wanted to create more animated website compared to V1 and took liberty in exploring different libraries/frameworks to handle what I wanted. I settled on React and searched the React libraries and watched a few tutorials. While I am pleased with the current result, I want to dive further into what React can really do. I also made the background.",
        AllMedia: [img2],
        technologies: " React-Bootstrap, Javascript, Emailjs, html, css, Javascript, Github",
        link: "",
    },
    {
        image: img6,
        title: "3D Model - Simple objects",
        tldr: "Simple props made in Maya. ",
        description: "A collection of simple 3D models, a cask, a crate, an oil drum and a hammer. Each prop was textured using Adobe Photoshop to create the Normal, diffuse and roughness maps. Each object had to be UV unwrapped and the textures were applied using the UV maps.",
        AllMedia: [img6,img12, img13, img14],
        technologies: " Maya 2022, Adobe Photoshop",
        link: "",
    },
    {
        image: img7 ,
        title: "3D Model - Buildings",
        tldr: "A collection of buildins and Props. ",
        description: "A collection of buildings, one simple and one complex in design as well as a gattling gun and sandbags, each one is textured using a combination of simple textures or diffuse, normal and height maps.",
        AllMedia: [img7, img15,img16,img17],
        technologies: " Maya 2022, Adobe Photoshop",
        link: "",
    },
    {
        image: img8,
        title: "3D Model - Spaceship",
        tldr: "A spaceship model made in Maya",
        description: "A spaceship made of simple and complex shapes, textured using a combination of simple textures or diffuse, normal and height maps. It was based off another design/tutorial that I found online but I wanted to make it my own so I deviated a bit.",
        AllMedia: [img8, img18, img19, img20],
        technologies: " Maya 2022, Adobe Photoshop",
        link: "",
    },
    {
        image: img9,
        title: "Doom mod - Map",
        tldr: "A map for the game Doom, designed to be a mini-slaughter map using GZDoom specific features such as line sector portals, 3D floors and slopes. ",
        description: "A single map made for Doom. The intention of the mod was to gather playtest data from playtesters, I put my map on Doomworld for feedback and playtesting which can be found below. I was given freedom to select a game to mod for my uni class, I chose Doom as I have always loved it since I was a kid. It was super cool to not only make the map but to be able to get others to test it out as well.",
        AllMedia: [img9, img21,img22,img23],
        technologies: " GZDoom, Ultimate Doom Builder, Slade 3",
        link: "https://www.doomworld.com/forum/topic/132070-doom-map-uni-project-playtesters-wanted/",
    },
    {
        image: img10,
        title: "Online store Page (in-progress/incomplete)",
        tldr: "A single page application of a fake store page made using HTML, CSS, Javascript, php, AJAX and SQL, complete with a database-backend.",
        description: "A store page for a company that sells a variety of products. The page is made using HTML, CSS, Javascript, php, AJAX and SQL, complete with a database-backend. The page is a single page application that uses AJAX to communicate with the database and retrieve the relevant information, it has login functionality (although it was never completely working to the acceptable standard), search functionalty and browsing. It does not have a cart or the mobile/cordova interface that was requested due to a lack of time mismanagement and hiccups in the project. This was done as a collaborative project from my uni class.",
        AllMedia: [img10],
        technologies: " HTML, CSS, Javascript, php, AJAX, SQL, Github",
        link: "",
    }
]

export default PortfolioData