import React from 'react';
import styled from '../page.module.scss';
import { Typography, Button } from '@mui/material';

const Profile = () => {
  return (
    <div>
      <div className={styled.profilediv}>
        <Typography className={styled.profileheading} variant='h6'>
          Profile Details
        </Typography>
        <div className={styled.profilecontent}>
          <div className={styled.profiledetails}>
            <Typography  className={styled.profilecompanynames}>
              Company
            </Typography>
            <Typography  className={styled.profilecompanynames}>
              SnowUI
            </Typography>
          </div>
          <div className={styled.profiledetails2}>
            <Typography  className={styled.profilecompanynames}>
              Email
            </Typography>
            <Typography  className={styled.profilecompanynames}>
              Alexander@gmail.com
              <Button className={styled.verified}>Verified</Button>
            </Typography>
          </div>
          <div className={styled.profiledetails3}>
            <Typography  className={styled.profilecompanynames}>
              Company Site
            </Typography>
            <Typography className={styled.profilecompanynames}>
              snowui.byewind.com
            </Typography>
          </div>
          <div className={styled.profiledetails4}>
            <Typography  className={styled.profilecompanynames}>
              Membership
            </Typography>
            <Typography  className={styled.profilecompanynames}>
              Free
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
