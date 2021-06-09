import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MadDameImage from "../images/mad-dame.jpg"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="lg:relative bg:white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <img src={MadDameImage} alt="Mad Dame" className="h-56 w-full object-cover lg:absolute lg:h-full"/>
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-blue-900 font-semibold tracking-wide uppercas">About Mad Dame</h2>
                        <div className="mt-5 prose prose-indigo text-gray-500">
                            <p>Mad Dame is known to many as a provocative artist with a beautiful and bizarre approach to alternative portrait photography. With 19 years of experience in photographing everyday people and portraying them in diverse creative contexts, for most of which she prepares all elements including make-up and set, sometimes with a team on hand and support from local designers.</p>
                            <p>She has since won awards for her fine art such as the Entrepreneur Motivative Series, a collection of photographic work exhibited at Smith Street Lofts, Collingwood, and also won two Silver Awards by International Loupe Awards for Medium Format Prize. In 2012 Mad Dame launched a Artbook Printed series called DAMED MAGAZINE in 2013 to inspire others in her wake.</p>
                            <p>Through the lens she began exploring self-portraits, capturing an anarchy of emotion and alternative beauty and from 2001 teaching herself how to skilfully develop film in a dark room. Her first foray into photography as a major medium began in 2003 as a teenage exchange student in Denmark. Challenged by the language barrier in a strange and conservative culture, she felt isolated and disconnected. But it was this tumultuous venture through teenage angst that became a catalyst for Mad Dame's photographic creativity. She discovered she was naturally adept from concept to finish and the images began to fill an emotional void. It wasn't long before Mad Dame realised her photography was the perfect way to overcome the language barrier as a means to communicate and share her story. The response from her Danish peers was overwhelming and confidence grew in the place of fear.</p>
                            <p>Returning to Australia, Mad Dame set about studying photography at Photographic Imaging College (PIC) in 2005, while receiving requests from people volunteering to be a part of her work. Realising the demand for her skills, she officially launched her business a year later, before receiving a credit transfer to RMIT Fine Arts. There she earned a Degree in Fine Arts (Photography) in 2008.</p>
                            <p>Mad Dame is also recognised as one of the original alternative stylist photographers in Melbourne and was the only official Australian photographer for Suicide Girls in 2005-2007. Live sets by Mad Dame are published on the website <a href="https://www.suicidegirls.com" title="Suicide Girls" target="_blank">suicidegirls.com</a></p>
                            <p>Over the years, Mad Dame has developed a unique style of photography, digressing from self-portraiture to involve a focus on other people. Mad Dame's confidence and emotional intelligence allows her to connect on an intimate level with those she works with, mostly everyday individuals representing diverse ideas of beauty, gender, spirit and identity. Through the Mad Dame lens, her catalogue to date is an array of human bodies in various forms - from the very stylised to the unsettling and raw, exploring themes such as relationships and mortality. The process itself is an unequivocally cathartic and empowering experience for clients, many of whom attest to Mad Dame's natural ability to make them feel confident in their own skin. "Creating an outer skin from your inner essence."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage