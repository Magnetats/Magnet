import React from 'react'
import ReactDOM from 'react-dom'
import { hydrate } from "react-dom"
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import reducers from './reducers';
import 'semantic-ui-less/semantic.less'
import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/semantic.min.css'
import { injectGlobal } from 'styled-components'

import Root from './root.jsx'
import './src/styling/styles.scss'
import './src/styling/styles.css'
import { darkerWhite } from './src/styling/theme/variables'

injectGlobal`
  body {
    background-color: #e9e8e9;
  }
`;

const renderApp = (Component) => {
  hydrate (
    <AppContainer>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Component />
      </BrowserRouter>
      {/* </Provider> */}
    </AppContainer>,
    document.getElementById('root'),
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./root.jsx', () => {
    //store.replaceReducer(require('./reducers').default)
    renderApp(Root)
  })
}

// function render(Component) {
// 	ReactDOM.render(
// 		<AppContainer>
// 			<Provider store={store}>
//         <ConnectedRouter history={history}>
// 				  <Component />
//         </ConnectedRouter>
//       </Provider>
// 		</AppContainer>,
// 		document.getElementById("root")
// 	);
// }


// if (module.hot) {
// 	module.hot.accept('./reducers', () => {
// 		store.replaceReducer(require('./reducers').default);
// 	});
// }
