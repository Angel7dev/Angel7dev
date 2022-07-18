// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json({
    me: "Desarrollador web FullStack especializado en Django y React",
    feat: [
      {
        title: "Experiencia",
        sub_title: "mas de 2 años de experiencia practica en el desasarrollo de aplicaciones con Python y JavaScrip",
        // description: "mas de 2 Años de experiencia practiaca en el desasarrollo de aplicaciones con python y javascript",
        icon: "/images/me/01.svg"
      },
       {
        title: "Stack tegnologico",
        sub_title: "Conocimiento en mas de 15 herramientas de desarrollo",
        // description: "",
        icon: "/images/me/03.svg"
      },
      {
        title: "Proyectos",
        sub_title: "+ 30 frontend y backend repositorios github",
        // description: "",
        icon: "/images/me/02.svg"

      }
    ]
  }
  )
}
