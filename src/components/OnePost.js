import React from 'react';

const OnePost = (props) => {
    console.log('these are the props',props);


return (
    

        <div key={idx} style={{border: "4px solid black"}}>
                <p>Name: {inidivPosts.title}</p>
                <p>Description: {inidivPosts.description}</p>
                <p>Price: {inidivPosts.price}</p>
                
         </div>
    
)   
};


export default OnePost;