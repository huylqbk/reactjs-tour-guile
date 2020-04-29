import React from 'react';

function Timers(props){
return(
    <div>
        <h4>Time is props function {props.date.toLocaleTimeString()}</h4>
    </div>
    );
}

const Clock =() => (
    <Timers date={new Date()}/>
);
export default Clock;

