import React from 'react';

function DetailedStoryCard(props){
    return(
        <div key={props.id}>
            <h2>{props.title}</h2>
            <h3>By {props.name} </h3>
            <img src={props.image} alt="random"/>
            <p>{props.content}</p>
            {/* <button>Edit</button> */}
            {/* <button>Delete</button> */}
        </div>
    )
}
export default DetailedStoryCard;