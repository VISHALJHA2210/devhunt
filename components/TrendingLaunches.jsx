import React from 'react'
import Card from './Card';
import tenv1 from '../public/utils/tenv1.jpeg';
import botbyte from '../public/utils/botbyte.jpeg';
import saleor from '../public/utils/saleor.jpeg';
import fusion from '../public/utils/fusion.jpeg';
import seo from '../public/utils/seo.jpeg';
import koppiesnap from '../public/utils/koppiesnap.png';
import siege from '../public/utils/siege.png';
import chatim from '../public/utils/chatim.jpg';
import chatordie from '../public/utils/chatordie.jpeg';

const TrendingLaunches = () => {

    const tools = [
        { image: tenv1, title: 'tenv', body: 'OpenTofu / Terraform / Terragrunt and Atmos version manager', tags: ['Free', 'DevOps'], impressions: '3151', upvotes: '43' },
        { image: botbyte, title: 'Botbyte AI', body: 'Build your own chatbot with OpenAI Assistant', tags: ['Subscription', 'AI', 'NoCode'], impressions: '1394', upvotes: '21' },
        { image: saleor, title: 'Saleor', body: 'API-first GraphQL commerce platform', tags: ['Free', 'Open Source', 'API'], impressions: '1119', upvotes: '8' },
        { image: fusion, title: 'Fusion', body: 'The Notion like API Client', tags: ['Subscription', 'QA', 'API'], impressions: '1038', upvotes: '7' },
        { image: seo, title: 'Code Driven SEO', body: 'SEO for Developers who hate marketing', tags: ['One time fee'], impressions: '959', upvotes: '6' },
        { image: koppiesnap, title: 'Koppiesnap', body: 'Instantly Snap Beautiful ScreenShot Free for showing your code', tags: ['Free', 'Design'], impressions: '739', upvotes: '2' },
        { image: siege, title: 'Siege', body: 'Real time data pipeline with a single command', tags: ['Free'], impressions: '530', upvotes: '1' },
        { image: chatim, title: 'Chatim', body: 'Free Chatbot and Live Chat for your business', tags: ['Free', 'API'], impressions: '503', upvotes: '1' },
        { image: chatordie, title: 'Chatordie', body: 'Chat with AI without privacy tradeoffs', tags: ['Subscription', 'AI'], impressions: '484', upvotes: '1' },
    ];

  return (
    <div className='mt-20'>
        <div className='w-full mt-10'>
            <h2 className='text-md md:text-lg text-gray-200 font-semibold'>Trending Launches</h2>
            <div className='mt-5'>
                {
                    tools.map((tool, index) => {
                        return (
                            <Card key={index}
                                image={tool.image}
                                title={tool.title}
                                body={tool.body}
                                tags={tool.tags}
                                impressions={tool.impressions}
                                upvotes={tool.upvotes}
                            />
                        )
                    })
                } 
            </div>
        </div>
    </div>
  )
}

export default TrendingLaunches