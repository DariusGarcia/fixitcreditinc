import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import MessageBtn from '../components/MessageBtn'
import { FaWrench } from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'

export default function About() {
	return (
		<div className='bg-curve-bg'>
			<Head>
				<title>About us | Fix It Credit Inc.</title>
				<meta
					name='description'
					content='Fix It Credit Inc believes in fresh starts and that is what we are in business to help our customers do. You do not have to have bad credit to come see us. You can have average credit but want good credit. You can have good credit but want great credit. We can help you no matter what level your credit score is at.'
				/>
				<meta
					name='keywords'
					content='about us, who we are, fix credit, credit, credit score, credit help company, tips of fixing credit, credit help company, tips credit, tips to fix your credit, credit score help'
				/>
				<meta name='author' content='Fix It Credit Inc.' />
				<meta name='robots' content='all' />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Navigation />
			<div className='flex justify-around items-center rounded-xl flex-col md:mt-12 mb-24 md:mb-48 h-full '>
				<section className='flex justify-center h-full'>
					<article className=''>
						<h1 className='text-4xl md:text-6xl mt-8 md:mt-0 hover:text-primary text-grey font-black font-oswald'>
							FIX IT CREDIT INC.
						</h1>
					</article>
				</section>
				<section className='flex justify-center flex-col md:flex-row items-start w-full md:w-3/5 h-full pb-12 pt-8 md:pb-24 md:pt-8 px-4 md:px-24 my-12 text-xl gap-16 md:gap-10 rounded-lg shadow-xl bg-zinc'>
					{about.map((section) => (
						<article
							key={section.title}
							className='flex flex-row items-center md:w-1/2 gap-8 text-grey '>
							<div className='flex flex-col gap-8'>
								<span className='hover:text-primary'>{section.icon}</span>
								<span className='flex mx-2 md:ml-0 flex-col'>
									<p className='w-full font-black text-3xl mb-6 text-primary '>
										{section.title}
									</p>
									<p className='w-full '>{section.description}</p>
								</span>
							</div>
						</article>
					))}{' '}
				</section>
			</div>
			<MessageBtn />
			<Footer />
		</div>
	)
}

const about = [
	{
		title: 'Who we are:',
		description:
			'Fix it Credit is a branch of USA Credit Council Inc which has been in business and helping customers achieve financial freedom for over 15 years. Our main goal is to represent you, the customer, and team up with you to help fight creditors and the credit bureaus who control how and when you get approved or denied for any credit.',
		icon: <FaWrench size={100}></FaWrench>,
	},
	{
		title: 'Our purpose:',
		description:
			"We believe in fresh starts and that's what we're in business to help our customers do. You don't have to have bad credit to come see us. You can have average credit but want good credit. You can have good credit but want great credit. We can help you no matter what level your credit score is at.",
		icon: <FiTarget size={100}></FiTarget>,
	},
]
