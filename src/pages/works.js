import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Works2005Img from "../gallery/works.jpg"
import Works2011Img from "../gallery/2011-2013.jpg"
import Works2014Img from "../gallery/2014-2017.jpg"

const Works = () => (
    <Layout>
        <SEO title="Works"/>
        <div className="bg-white">
            <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
                <div className="space-y-12">
                    <div className="space-y-5 pb-4 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Works</h2>
                        <p className="text-xl text-gray-500"><Link to="/gallery">Back</Link></p>
                    </div>
                </div>
                <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                    <Link to="/2005-2010">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={Works2005Img} alt="Works 2005-2010" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Works 2005-2010</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/2011-2013">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={Works2011Img} alt="Works 2011-2011" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Works 2011-2013</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/2014-2017">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={Works2014Img} alt="Works 2014-2017" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Works 2014-2017</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    </Layout>
)


export default Works