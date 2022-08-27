import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWrench, FaClipboardList } from 'react-icons/fa'
import { MdFactCheck } from 'react-icons/md'
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import { useSpring, animated, config } from 'react-spring'

const supportLinks = [
	{
		name: 'About',
		href: '/about',
		description:
			"We believe in fresh starts and that's what we're in business to help our customers do.",
		icon: FaWrench,
	},
	{
		name: 'Testimonials',
		href: '/testimonials',
		description:
			'It is our pleasure to present these success stories and testimonials from some of our clients.',
		icon: MdFactCheck,
	},
	{
		name: 'Credit Tips',
		href: '/credit-tips',
		description: 'Credit tips to keep your credit score in check.',
		icon: FaClipboardList,
	},
]

export default function LandingComp() {
	return (
		<div className='bg-zinc font-DMSans'>
			{/* Header */}
			<div className='relative pb-32 bg-gray-800'>
				<div className='absolute inset-0'>
					<Image
						className='w-full h-full object-cover'
						src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
						alt=''
						layout='fill'
					/>
					<div
						className='absolute inset-0 bg-grey800 mix-blend-multiply'
						aria-hidden='true'
					/>
				</div>
				<div className='relative max-w-7xl flex flex-col justify-center items-start mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
					<div className='text-4xl flex flex-row gap-4 text-white md:text-5xl lg:text-6xl'>
						<h1 className='font-bold  tracking-tight'>Better credit,</h1>
						<h1 className='italic text-primary font-bold tracking-tight'>
							easier.
						</h1>
					</div>
					<p className='text-lg my-8 text-grey300 text-start'>
						Fix it Credit is a branch of USA Credit Council Inc which has been
						in business and helping customers achieve financial freedom for over
						15 years.
					</p>
					<p className='text-lg text-grey300 text-start'>
						Our main goal is to represent you, the customer, and team up with
						you to help fight creditors and the credit bureaus who control how
						and when you get approved or denied for any credit.
					</p>
				</div>

				{/* Text Animations: hydration error */}

				{/* <div className='relative max-w-7xl flex flex-col justify-center items-start mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
					<h1 className='text-4xl flex flex-row gap-4 font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
						{Text1()}
						<span className='italic text-primary'>{Text2()}</span>
					</h1>
					<p className='text-lg my-8 text-grey300 text-start'>
						Fix it Credit is a branch of USA Credit Council Inc which has been
						in business and helping customers achieve financial freedom for over
						15 years.
					</p>
					<p className='text-lg text-grey300 text-start'>
						Our main goal is to represent you, the customer, and team up with
						you to help fight creditors and the credit bureaus who control how
						and when you get approved or denied for any credit.
					</p>
				</div> */}
			</div>

			{/* Overlapping cards */}
			<section
				className='-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
				aria-labelledby='contact-heading'>
				<h2 className='sr-only' id='contact-heading'>
					Contact us
				</h2>
				<div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 text-grey'>
					{supportLinks.map((link) => (
						<div
							key={link.name}
							className='flex flex-col bg-white rounded-2xl shadow-xl'>
							<div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
								<div className='absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2'>
									<link.icon
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</div>
								<h3 className='text-xl font-medium text-gray-900'>
									{link.name}
								</h3>
								<p className='mt-4 text-base text-gray-500'>
									{link.description}
								</p>
							</div>
							<div className='p-6 bg-grey50 rounded-bl-2xl rounded-br-2xl md:px-8'>
								<li className='text-base list-none font-medium p-4 hover:bg-grey300 rounded-xl  text-primary hover:opacity-75'>
									<Link href={link.href}>
										<a>{link.name}</a>
									</Link>
									<span aria-hidden='true'> &rarr;</span>
								</li>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

function Text1() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 600,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>Better credit,</animated.h1>
}
function Text2() {
	const [flip, set] = useState(false)
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: false,
		reverse: false,
		delay: 1300,
		config: config.molasses,
		onRest: () => set(!flip),
	})

	return <animated.h1 style={props}>easier.</animated.h1>
}
