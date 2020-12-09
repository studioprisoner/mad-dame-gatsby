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
        <div className="m-4">
        <h2 className="text-5xl font-lato pb-5 uppercase">Glitter</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link to="/power-glitter/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Power Glitter</h3>
                            <img src={PowerGlitterImg} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
                <Link to="/more-glitter/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">More Glitter</h3>
                            <img src={MoreGlitterImg} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
                <Link to="/pregnant-glitter/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Pregnant Glitter</h3>
                            <img src={PregnantGlitterImg} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </Layout>
)


export default Glitter