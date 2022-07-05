// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title : "servicios",
    crr_services: [
      {
        "name": "Diseño Web",
        "image": "images/gallery/00.jpg"
      },
      {
        "name": "Desarrollo Backend",
        "image": "images/gallery/01.jpg"
      },
      {
        "name": "Desarrollo Frontend",
        "image": "images/gallery/02.jpg"
      }
    ],
    obj: [
      {
        "name": "Diseño Web",
        "description": [
          {
            "img": "images/services/LandingPage/03.jpg",
            "description": ""
          },
          {
            "img": "images/services/LandingPage/02.jpg",
            "description": ""
          },
          {
            "img": "images/services/LandingPage/01.jpg",
            "description": ""
          },
        ]
      },
      {
        "name": "Tienda Online",
        "description": [
          {
            "img": "images/services/ecommerce/01.jpg",
            "description": ""
          },
          {
            "img": "images/services/ecommerce/02.jpg",
            "description": ""
          },
        ]
      }
    ]
  }
  )
}