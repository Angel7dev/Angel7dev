// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "Proyectos de maquetación",
    obj: [
      {
        "name": "Tienda online de moda",
        "date": "2022-02-26",
        "gitHub": "https://github.com/RagAndRoll/MarketPlace_AisModa",
        "live": "https://ragandroll.github.io/MarketPlace_AisModa/",
        "image": "/images/LayoutProjects/Ecommerce/01.png",
      },
      {
        "name": "Pagina de aterrizaje para aplicación móvil",
        "date": "2022-05-04",
        "gitHub": "https://github.com/RagAndRoll/Landing-page-sell-app",
        "live": "https://ragandroll.github.io/Landing-page-sell-app/",
        "image": "/images/LayoutProjects/LandingPage/01.png",
      }


    ]
  })
}
