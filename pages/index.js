import Landing from '../components/landing'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import MessageBtn from '../components/MessageBtn'
import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fix It Credit Inc.</title>
				<meta
					name='description'
					content='Fix it Credit is a branch of USA Credit Council Inc which has been in business and helping customers achieve financial freedom for over 15 years and 
                  our main goal is to represent you, the customer, and team up with you to help fight creditors and the credit bureaus who control how and when you get 
                  approved or denied for any credit. We are looking to help you fix your credit score.'
				/>
				<meta
					name='keywords'
					content='fix credit, credit, credit score, credit help company, tips of fixing credit, credit help company, tips credit, tips to fix your credit'
				/>
				<meta name='author' content='Fix It Credit Inc.' />
				<meta name='robots' content='all' />
				<link rel='icon' href='/logo.png' />
			</Head>
			<Navigation />
			<Landing />
			<Footer />
			<MessageBtn />
		</div>
	)
}
