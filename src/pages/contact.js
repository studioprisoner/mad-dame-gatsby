import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-18 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Contact Mad Dame
                    </h2>
                </div>
                <div className="mt-12">
                    <form name="contact" data-netlify="true" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label for="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                            <div className="mt-1">
                                <input type="text" name="first_name" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></input>
                            </div>
                        </div>
                        <div>
                            <label for="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <div className="mt-1">
                            <input type="text" name="last_name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></input>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1">
                                <input name="email" type="email" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></input>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <select aria-label="Country" className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                        <option>AUS</option>
                                        <option>US</option>
                                        <option>UK</option>
                                    </select>
                                </div>
                                <input type="text" name="phone_number" className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="+61 439-423-567"></input>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <div className="mt-1">
                                <textarea id="message" rows="4" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
)

export default Contact