import React, { useState } from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import MessageBtn from '../Components/MessageBtn'
import { MdFactCheck } from 'react-icons/md'
import { useSpring, animated, config } from 'react-spring'

export default function Testimonials() {
	return (
		<div>
			<Navigation />
			<div className='h-screen flex flex-col px-4 justify-start text-neutral bg-curve-bg pt-8 '>
				<header className='flex justify-center items-center flex-col text-slate w-full mb-4 md:mb-8 rounded-lg '>
					{' '}
					<span className='flex md:justify-center flex-col md:w-3/5 items-center text-grey'>
						<span className='flex flex-row text-center items-end gap-2'>
							<h1 className='flex md:text-6xl text-4xl font-black font-oswald  '>
								Testimonials
							</h1>
							<MdFactCheck size='40'></MdFactCheck>
						</span>

						<p className='flex md:justify-center text-center w-full  md:w-3/5 text-4xl font-black  mt-4 md:mt-6 font-DMSans'>
							COMING SOON
						</p>
					</span>
				</header>
				<section className='w-full flex justify-center mt-4 mb-16'>
					{/* <div className='flex flex-row flex-wrap place-items-center md:w-full lg:w-5/6 items-start gap-4 md:gap-10 text-grey content-center justify-center relative'>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
						<article className='md:w-96 bg-white rounded-xl  shadow-xl border-2 border-white hover:bg-nerdBlue hover:border-2 hover:border-gradBlue'>
							<div className='flex flex-row text-start m-4'>
								<span className='mr-4 text-gradBlue2'>
									<ImQuotesLeft size={25}></ImQuotesLeft>
								</span>
								<p className=''>
									"You guys did such a great job. My score is over 700 now and I
									so happy with how it all turned out. You all have impressed me
									from the beginning and I can't thank you enough for all the
									help, especially John, he's really been great. I would be
									happy to great job."
								</p>
							</div>
							<div className='bg-grey50 rounded-b-xl p-0 mt-4'>
								<div className='flex flex-row  p-4'>
									<img
										src={person}
										alt='person'
										className='h-16 rounded-full'></img>
									<h1 className='ml-4 mt-5 font-bold'>John Doe</h1>
								</div>
							</div>
						</article>
					</div> */}
				</section>
			</div>
			<MessageBtn />
			<Footer />
		</div>
	)
}

// function Text1() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: false,
// 		reverse: false,
// 		delay: 150,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return <animated.h1 style={props}>Testimonials</animated.h1>
// }

// function Text2() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: false,
// 		reverse: false,
// 		delay: 600,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return (
// 		<animated.h1 style={props}>
// 			It is our pleasure to present these success stories and testimonials from
// 			some of our clients.
// 		</animated.h1>
// 	)
// }

// function Text2() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: true,
// 		reverse: true,
// 		delay: 600,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return <animated.h1 style={props}>COMING SOON</animated.h1>
// }
