import React from 'react';
// import OnePost from './OnePost';

const AllPosts = (props) => {
      console.log('these are the props', props)
      const { posts } = props;
return (
    
    <div>
           {
             posts.length ? posts.map((inidivPosts, idx) => {
               return <div key={idx} style={{border: "4px solid black"}}>
                <p>Name: {inidivPosts.title}</p>
                  <p>Description: {inidivPosts.description}</p>
                  <p>Price: {inidivPosts.price}</p>
                
                </div>
              return <OnePost inidivPosts={inidivPosts} idx={idx}/>
             }) : <div>No posts to return</div>
            
          } 
          
         </div> 
 )
        }

export default AllPosts;