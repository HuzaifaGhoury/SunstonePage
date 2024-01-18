import React from 'react';
import styled from '../page.module.scss';
import { Typography, Button } from '@mui/material';
import icontwo from '../../../public/Images/icontwo.png';
import Image from 'next/image';

const Hackathon = () => {
  return (
    <div>
      <div className={styled.hackathondiv}>
        <Typography className={styled.comingheading} variant='h6'>
          Coming soon!
        </Typography>
        <Typography className={styled.hackathonheading} variant='h5'>
          {' '}
          Hackathons
        </Typography>
        <Typography className={styled.hackathonParagrah} >
          {' '}
          Regularly uniting the brightest from universities and institutions, our Hackathons are a hub
          of inventive spirit. Theyre an arena where theoretical knowledge and cutting-edge research
          collide to create practical, innovative applications. Join us to code, create, and change
          the future.
        </Typography>

        <div className={styled.hackathonfooter}>
          <div className={styled.hackathonflex}>
            <div className={styled.hackathonimgbox}>
              <Image className={styled.icontwohackathon} src={icontwo} alt='iocns' />
            </div>
            <div className={styled.hackathonparaa}>
              <Typography className={styled.hackathonimgparagraph} >
                Never miss a hack: Be a consistent code champion! <br />
                Sign up to stay in the loop with our frequent hackathon happenings.
              </Typography>
            </div>
            <div>
              <Button className={styled.joinbtn}>Join our waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
