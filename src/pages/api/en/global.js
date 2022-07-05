// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    links: [
      {
        "name": "Home",
        "link": "/"
      },
      {
        "name": "Contact",
        "link": "/contact/"
      },
      {
        "name": "services",
        "link": "/services/"
      },
      {
        "name": "about",
        "link": "/about/"
      }
    ],
    contact:["Contact me","Email:", "Subject:", "Message:", "submit" ]
  })
}
