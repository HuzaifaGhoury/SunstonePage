import React from 'react';
import styled from '../page.module.scss';
import { Button, Typography } from '@mui/material';

const Apicontent = () => {
  return (
    <div>
      <div className={styled.apidiv}>
        <h6 className={styled.apiheading} >
          API Overview
        </h6>
        <div>
          <div className={styled.flexone}>
            <div className={styled.apidivone}>
              <Typography className={styled.apiP}>
                How to set API
              </Typography>
              <Typography className={styled.apiptwo}>
                Use images to enhance your post, improve its flow, add humor
                and explain complex topics.
              </Typography>
            </div>
            <div>
              <Button className={styled.apibtn}>Get Started</Button>
            </div>
          </div>

          <hr className={styled.hrlines} />
          <div className={styled.flexone}>
            <div className={styled.apidivtwo}>
              <Typography className={styled.apiP} >
                Developer Tools
              </Typography>
              <Typography className={styled.apiptwo}>
                Plan your blog post by choosing a topic, creating an outline,
                conduct research, and checking facts.
              </Typography>
            </div>
            <div>
              <Button className={styled.apibtn}>Create Rule</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apicontent;
