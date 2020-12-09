import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IssueOneImg from "../gallery/damed-issue01.jpg"
import IssueTwoImg from "../gallery/damed-issue02.jpg"
import IssueThreeImg from "../gallery/damed-issue03.jpg"

const DamedMagazine = () => (
    <Layout>
        <SEO title="Damed Magazine"/>
        <div className="m-4">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Damed Magazine</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link to="/issue-01/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Issue 01</h3>
                            <img src={IssueOneImg} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
                <Link to="/issue-02/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Issue 02</h3>
                            <img src={IssueTwoImg} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
                <Link to="/issue-0304/">
                    <li className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="relative flex-1 flex flex-col">
                            <h3 className="absolute bottom-0 left-0 px-5 text-2xl font-bold text-white uppercase">Issue 03-04</h3>
                            <img src={IssueThreeImg} alt="" className="object-cover h-48 w-auto" />
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </Layout>
)


export default DamedMagazine