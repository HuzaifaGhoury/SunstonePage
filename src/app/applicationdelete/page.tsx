"use client"
import React, { useState, ChangeEvent } from 'react';
import styled from '../page.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';


const Page = () => {

  const [appName, setAppName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAppName(event.target.value);
    setErrorMessage('');
  };

 
  const handleDeleteClick = () => {
    if (appName.trim() === '') {
      setErrorMessage(
        'This action cannot be undone. This will permanently delete the application. Please type in the name of the application to confirm.'
      );
    } else {
      console.log('Deleting application:', appName);
    }
  };

 
  return (
    <div className={styled.wholepage}>
      <div className={styled.centerdivtwoo}>
        <div className={styled.craeteapplication}>
          <div>
            <h4 className={styled.createapph4two}>
              Are you absolutely sure?
            </h4>
          </div>
          <div className={styled.crossbox}>
            <Link href="/applicationnew" style={{ textDecoration: 'none' }}>
              <ClearIcon style={{ fontSize: '20px', paddingLeft: '2px' }} />
            </Link>
          </div>
        </div>
        <div className={styled.applicadivvtwoo}>
          <div className={styled.applicationcontent}>
            <p className={styled.namep} >
              Name
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={styled.deleteappinput}>
                <TextField
                  className={styled.textfieldtwo}
                  label="My App"
                  value={appName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                {errorMessage && (
                  <div>
                    <p className={styled.errorText}>{errorMessage}</p>
                    <div className={styled.hrlinetwo}></div>
                  </div>
                )}
              </div>
            </div>
            <div style={{ marginTop: '18%', marginLeft: '-30%' }}>
              <Button className={styled.deletebtnn2} onClick={handleDeleteClick}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Page;



