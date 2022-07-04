// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  res.status(200).json({
    title: "Technical skills",
    obj:
      [
        {
          "name": "Django",
          "color": "0f766e",
          "T-color": "teal-700",
          "description": "HTTP methods | Testing | User Authentication | Customized user authentication | Administrator management | Database design |  PostgreSQL and SQLite3 databases | Forms | Forms | Template management | Template management ",
        },
        {
          "name": "REST",
          "color": "262626",
          "T-color": "gray-800",
          "description": "Django Rest Framework |rest full api creation | Connecting to React | Frontend user authentication | HTTP methods | Data analysis | Uploading and downloading of files | JWT auth with forntend | Postman endpoint testing",
        },
        {
          "name": "React",
          "color": "1d4ed8",
          "T-color": "blue-700",
          "description": "Jsx | React-router-dom | State management; code splitting redux, contex Provider | Axios | shapes | UI Stuff | Get apis or integrate backend",
        },
        {
          "name": "Redux",
          "color": "3730a3",
          "T-color": "indigo-900",
          "description": "status management | authentication | react redux integration | redux thunk",
        },
        {
          "name": "Next",
          "color": "1e293b",
          "T-color": "slate-800",
          "description": "Node.js | interface design and layout | SEO optimization | Local API | use redux",
        },
        {
          "name": "WLS2",
          "color": "ea580c",
          "T-color": "orange-600",
          "description": "Creation of environments | Terminal handling | Software installation and updating",
        },
        {
          "name": "PostgreSQL",
          "color": "0369a1",
          "T-color": "sky-700",
          "description": "Connect with Django | Pgadmin | database design | Database Management | SQL queries",
        },
        {
          "name": "SQLite3",
          "color": "0284c7",
          "T-color": "sky-600",
          "description": "Connect with Django | database design | Database Management | SQL queries",
        },
        {
          "name": "Mongodb",
          "color": "15803d",
          "T-color": "green-700",
          "description": "Connect with React and Next ",
        },
        {
          "name": "Firebase",
          "color": "f59e0b",
          "T-color": "amber-500",
          "description": "Deploy apps | storage | data base NOSQL",
        },
        {
          "name": "Heroku",
          "color": "6366f1",
          "T-color": "indigo-500",
          "description": "Deploy apps | database manage",
        },
        {
          "name": "Git",
          "color": "b91c1c",
          "T-color": "red-700",
          "description": "branch management | version control | deploy | reset | merge ",
        },
        {
          "name": "GitHub",
          "color": "1e293b",
          "T-color": "slate-800",
          "description": "workflow testing | merge for teamwork | GitHubActions",
        },
        {
          "name": "Docker",
          "color": "0ea5e9",
          "T-color": "sky-500",

          "description": "Create add delete stop builds | Images | creation and deploy | Docker compose | Devcontainer | Local development environment",
        },
        {
          "name": "TailwindCSS",
          "color": "0891b2",
          "T-color": "cyan-600",
          "description": "Layout one pages | create components | figma design | UI-UX design | flex, grid, colors",
        },
        {
          "name": "Bootstrap",
          "color": "7c3aed",
          "T-color": "violet-600",
          "description": "Layout one pages | create components |  flex, grid, colors",
        }

      ]

  })
}
