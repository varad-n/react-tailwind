import React from 'react'
import assets from '../assets/assets'
import Title from './title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas inot powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden' />

    <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions taht move your business forward.'/>

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index} />
        ))}
    </div>

    </div>
  )
}

export default Services