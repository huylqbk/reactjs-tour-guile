import React from 'react';

function User(props) {
    console.log(props)
    return (
        <div className="user">
            Name props: {props.info.name}
        </div>
    );
}

const Comment =(props) => (
    <div className="comment">
        <h2>Comment Props {props.user.comment}</h2>
        <User info={props.user.info}/>
    </div>
);

export default Comment;