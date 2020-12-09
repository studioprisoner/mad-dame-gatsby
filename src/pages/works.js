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
        <div className="m-4">
        <h2 className="text-5xl font-lato pb-5 uppercase">Works</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link to="/2005-2010/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">2005-2010</h3>
                            <img src={Works2005Img} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
                <Link to="/2011-2013/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">2011-2013</h3>
                            <img src={Works2011Img} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
                <Link to="/2014-2017/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">2014-2017</h3>
                            <img src={Works2014Img} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </Layout>
)


export default Works