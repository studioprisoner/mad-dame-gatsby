import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PowerGlitterImg from "../gallery/power-glitter.jpg"
import MoreGlitterImg from "../gallery/more-glitter.jpg"
import PregnantGlitterImg from "../gallery/pregnant-glitter.jpg"

const Glitter = () => (
    <Layout>
        <SEO title="Glitter"/>
        <div className="bg-white">
            <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
                <div className="space-y-12">
                    <div className="space-y-5 pb-4 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Glitter</h2>
                        <p className="text-xl text-gray-500"><Link to="/gallery">Back</Link></p>
                    </div>
                </div>
                <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                    <Link to="/power-glitter">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={PowerGlitterImg} alt="Power Glitter" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Power Glitter</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/more-glitter">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={MoreGlitterImg} alt="More Glitter" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>More Glitter</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/pregnant-glitter">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={PregnantGlitterImg} alt="Pregnant Glitter" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Pregnant Glitter</h3>
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


export default Glitter