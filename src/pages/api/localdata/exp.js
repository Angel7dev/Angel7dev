// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json({
    success: [
      {
        "id": 1,
        "place": "Hablemos Python",
        "web": "https://hablemospython.dev/",
        "my_title": "Full Stack Django Developer",
        "description": "<p>community of programmers united to improve their skills, developing web applications, with the use of agile scrum methodologies.</p>\r\n\r\n<ul>\r\n\t<li><u><strong>Developing features with Django</strong></u></li>\r\n\t<li><u><strong>Layout With Tailwind</strong></u></li>\r\n\t<li><u><strong>Use of Docker for development and development</strong></u></li>\r\n\t<li><u><strong>use of different virtual environments</strong></u></li>\r\n\t<li><u><strong>Project documentation</strong></u></li>\r\n\t<li><u><strong>Scrum organization work</strong></u></li>\r\n\t<li><u><strong>Work flow Git Hub</strong></u></li>\r\n</ul>",
        "init_date": "2022-01-17",
        "end_date": null,
        "ordering": 1
      },
      {
        "id": 2,
        "place": "No Country for Junior Devs",
        "web": "https://www.linkedin.com/company/nocountryforjuniordevs/",
        "my_title": "Team leader NC",
        "description": "<p>I participate as the leader of two teams that develop projects for the No Country platform, which enables collaborative spaces between developers with little or no experience. Among the activities as a team leader are:</p>\r\n\r\n<ul>\r\n\t<li><u><strong>Assist and guide the team in the development of the project.</strong></u></li>\r\n\t<li><u><strong>Coordinate follow-up meetings.</strong></u></li>\r\n\t<li><u><strong>Record team progress.</strong></u></li>\r\n\t<li><u><strong>Facilitate communication among team members.</strong></u></li>\r\n\t<li><u><strong>Propose ideas to improve emulation processes</strong></u></li>\r\n</ul>",
        "init_date": "2022-02-05",
        "end_date": "2022-03-01",
        "ordering": 2
      }
    ]
  })
}
