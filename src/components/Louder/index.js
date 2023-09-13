import React from 'react';
import Layout from "../Layout";
import './style.css'

const Louder = () => {
    return (
       <Layout>
           <div className="louder-wrapper">
               <div className="lds-spinner">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
               </div>
           </div>
       </Layout>
    );
};

export default Louder;