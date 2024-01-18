import React from 'react'
import styled from '../page.module.scss'
import AddIcon from '@mui/icons-material/Add';
import { Typography  , TextField } from '@mui/material';
import { Button, Textarea } from '@nextui-org/react';
import ClearIcon from '@mui/icons-material/Clear';
import Link from 'next/link';


const page = () => {
  return (
    <div className={styled.wholepage}>
      <div className={styled.centerdiv}>
      <div className={styled.craeteapplication}>
        <div>
            <AddIcon className={styled.addicon}/>
        <Typography variant='h4' className={styled.createapph4}>Create Application</Typography>
        </div>
        <div className={styled.crossbox}>
          <Link href="/home" style={{textDecoration:'none'}}>
          
<ClearIcon style={{fontSize:'20px' , paddingLeft:'2px'}} />
          </Link>
        </div>
      </div>
      <div className={styled.applicadivv}>
        <div className={styled.applicationcontent}>
          <div>
          <Typography className={styled.namep} >Name</Typography>
<div className={styled.myappcolmn}>
<TextField
        className={styled.textfield}
        label="My App"
       
        
      />

 </div>
<div style={{marginTop:'43px'}}>
  <Typography  className={styled.wholepapp}>Please note that the application name must be unique, and you cannot change the application name later.</Typography>
</div>
 <hr className={styled.hrapplication} />
 <div className={styled.appdescription}>
  <Typography className={styled.apptypoo} >Application Description</Typography>
<div style={{marginTop:'10px'}}>

       <Textarea style={{width:'286px'}} maxRows={4}
  aria-label="maximum height"  placeholder="An innovative application that streamlines  ..." />
</div>
<div className={styled.applicationewbttn}> 

<Button className={styled.cancelappbtn}>Cancel</Button>
<Link href="/applicationscredentials">

<Button className={styled.appcreatebtn}>Create</Button>
</Link>
</div>

  </div>      

        </div>
      </div>
      </div>
      </div>
     </div>
  )
}

export default page