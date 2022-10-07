import * as Scroll from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import blackLogo from '../public/logo.png'
import { MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Testimonials', href: '/testimonials' },
	{ name: 'Credit Tips', href: '/credit-tips' },
	{ name: 'Contact Us', href: '/contact' },
]

export default function Navigation() {
	return (
		<>
			<Popover as='header' className='sticky top-0 z-50 text-DMSans'>
				<div className='bg-warm-gray-50 lg:flex lg:justify-center border-b-2 border-warm-gray-300'>
					<nav
						className='sticky top-0 max-w-7xl mx-auto flex items-center justify-between py-6 px-6 xl:px-8'
						aria-label='Global'>
						<div className='flex items-center flex-1'>
							<div className='flex items-center justify-between w-full lg:w-auto'>
								<Link href='/'>
									<a>
										<Image
											className='h-14 w-auto sm:h-24 rounded-md'
											src={blackLogo}
											height={60}
											width={90}
											alt='navbar logo image'
										/>
									</a>
								</Link>
								<div className='-mr-2 flex items-center lg:hidden'>
									<Popover.Button className='bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-grey hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500'>
										<span className='sr-only'>Open main menu</span>
										<MenuIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<ul className='hidden space-x-10 lg:flex lg:ml-10'>
								{navigation.map((item) => (
									<li
										key={item.name}
										className='text-lg font-medium list-none px-2 rounded-lg text-grey hover:bg-warm-gray-200 hover:text-warm-gray-900'>
										<Link href={item.href}>
											<a>{item.name}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>

				<Transition
					as={Fragment}
					enter='duration-150 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'>
					<Popover.Panel
						focus
						className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden'>
						<div className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
							<div className='px-5 pt-4 flex items-center justify-between'>
								<div>
									<Link href=''>
										<a>
											<Image
												className='h-8 w-auto rounded-md'
												src={blackLogo}
												height={60}
												width={90}
												alt=''
											/>
										</a>
									</Link>
								</div>
								<div className='-mr-2'>
									<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'>
										<span className='sr-only'>Close menu</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='flex justify-center text-center  pt-5 pb-6'>
								<ul className='px-2 space-y-1'>
									{navigation.map((item) => (
										<li
											key={item.name}
											className='block px-3 py-2 rounded-md w-full text-base font-medium text-warm-gray-900 hover:bg-warm-gray-100'>
											<Link href={item.href}>
												<a>{item.name}</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>{' '}
		</>
	)
}
