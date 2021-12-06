import React from "react";
import {useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import styles from "./Users.module.css";
import {getIsFetching} from "../../redux/selectors/usersSelectors";
import {UserType} from "../../types/types";

//types from state
type MapStateToPropsTypes = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
    users: Array<UserType>
}

//types from reducers
type MapDispatchToPropsTypes = {
    setCurrentPage: (currentPage: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

//passed to the component type
type OwnTypes = {
    pageTitle: string
}


//all common types
type PropsTypes = MapStateToPropsTypes & MapDispatchToPropsTypes & OwnTypes;

type PropsPageTypes = {
    pageTitle: string
}

const UsersPage: React.FC<PropsPageTypes> = (props) => {

    // const isFetching = useSelector(getIsFetching);

    return (<div className={styles.usersBlock}>
        <h2>{props.pageTitle}</h2>
        {/*{*/}
        {/*    isFetching*/}
        {/*        ? <Preloader/>*/}
                 <Users />
        {/*}*/}
    </div>)
};


export default UsersPage;

