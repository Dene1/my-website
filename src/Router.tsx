import {Route} from 'wouter'
import {Content} from '@components'
import {Contacts, Projects, Skills} from '@/home/ui'

const Router = () => {
	return (
		<Route path="/"
		       component={Content}>
			<Route path="/projects"
			       component={Projects} />
			<Route path="/about-me"
			       component={Skills} />
			<Route path="/contact"
			       component={Contacts} />
		</Route>
	)
}

export default Router