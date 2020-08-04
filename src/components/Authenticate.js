import React from 'react';
import firebase from 'firebase';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



function Authenticate({ path: Path, component: Component }) {
    if(firebase.auth().currentUser){
        return <Route path = {Path} component={Component}/>
    }else{
        return <Redirect to={{ pathname: '/login' }} />
    }

}

export default withRouter(Authenticate);