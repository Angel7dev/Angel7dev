

const items = [
    {
        "id": 2,
        "name": "Template marketplace tailwind",
        "date": "2022-02-26",
        "description": "<p>Template ecoomerce make with tailwind and react</p>\r\n\r\n<p><a href=\"https://www.wix.com/website-template/view/html/2514?siteId=99ce2049-0277-444e-9a94-8fb04d5a4bdf&amp;metaSiteId=ca11886c-1135-4156-b799-ca8b8b7442b9&amp;originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Ffashion-and-style%2Ffashion&amp;tpClick=view_button\">design inspired by Wix</a></p>",
        "gitHub": "https://github.com/RagAndRoll/MarketPlace_AisModa",
        "live": "https://ragandroll.github.io/MarketPlace_AisModa/",
        "image": "https://github.com/RagAndRoll/RagAndRoll/raw/main/public/images/projects/Template_Marketplace.PNG",

    },
    {
        "id": 6,
        "name": "Template Landing Page App",
        "date": "2022-05-04",
        "description": "<p>Template of landing page with tailwind and react</p>\r\n\r\n<p><a href=\"https://www.wix.com/website-template/view/html/2861?siteId=7cb480f0-5eea-46f3-8ad5-8edecc5a2031&amp;metaSiteId=6137fcde-dbad-469b-909a-d0d2a41f24cf&amp;originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Flanding-pages%2F2&amp;tpClick=view_button\">design inspired by Wix</a></p>\r\n\r\n<p>&nbsp;</p>",
        "gitHub": "https://github.com/RagAndRoll/Landing-page-sell-app",
        "live": "https://ragandroll.github.io/Landing-page-sell-app/",
        "image": "https://raw.githubusercontent.com/RagAndRoll/PortFolio/main/public/images/projects/pageApp.PNG",

    }
]


const LayoutProjects = () => {

    const images = [...Array(5).keys()];

    
    return (
        <div className="mx-[4rem] my-[10rem]">
            <div className="border-b mb-4 mx-[5%]">
                <h3 className="text-center text-[3rem] font-bold mb-10 underline leading-[4rem] mx-4">
                    Layout Projects
                </h3>
            </div>
            
            <div class='grid grid-cols-1 ms:grid-cols-2'>
                {images.map((e, i) => (
                    <div key={i} className='m-2'>
                        <img src={`https://picsum.photos/id/${e}/300/300`} alt={`images${i}`} className='object-cover object-center w-full' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LayoutProjects