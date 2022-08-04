import airbnb from "../assets/airbnb.PNG";
import disney from "../assets/disney.PNG";
import netflix from "../assets/netflix.PNG";
import amazon from "../assets/amazon.PNG";

const featureprojectData = [
  {
    feature: "Feature project",
    title: "Airbnb Clone",
    description:
      "This a real-time clone of Airbnb. It is completely responsive. It has everyting like destinations, star rating, calender etc. It got a real time map in the destinations.",
    technology: ["React", "Map box", "Netlify"],
    image: airbnb,
  },
  {
    feature: "Feature project",
    title: "Disney Clone",
    description:
      "A beautiful disney clone with a lot of animations and responsiveness. It got some real time features like authenitcation and movie trailer showcase.",
    technology: ["React", "Redux", "Styled Components", "Firebase"],
    image: disney,
  },
  {
    feature: "Feature project",
    title: "Netflix Clone",
    description:
      "Completely responsive netflix clone with login screen, profile scree and email authentication. It also includes checkout screen for subscription. I made it by fetching data from tmdb.",
    technology: ["React", "Redux", "Firebase", "TMDB"],
    image: netflix,
  },
  {
    feature: "Feature project",
    title: "Amazon Clone",
    description:
      "Completely responsive netflix clone with login screen, profile scree and email authentication. It also includes checkout screen for subscription. I made it by fetching data from tmdb.",
    technology: ["React", "Redux", "Firebase", "TMDB"],
    image: amazon,
  },
];

export default featureprojectData;
