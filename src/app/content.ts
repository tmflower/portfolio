const content = {
  artifact1: {
    title: "Static Homepages",
    employer: "Wells Fargo",
    summary:
      "Wrote all front-end code for 4 new versions of a static homepage for the Wells Fargo public site with a modern, responsive look & feel that create a consistent, frictionless user experience in the event of a service outage affecting the standard homepages.",
    techStack: "HTML, CSS, Javascript",
    link: "",
  },
  artifact2: {
    title: "ADA Defect Fixes",
    employer: "Wells Fargo",
    summary:
      "Updated front-end code to ensure ADA and WCAG compliance standards were met or exceeded for 14 known defects on the Wells Fargo public site. In this example, the search button focus indicator lacked sufficient color contrast for keyboard navigation users. Other examples include adding aria roles and attributes, correcting language attributes, and adding missing focus indicators.",
    techStack: "HTML, CSS, Javascript, React",
    link: "https://www.wellsfargo.com/checking/premier/",
  },
  artifact3: {
    title: "New Feedback Component",
    employer: "Wells Fargo",
    summary:
      "Wrote front-end code for a new user feedback component to replace the existing one on the Wells Fargo public site, in order to match the updated look and feel of the newer responsive pages.",
    techStack: "HTML & CSS",
    link: "https://www.wellsfargo.com/mortgage/",
  },
  artifact4: {
    title: "Heartbeats Landing Page & Signup Flow",
    employer: "Path",
    summary:
      "Designed and built UI and signup functionality for Heartbeats, a greenfield single-page web application making grief support services accessible to the general public. Signup flow consists of: passwordless authentication using Auth0's Authentication API, an intake form for self-referred users, a welcome text sent using Twilio's Conversations API, and a notification sent to a grief navigator that a new referral has been assigned. Following signup, grief navigators can access referral intake information and continue communicating via text message on Heartbeats' partner app, Carehub (see next item below).",
    techStack:
      "React, Typescript, Tailwind, Next.js, Postgres, Wundergraph, GraphQL",
    link: "https://care.missingpiecesgrief.org/heartbeats",
  },
  artifact5: {
    title: "CareHub Features & Components",
    employer: "Path",
    summary:
      "Built, refined, and debugged new features and components for CareHub, a greenfield single-page web application that facilitates case management for grief support workers. Created customizable, reusable components for use across the app, including tabs, confirmation dialog, and radio button group, reducing the need for duplicate code. New features include sorting and pagination of referrals lists, customized filters to display referrals according to selected criteria, forms to enable adding and updating details for each referral, acomments section for recording notes for each referral, and a notifications feature to prompt actions based on the status of each referral",
    techStack:
      "React, Typescript, Tailwind, Next.js, Postgres, Wundergraph, GraphQL",
    link: "",
  },
  about: {
    summary:
      "I am a software engineer with 1+ year of professional experience building, testing, and debugging web applications. Software engineering is my second career; I previously worked as an elementary classroom teacher. Like so many other teachers, I found that the pandemic created a shift in the educational landscape that removed much of the joy I had always found in teaching. In exploring alternative careers, I discovered the world of coding and was immediately hooked. I enrolled in an online program for software engineering while I continued teaching full time. About one hard-earned year later, I completed the program and was fortunate to quickly land my first position as a front end developer with Wells Fargo bank. It was a wonderful learning opportunity with a great team, but continuing would have required me to relocate. So, when another opportunity arose that would enable me to continue working remotely, as well as grow my full stack skills, it was a no-brainer. Today I work as a full-stack software engineer for a small startup that builds software for organizations that provide grief support services. I feel incredibly fortunate to have found myself doing work that I love doing and that has a meaningful impact on people's lives.",
    skills: {
      heading:
        "I am continually learning new skills; below are the languages, frameworks, and tools that I am currently most familiar with.",
      skills: [
        "JavaScript",
        "Typescript",
        "React",
        "HTML",
        "CSS",
        "Tailwind",
        "Python",
        "SQL",
        "NextJS",
        "Node",
        "Postgres",
        "Flask",
        "Firestore",
        "GraphQL",
        "Wundergraph",
      ],
    },
    values: {
      heading:
        "Now that I've had a bit of experience in the software industry, it is clear to me how important it is for an employer and employee to be the right fit for one another. Some of the things that I value the most in a work environment are:",
      values: [
        "The opportunity to learn new skills and put them into practice",
        "Quality mentorship and feedback from senior engineers",
        "The opportunity to pair program with more experienced developers",
        "A culture that feels inclusive of people from all backgrounds",
        "The ability to work remotely, as I do not wish to relocate. (That said, I also find great value in face-to-face interaction and would be happy to travel periodically for in-person events.)",
      ],
    },
  },
};

export default content;
