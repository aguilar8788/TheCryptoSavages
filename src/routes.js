import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/home/component/Home'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		{/*<Route path="/blog" component={Blog} />*/}
	</Route>
)
