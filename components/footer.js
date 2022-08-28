import React from 'react'
import black from '../public/logo.png'
import { MdPhoneIphone, MdEmail } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className='z-50 text-oswald'>
			<div className=' flex justify-evenly flex-row md:flex-col w-full relative bottom-0 h-full md:p-4 text-xs md:text-base bg-primary text-white'>
				<div className='flex flex-col md:flex-row text-center  items-center md:justify-evenly w-full py-8 md:p-4 '>
					<section className='md:w-max mb-6 md:mb-0'>
						<article className='flex flex-col items-center'>
							<Image
								className='h-12 md:h-48 rounded-md'
								src={black}
								height={120}
								width={180}
								alt='logo'
							/>
						</article>
					</section>
					<section className=''>
						<article className='mb-6'>
							<h3 className='text-2xl mb-4'>Navigation</h3>
							<div className='flex flex-col align-center justify-center'>
								<ul className='flex flex-col  spacing-widest align-center text-base md:text-lg justify-center gap-3 md:gap-5 cursor-pointer  text-white'>
									<li className='ease-in-out px-4 hover:bg-grey300 rounded-lg hover:text-black hover:opacity-80'>
										<Link href='/'>Home</Link>
									</li>
									<li className='ease-in-out px-4 hover:bg-grey300 rounded-lg hover:text-black hover:opacity-80'>
										<Link href='/about'>About</Link>
									</li>
									<li className='ease-in-out px-4 hover:bg-grey300 rounded-lg hover:text-black hover:opacity-80'>
										<Link href='/testimonials'>Testimonials</Link>
									</li>
									<li className='ease-in-out px-4 hover:bg-grey300 rounded-lg hover:text-black hover:opacity-80'>
										<Link href='/credit-tips'>Credit Tips</Link>
									</li>
									<li className='ease-in-out px-4 hover:bg-grey300 rounded-lg hover:text-black hover:opacity-80'>
										<Link href='/contact'>Contact Us</Link>
									</li>
								</ul>
							</div>
						</article>
					</section>
					<section className='pl-2 '>
						<article className='text-center  flex flex-col items-center md:items-start  '>
							{' '}
							<h3 className='text-2xl pb-0 w-max  mb-4'>Contact Us</h3>
							<span className='flex md:flex-row tracking-wider gap-1 pb-2 text-base text-center'>
								<MdEmail size={20}></MdEmail>
								<p>carlos@fixitcreditinc.com</p>
							</span>
							<span className='flex md:flex-row gap-1 tracking-wider text-base text-start'>
								<MdPhoneIphone size={20}></MdPhoneIphone>
								<p>(818) 422 - 7006</p>
							</span>
						</article>
					</section>
				</div>
			</div>
			<div className='flex justify-center bottom-0 bg-grey50 h-16 z-50'>
				<section className='flex flex-row justify-center items-center'>
					<h3 className='text-black'>
						Copyright ©2022 Fix It Credit Inc. All right reserved.
					</h3>
				</section>
			</div>
		</div>
	)
}

export default Footer
