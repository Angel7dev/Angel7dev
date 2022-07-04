// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    success: [
      {
        "name": "Web Design",
        "description": [
          {
            "img":"images/services/LandingPage/03.jpg",
            "description": ""
          },     
          {
            "img":"images/services/LandingPage/02.jpg",
            "description": ""
          },     
          {
            "img":"images/services/LandingPage/01.jpg",
            "description": ""
          },
      
        ]
      },
      {
        "name": "Ecommerce",
        "description": [
          {
            "img":"images/services/ecommerce/01.jpg",
            "description": ""
          },
          {
            "img":"images/services/ecommerce/02.jpg",
            "description": ""
          },      
        ]
      },
    
      
      
    ]
  })
}
