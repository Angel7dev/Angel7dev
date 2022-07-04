// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json({
    me: "Mi nombre es Angel Riera Soy desarrollador web full Stack espacializado en Django y React", 
    feat: [
      {
        title: "Experiencia",
        sub_title: "+ 2 years practical with JavaScript and Python",
        // description: "mas de 2 Años de experiencia practiaca en el desasarrollo de aplicaciones con python y javascript",
        icon: "/images/me/01.svg"
      },
      {
        title: "Projectos",
        sub_title: "+ 30 Proyectos de desarrollo web backend y frontend",
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
