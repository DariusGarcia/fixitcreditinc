import React from 'react'
import Link from 'next/link'
import { MdMessage } from 'react-icons/md'

export default function MessageBtn() {
	return (
		<div>
			{' '}
			<Link href='/contact'>
				<a className=' flex flex-row  fixed z-50 bottom-7 p-4 justify-center items-center gap-2 hover:opacity-75 md:right-10 md:bottom-10 right-4 text-white rounded-xl shadow-md bg-bluetext hover:shadow-lg hover:scale-95 outline-grey transition ease-in-out delay-10 '>
					Contact Us <MdMessage size='30'></MdMessage>
				</a>
			</Link>
		</div>
	)
}
