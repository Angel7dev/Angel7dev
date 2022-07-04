// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json({
    me: "I am Angel Riera a FullStack web developer specialized in Django and React",
    feat: [
      {
        title: "Experience",
        sub_title: "+ 2 years practical with JavaScript and Python",
        // description: "mas de 2 Años de experiencia practiaca en el desasarrollo de aplicaciones con python y javascript",
        icon: "/images/me/01.svg"
      },
      {
        title: "Development Projects",
        sub_title: "+ 30 frontend and backend github repositories",
        // description: "",
        icon: "/images/me/02.svg"

      },
      {
        title: "Stack tegnologico",
        sub_title: "Conocimiento en mas de 15 herramientas de desarrollo",
        // description: "",
        icon: "/images/me/03.svg"

      }
    ]
  }
  )
}
