import { lang_icons, tool_icons } from "./Icons";

export const projects = [
  {
    id: 1,
    name: "readit",
    description:
      "A reddit clone with auth, posts, follow mechanism, can create communities follow them crud operations on post except update, nested comments like reddit and more",
    skillsUsed: [
      lang_icons.TypeScript,
      lang_icons.Postgres,
      tool_icons.React,
      tool_icons.Next,
      tool_icons.Tailwind,
      tool_icons.Docker,
    ],
    imgSrc:
      "https://github.com/Abhiram86/readit/blob/main/images/image.png?raw=true",

    pages: [],
    liveLink: null,
    sourceCode: "https://github.com/Abhiram86/readit",
  },
  {
    id: 2,
    name: "Docquer",
    description:
      "a simple ai chat application where you can upload files (certain types like pdf docx ppt etc) and ask questions simply a chatgpt clone with smaller features with groq's free api",
    skillsUsed: [
      lang_icons.TypeScript,
      lang_icons.Python,
      lang_icons.MongoDB,
      tool_icons.React,
      tool_icons.Tailwind,
    ],
    imgSrc:
      "https://github.com/Abhiram86/docquer/blob/main/images/chat_page.png?raw=true",
    pages: [
      "https://github.com/Abhiram86/Docquer/blob/main/images/home.png?raw=true",
      "https://github.com/Abhiram86/Docquer/blob/main/images/login.png?raw=true",
      "https://github.com/Abhiram86/Docquer/blob/main/images/profile.png?raw=true",
      "https://github.com/Abhiram86/Docquer/blob/main/images/chats.png?raw=true",
    ],
    liveLink: "https://docquer.vercel.app",
    sourceCode: "https://github.com/Abhiram86/docquer",
  },
  {
    id: 3,
    name: "Nakama",
    description:
      "A simple chat application with sockets for immediate messaging, can create chats follow them crud operations on chat and chat groups, simple profile and much more small features",
    skillsUsed: [
      lang_icons.TypeScript,
      lang_icons.MongoDB,
      tool_icons.React,
      tool_icons.Tailwind,
      tool_icons.Express,
    ],
    imgSrc: "https://github.com/Abhiram86/Nakama/raw/main/images/home.png",
    pages: [
      "https://github.com/Abhiram86/Nakama/raw/main/images/profile.png",
      "https://github.com/Abhiram86/Nakama/raw/main/images/groups.png",
      "https://github.com/Abhiram86/Nakama/raw/main/images/mGroups.png",
      "https://github.com/Abhiram86/Nakama/raw/main/images/mGroup.png",
    ],
    liveLink: null,
    sourceCode: "https://github.com/Abhiram86/Nakama",
  },
];
