import React from 'react'
import Head from 'next/head'

export interface MetaProps {
    title?: string;
    keywords?: string;
    description?: string;
}


const Meta = ({title, keywords, description}: MetaProps) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="keywords" content={keywords}/>
            <meta name='description' content={description}/>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )};

Meta.defaultProps = {
    title: 'Diego Web Dev',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev',
}

export default Meta