import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DamedMagazineImg from "../gallery/cover_img/power-portfolio.jpg"
import DamedMagazineImg from "../gallery/cover_img/damed-magazine.jpg"
import GlitterImg from "../gallery/cover_img/glitter.jpg"
import NudedDeadImg from "../gallery/cover_img/nude-dead.jpg"
import SuburbanMayhemImg from "../gallery/cover_img/suburban-mayhem.jpg"
import UvImg from "../gallery/cover_img/UV.jpg"
import WorksImg from "../gallery/works.jpg"

const Gallery = () => (
    <Layout>
        <SEO title="Mad Dame Gallery" />
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
                <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                    <Link to="/power-portfolio">
                        <li>
                            <div className="space-y-4">
                                <div className="aspect-w-3 aspect-h-2">
                                    <img className="object-cover shadow-lg rounded-lg" src={PowerPortfolioImg} alt="Damed Magazine" />
                                </div>

                                <div className="space-y-2">
                                    <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                        <h3>Power Portfolio</h3>
                                    </div>
                                </div>
                            </div> 
                        </li>
                    </Link>
                    <Link to="/damed-magazine">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={DamedMagazineImg} alt="Damed Magazine" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Damed Magazine</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/glitter">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={GlitterImg} alt="Glitter" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Glitter</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/nude-dead">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={NudedDeadImg} alt="Nude Dead Women" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Nude Dead Women</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/suburban-mayhem">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={SuburbanMayhemImg} alt="Suburban Mayhem" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Suburban Mayhem</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/uv">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={UvImg} alt="UV" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>UV</h3>
                                </div>
                            </div>
                        </div> 
                    </li>
                    </Link>
                    <Link to="/works">
                    <li>
                        <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                                <img className="object-cover shadow-lg rounded-lg" src={WorksImg} alt="Works" />
                            </div>

                            <div className="space-y-2">
                                <div className="text-2xl leading-6 font-bold space-y-1 uppercase">
                                    <h3>Works</h3>
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

export default Gallery