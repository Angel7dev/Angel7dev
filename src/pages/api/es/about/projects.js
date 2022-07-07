// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "Proyectos",
    obj: [
      {
        name: "Wordbook ",
        description: "Asistente de memorización de vocabulario ingles a través de la evaluación de flash-cards con quiz de audio y ortografía y hace uso de algoritmos de repetición espaciada",
        gitHub: "https://github.com/RagAndRoll/wordbook",
        live: "https://wordbook-ragandroll.vercel.app",
        image: "/images/projects/Wordbook.png",
        color: "744fc9"
      },
      {
        name: "Clon de Twitter con Django",
        description: "Funcionalidades de registros Follow de usuarios y post Tweets",
        gitHub: "https://github.com/RagAndRoll/Twitter-Clone-Django",
        live: "https://twitter-dj-clone.herokuapp.com/",
        image: "/images/projects/twitter_clone.png",
        color: "1c9797"

      }
    ]
  })
}
