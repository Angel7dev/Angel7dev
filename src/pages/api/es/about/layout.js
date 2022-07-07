// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "Proyectos de maquetación",
    obj: [
      {
        "name": "Tienda online de moda",
        "live": "https://angel7dv.github.io/Layout/aismoda/",
        "image": "/images/LayoutProjects/aismoda.png",     
        "gif": "https://www.youtube.com/watch?v=KP8cfJHBAlQ",
      },
      {
        "name": "Pagina de aterrizaje para aplicación móvil",
        "live": "https://angel7dv.github.io/Layout/sellapp/",
        "image": "/images/LayoutProjects/sellapp.png",
        "gif": "https://www.youtube.com/watch?v=qfT3PDJ6Swg",

      },
      {
        "name": "termoindustria",
        "live": "https://angel7dv.github.io/Layout/termoindustria/",
        "image": "/images/LayoutProjects/termoindustria.png",
        "gif": "https://www.youtube.com/watch?v=r9Z_ZLnenTs",

      }



    ]
  })

  
}
