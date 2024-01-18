import React from 'react';
import styled from '../page.module.scss';
import { Typography } from '@mui/material';
import rocketimage from '../../../public/Images/rocketgetstarted.svg';
import Image from 'next/image';

const HomeContent = () => {
  return (
    <div>
      <div className={styled.wellcomediv}>
        <Typography className={styled.wellh5} variant="h5">
          Welcome back, Alex
        </Typography>
      </div>

      <div className={styled.contentmain}>
        <div className={styled.questions}>
          <Typography className={styled.getstarted} >
            Get Started
          </Typography>
          <div style={{ marginTop: '10px' }}>
            <Typography className={styled.sunstonequestion} >
              What’s Sunstone?{' '}
            </Typography>
            <p className={styled.sunstoneanswer}>
              Our Services We offer a diverse range of services to meet the unique needs of our
              clients. We provide comprehensive solutions that drive success. Explore our services
              to find out how we can help you achieve your goals.{' '}
            </p>
            <Typography className={styled.sunstonequestion} >
              How can I build production-ready apps on Sunstone?{' '}
            </Typography>
            <p className={styled.sunstoneanswer}>
              Our Services We offer a diverse range of services to meet the unique needs of our
              clients. We provide comprehensive solutions that drive success. Explore our services
              to find out how we can help you achieve your goals.
            </p>
            <Typography className={styled.sunstonequestion} >
              Why should I use Sunstone?{' '}
            </Typography>
            <p className={styled.sunstoneanswer}>
              Our Services We offer a diverse range of services to meet the unique needs of our
              clients. We provide comprehensive solutions that drive success. Explore our services
              to find out how we can help you achieve your goals.
            </p>
          </div>
        </div>
        <div className={styled.rocimg}>
          <Image src={rocketimage} className='rock' alt='rock' />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
