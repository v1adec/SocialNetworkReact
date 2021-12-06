import React, {Component, ComponentType} from 'react';
import { Switch, BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import WithSuspense from "./hoc/WithSuspense";
import store, {AppStateType} from "./redux/redux-store";

//lazy loading
const Dialogs = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

/*returning type*/
//type MapPropsType = ReturnType<typeof mapStateToProps>

type PropsType = {
    initializeApp: () => void,
    initialized: boolean
}

class App extends Component<PropsType> {

    catchAllUnhandledErrors = (error: PromiseRejectionEvent): void => {
        alert(`---some error, ${error}`)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        const {initialized} = this.props
        return initialized
            ? <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-block'>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route path={['/profile/:userId?', '/']} render={() => <ProfileContainer/>} exact/>
                            <Route path='/dialogs' render={() => WithSuspense(Dialogs)}/>
                            <Route path='/users' render={() => <UsersContainer pageTitle={"Users page"}/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/news' render={() => WithSuspense(News)}/>
                            <Route path='/music' render={() => WithSuspense(Music)}/>
                            <Route path='/settings' render={() => WithSuspense(Settings)}/>
                            <Route path={`*`} render={() => <div>ERROR, PAGE NOT FOUND, 404</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
            : <Preloader/>

    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
};

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SamuraiNetwork: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiNetwork;
