import React, { useState } from 'react';



const ContactUs= ()=> {
 
   const [statecount, setcount] = useState(

        {count: 0}
      
   );
   const submit=() => {
      setcount({
         count: statecount.count+1
      })
   }

    
   return(

    <div>
      
       {statecount.count}
       <input type="button" onClick={submit} value="Senura"/>
  
       </div>

   );

}
export default ContactUs;