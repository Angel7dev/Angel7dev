// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "Proyectos de maquetación",
    obj: [
      {
        "name": "Tienda online de moda",
        "live": "https://ragandroll.github.io/aismoda/",
        "image": "/images/LayoutProjects/Ecommerce/01.png",
        "gif": "/images/LayoutProjects/Ecommerce/01.gif",
      },
      {
        "name": "Pagina de aterrizaje para aplicación móvil",
        "live": "https://ragandroll.github.io/sellapp/",
        "image": "/images/LayoutProjects/LandingPage/01.png",
      },
      {
        "name": "termoindustria",
        "live": "https://angel7dv.github.io/Layout/termoindustria/",
        "image": "/images/LayoutProjects/LandingPage/01.png",
      }



    ]
  })

  
}
