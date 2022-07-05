// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title : "services",

    crr_services: [
      {
        "name": "design web",
        "image": "images/gallery/00.jpg"
      },
      {
        "name": "develoment backend",
        "image": "images/gallery/01.jpg"
      },
      {
        "name": "develoment frontend",
        "image": "images/gallery/02.jpg"
      }
    ],
    obj: [
      {
        "name": "Web Design",
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
        "name": "Ecommerce",
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
      },
    ]

  })
}
