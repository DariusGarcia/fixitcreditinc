import Landing from '../components/landing'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Head from 'next/head'
import MessageBtn from '../Components/MessageBtn'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fix It Credit Inc.</title>
				<meta
					name='description'
					content='Fix it Credit is a branch of USA Credit Council Inc which has been in business and helping customers achieve financial freedom for over 15 years and 
                  our main goal is to represent you, the customer, and team up with you to help fight creditors and the credit bureaus who control how and when you get 
                  approved or denied for any credit.'
				/>
				<link rel='icon' href='/logo.png' />
			</Head>
			<Navigation />
			<Landing />
			<Footer />
			<MessageBtn />
		</div>
	)
}
