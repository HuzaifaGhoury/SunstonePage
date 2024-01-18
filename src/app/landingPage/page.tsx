import React from 'react';
import style from '../page.module.scss';
import rocket from '../../../public/Images/rocket.png';
import Image from 'next/image';
import Link from 'next/link';
import '../../../public/style/landingpage.css';
import icontwo from '../../../public/Images/icontwo.png';
import icon from '../../../public/Images/sunstoneicon.png';
import { Typography, Button } from '@mui/material';

const Page = () => {
  return (
    <div className={style.main}>
      <div className={style.main}>
        <Link style={{ textDecoration: 'none', color: '#1D1F24' }} href="/home">
          <div className={style.img}>
            <Image src={icon} alt="Sunstone Icon" />
            <Typography className={style.h6} variant="h6">
              Sunstone
            </Typography>
          </div>
        </Link>
      </div>
      <div className={style.maindiv}>
        <div className={style.contentbox}>
          <Typography className={style.h2} variant="h2">
            You have the idea, you have your app in minutes
          </Typography>
          <div className={style.pdiv}>
            <Typography className={style.p} >
              We offer a offers a suite of production-ready services to compose apps. Using Sunstone, many projects that
              used to take 6-12 months can be built and fully deployed in a few days.
            </Typography>
          </div>
        </div>
        <div className={style.image}>
          <Image src={rocket} alt="rocket" />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footercontent}>
          <div className={style.footerimgbox}>
            <Image className={style.icontwo} src={icontwo} alt="icons" />
          </div>
          <Typography className={style.paragraph} >
            Act now—space is limited! Our first round of spots was snapped up instantly, but we're working tirelessly to
            expand capacity. Join our priority waitlist today.
          </Typography>
        </div>
        <div className={style.footeremail}>
          <Typography className={style.paraemail} >
            Email
          </Typography>
          <input type="email" placeholder="Email" className={style.inputemail} />
          <div>
            <Button className={style.joinbtn}>Join our waitlist</Button>
          </div>
        </div>
      </div>
      <div className={style.divend}>
        <Typography className={style.btnendpara} >
          <span className={style.spanstar}>*</span> We are onboarding new clients on a rolling basis.
        </Typography>
      </div>
    </div>
  );
};

export default Page;
