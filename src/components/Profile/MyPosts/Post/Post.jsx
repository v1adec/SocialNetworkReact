import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <div className={style.postInfo}>
                <img
                    src="https://static.turbosquid.com/Preview/2019/02/12__04_46_30/cirlce_43.jpgF75B8343-6B7D-4C48-9F15-26C555FCB2DDZoom.jpg"
                    alt=""/>
                <div className={style.postLikes}>
                    <span>Like {props.likes}</span>
                </div>
            </div>
            <div className={style.message}>
                {props.message}
            </div>
        </div>
    );
};

export default Post;