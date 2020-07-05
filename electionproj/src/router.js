import React from 'react'
import { Switch, Route, } from 'react-router'
import Odds from './containers/odds'
import Login from './components/Login'
import { checkAuth } from './checkAuth'
import ButtonAppBar from './components/NavBar'
import Details from './containers/details'

// const ProtectedRoute = ({component: Component, ...rest}) => {
//   const comp = Component
//   return (
//       <Route
//       {...rest}
//       render={(props) => checkAuth(comp) === true
//           ? (<div><ButtonAppBar loggedIn={checkAuth()}/><Component {...props} loggedIn={checkAuth()} /></div>)
//           : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//       />
//   )
// }

const UnProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => 
         <div><ButtonAppBar loggedIn={checkAuth()}/><Component {...props} loggedIn={checkAuth()} /></div>
      }
      />
  )
}


const Router = () => {
  return (
      <Switch>
          <Route path="/login" component={Login} />
          <UnProtectedRoute path="/odd/:id" component={Details} />
          <UnProtectedRoute exact path="/" component={Odds} />
      </Switch>
  );
};

export default Router;
