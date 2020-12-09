import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DamedMagazineImg from "../gallery/cover_img/damed-magazine.jpg"
import GlitterImg from "../gallery/cover_img/glitter.jpg"
import NudedDeadImg from "../gallery/cover_img/nude-dead.jpg"
import SuburbanMayhemImg from "../gallery/cover_img/suburban-mayhem.jpg"
import UvImg from "../gallery/cover_img/UV.jpg"
import WorksImg from "../gallery/works.jpg"

const Gallery = () => (
    <Layout>
        <SEO title="Gallery" />
        <div className="m-4">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link to="/damed-magazine/">
                <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="relative flex-1 flex flex-col">
                        <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Damed Magazine</h3>
                        <img src={DamedMagazineImg} className="object-cover h-48 w-auto" />
                    </div>
                </li>
                </Link>
                <Link to="/glitter/">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="relative flex-1 flex flex-col">
                        <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Glitter</h3>
                        <img src={GlitterImg} className="object-cover h-48 w-auto" />
                    </div>
                </li>
                </Link>
                <Link to="/nude-dead/">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="relative flex-1 flex flex-col">
                        <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Nude Dead Women</h3>
                        <img src={NudedDeadImg} className="object-cover h-48 w-auto" />
                    </div>
                </li>
                </Link>
                <Link to="/suburban-mayhem/">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="relative flex-1 flex flex-col">
                        <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Suburban Mayhem</h3>
                        <img src={SuburbanMayhemImg} className="object-cover h-48 w-auto" />
                    </div>
                </li>
                </Link>
                <Link to="/uv/">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="relative flex-1 flex flex-col">
                        <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">UV</h3>
                        <img src={UvImg} className="object-cover h-48 w-auto" />
                    </div>
                </li>
                </Link>
                <Link to="/works/">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="relative flex-1 flex flex-col">
                        <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Works</h3>
                        <img src={WorksImg} className="object-cover h-48 w-auto" />
                    </div>
                </li>
                </Link>
            </ul>
        </div>
    </Layout>
)

export default Gallery