export const projects = [
  {
    id: "finsight",
    title: "FinSight",
    image1: "/portfolio/images/finsight1.jpg",
    image2: "/portfolio/images/finsight2.jpg",
    image3: "/portfolio/images/finsight3.jpg",
    year: "Q4 2025",
    description:
      "This project is a full-stack personal finance and investment tracking application developed as a team project, with primary emphasis on backend architecture and data handling. The backend is built with Node.js and Express, providing a REST API structured around clear separation of routing, services, and data access. PostgreSQL is used as the primary database, with Supabase handling authentication and row-level security to ensure safe, user-isolated financial data. An ORM layer (Prisma) is used where compatible with the security model to define core entities and relationships, while maintaining a consistent repository-style abstraction even when direct Supabase access is required. Market price data is fetched by a separate Python service using the yfinance API, allowing external data collection to remain decoupled from the main application logic. A React frontend consumes the API to display dashboards, portfolios, and performance metrics. I acted as team lead and main backend developer, responsible for system architecture, backend services, data modeling, and integration between the API, database, and market data pipeline.",
    intro: "A team-built personal finance and investment tracking application with a strong backend focus and realistic data modeling.",
    tech: ["Express.js", "Node.js", "React", "Python", "PostgreSQL"],
    link: "https://github.com/gbrds/FinSight",
  },
  {
    id: "emoji_slot",
    title: "Emoji Slot",
    image1: "/portfolio/images/emojislot.jpg",
    year: "Q2 2025",
    description:
      "This project is a full React application that implements a playable slot machine. It features five winning lines, weighted randomness, boosts after losing streaks, and nerfs after big wins. Jackpot data is stored on a JSON file, and a simple JS config file allows easy adjustments to game logic and payouts. State is managed with Context and Reducer, and the UI combines playful visuals with a responsive layout. It's a practical example of front-end development, interactive logic, and working with persistent data.",
    intro: "An interactive React emoji slot machine with custom game logic and a global jackpot system.",
    tech: ["React"],
    liveLink: "https://vs24holdt.ita.voco.ee/emoji_slot/",
    link: "https://github.com/gbrds/slot-machine-game-react",
  },
  {
    id: "pace",
    title: "PACE",
    image1: "/portfolio/images/pace1.jpg",
    image2: "/portfolio/images/pace2.jpg",
    image3: "/portfolio/images/pace3.jpg",
    year: "Q4 2025",
    intro: "PACE is a walking RPG app that turns daily steps into gameplay progression.",
    description: "As a backend developer on this React Native (Expo) project, I managed Supabase for authentication, and user data storage. I also contributed to parts of the game logic, including step conversion to damage and boss fight mechanics. While the app is still a work in progress, it demonstrates practical experience with PostgreSQL, real-time databases, and integrating backend services into a mobile application.",
    tech: ["Expo", "TypeScript", "PostgreSQL"],
    link: "https://github.com/CarlRobertMots/PACE",
  },
]