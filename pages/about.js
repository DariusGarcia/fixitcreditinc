import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import MessageBtn from '../components/MessageBtn'
import { FaWrench } from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'
import { useSpring, animated, config } from 'react-spring'

export default function About() {
	return (
		<div className='bg-curve-bg'>
			<Navigation />
			<div className='flex justify-around items-center rounded-xl flex-col md:mt-12 mb-24 md:mb-48 h-full '>
				<section className='flex justify-center h-full'>
					<article className=''>
						<h1 className='text-4xl md:text-5xl mt-8 md:mt-0 hover:text-primary text-grey font-black font-oswald'>
							FIX IT CREDIT INC.
						</h1>
					</article>
				</section>
				<section className='flex justify-center flex-col md:flex-row items-start w-full md:w-5/6 h-full pb-12 pt-8 md:pb-24 md:pt-8 px-4 md:px-24 my-12 text-xl gap-16 md:gap-10 rounded-lg shadow-xl bg-zinc'>
					<article className='flex flex-col items-center md:w-1/2 gap-8 text-grey '>
						<span className='hover:text-primary'>
							<FaWrench size={100}></FaWrench>
						</span>
						<span className='flex ml-2 md:ml-0 flex-col'>
							<p className='w-full font-black text-3xl mb-6 text-primary '>
								Who we are:
							</p>
							<p className='w-full '>
								Fix it Credit is a branch of USA Credit Council Inc which has
								been in business and helping customers achieve financial freedom
								for over 15 years. Our main goal is to represent you, the
								customer, and team up with you to help fight creditors and the
								credit bureaus who control how and when you get approved or
								denied for any credit.
							</p>
						</span>
					</article>
					<article className='flex flex-col items-center mb-10 md:w-1/2 gap-8 text-grey '>
						<span className='hover:text-primary'>
							<FiTarget size={100}></FiTarget>
						</span>
						<span className='flex ml-2 md:ml-0 flex-col'>
							<p className='flex font-black text-3xl mb-6 text-primary'>
								Our purpose:
							</p>
							<p className='flex flex-col'>
								We believe in fresh starts and that{`'`}s what we{`'`}re in
								business to help our customers do. You don{`'`}t have to have
								bad credit to come see us. You can have average credit but want
								good credit. You can have good credit but want great credit. We
								can help you no matter what level your credit score is at.
							</p>
						</span>
					</article>
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
// 		delay: 200,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return <animated.h1 style={props}>FIX IT CREDIT INC.</animated.h1>
// }
// function Text2() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: false,
// 		reverse: false,
// 		delay: 300,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return <animated.h1 style={props}>Who we are:</animated.h1>
// }
// function Text3() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: false,
// 		reverse: false,
// 		delay: 500,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return (
// 		<>
// 			<animated.h1 style={props}>
// 				<p className='mb-4'>
// 					Fix it Credit is a branch of USA Credit Council Inc which has been in
// 					business and helping customers achieve financial freedom for over 15
// 					years.
// 				</p>
// 			</animated.h1>
// 			<animated.h1 style={props}>
// 				Our main goal is to represent you, the customer, and team up with you to
// 				help fight creditors and the credit bureaus who control how and when you
// 				get approved or denied for any credit.
// 			</animated.h1>
// 		</>
// 	)
// }
// function Text4() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: false,
// 		reverse: false,
// 		delay: 700,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return <animated.h1 style={props}>Our purpose:</animated.h1>
// }
// function Text5() {
// 	const [flip, set] = useState(false)
// 	const props = useSpring({
// 		to: { opacity: 1 },
// 		from: { opacity: 0 },
// 		reset: false,
// 		reverse: false,
// 		delay: 900,
// 		config: config.molasses,
// 		onRest: () => set(!flip),
// 	})

// 	return (
// 		<>
// 			<animated.h1 style={props}>
// 				<p className='mb-6'>
// 					We believe in fresh starts and that's what we're in business to help
// 					our customers do.
// 				</p>
// 			</animated.h1>
// 			<animated.h1 style={props}>
// 				<p className='mb-6'>
// 					You don't have to have bad credit to come see us. You can have average
// 					credit but want good credit.
// 				</p>
// 			</animated.h1>
// 			<animated.h1 style={props}>
// 				You can have good credit but want great credit. We can help you no
// 				matter what level your credit score is at.
// 			</animated.h1>
// 		</>
// 	)
// }
