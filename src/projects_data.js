// src/data/projectsData.js
import baatCheet from "./assets/Projects/baatCheet.png";
import beyondChat from "./assets/Projects/beyondChat.png";
import dekhlo from "./assets/Projects/dekhlo.png";
import Docs from "./assets/Projects/Docs.png";
import Groot from "./assets/Projects/Groot.png";

const projectsData = [
  {
    imgPath: `${dekhlo}`,
    title: "Dekhlo",
    description:
      "A YouTube-inspired video platform built with React and Material-UI. Features personalized recommendations, efficient search, and video management using MongoDB Atlas—completely independent of the YouTube API.",
    ghLink: "https://github.com/saffronAayush/Youtube",
    demoLink: "https://dekhlo.vercel.app/",
  },
  {
    imgPath: `${Docs}`,
    title: "Docs",
    description:
      "A collaborative real-time document editor like Google Docs, built with Next.js, Tailwind CSS, Clerk, Convex, Liveblocks, and Tiptap. Features multi-user editing, comments, tagging, organization-based access, and export to multiple formats including PDF, HTML, JSON, and text.",
    ghLink: "https://github.com/saffronAayush/docs",
    demoLink: "https://docs-iota-navy.vercel.app/",
  },
  {
    imgPath: `${Groot}`,
    title: "Groot - A Git like VCS",
    description:
      "Groot is a minimalist, CLI-based version control system built with Node.js, inspired by Git. It allows you to track file changes, manage commits, view diffs, and more — all while keeping things educational and simple.",
    ghLink: "https://github.com/saffronAayush/Groot---Our-personal-VCS",
    demoLink: null,
  },
  {
    imgPath: `${baatCheet}`,
    title: "BaatCheet",
    description:
      "A full-fledged real-time chat application built with React, Redux, Vite, Tailwind CSS, and Socket.io. Supports group chats, seamless messaging, and an intuitive UI for smooth user experience.",
    ghLink: "https://github.com/saffronAayush/ChatAppClient",
    demoLink: "https://baatcheet-ten.vercel.app/",
  },
  {
    imgPath: `${beyondChat}`,
    title: "BeyondChat",
    description:
      "An AI-enhanced customer support interface built with Vite, Material-UI, and Framer Motion. Features smooth animations, fully responsive and beautiful UI, visualizing client interactions with static data, smart feedback handling, and AI assistant integration.",
    ghLink: "https://github.com/saffronAayush/BeyondChat",
    demoLink: "https://beyond-chat-ten.vercel.app/",
  },
];

export default projectsData;
