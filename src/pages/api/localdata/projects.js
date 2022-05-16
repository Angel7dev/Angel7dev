// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    success: [
      {
        "name": "WordBook Web Application Learn Language",
        "date": "2022-04-24",
        "description": "<p>Application created to solve the need to control the vocabulary study of a new language</p>\r\n\r\n<ol>\r\n\t<li><u><strong>Backend Django + PostgreSQL</strong></u></li>\r\n\t<li><u><strong>Api Designed with Django rest framework, for user registration, authentication, and object creation</strong></u></li>\r\n\t<li><u><strong>Supermemo2 spaced repetition algorithm</strong></u></li>\r\n\t<li><u><strong>Text to speech API with Django + gTTS</strong></u></li>\r\n\t<li><u><strong>Frontend With react + next.js + Tailwind CSS</strong></u></li>\r\n\t<li><u><strong>User authentication using JSON Web Token between Django and React</strong></u></li>\r\n\t<li><u><strong>Real-time update of server data</strong></u></li>\r\n\t<li><u><strong>Management of user status and study sessions through Redux</strong></u></li>\r\n\t<li><u><strong>Interface design and layout for SEO optimization with next.js</strong></u></li>\r\n</ol>\r\n\r\n<ul><!--<ul-->\r\n</ul>",
        "backend_gitHub": "https://github.com/RagAndRoll/wordbook-Backend",
        "gitHub": "https://github.com/RagAndRoll/wordbook",
        "live": "https://wordbook-ragandroll.vercel.app",
        "image": "/images/projects/Wordbook.png",
      },
      {
        "name": "Twitter clone Django",
        "date": "2022-02-28",
        "description": "<p>Web created with Django type social network</p>\r\n\r\n<ol>\r\n\t<li><u><strong>Authentication of users</strong></u></li>\r\n\t<li><u><strong>Post Tweets from users</strong></u></li>\r\n\t<li><u><strong>Follow user to user</strong></u></li>\r\n\t<li><u><strong>elegant design with tailwind CSS Framework in Django templates</strong></u></li>\r\n\t<li><u><strong>testing with Django, GitHub Actions</strong></u></li>\r\n</ol>",
        "gitHub": "https://github.com/RagAndRoll/Twitter-Clone-Django",
        "live": "https://twitter-dj-clone.herokuapp.com/",
        "image": "/images/projects/twitter_clone.png",
      }
    ]
  })
}
