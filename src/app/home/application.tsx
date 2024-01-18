import { Button, Typography } from '@mui/material';
import React from 'react';
import styled from '../page.module.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';

const Application = () => {
  return (
    <div>
      <div className={styled.applicationdiv}>
        <Typography className={styled.applicationheading}>Applications</Typography>
        <Link href="/applicationnew">
          <Button className={styled.applicationbtn}>Create Application</Button>
        </Link>
      </div>
      <div className={styled.applicationcontent}>
        <div className={styled.applicationnames}>
          <Typography className={styled.namesclientgray}>Name</Typography>
          <Typography className={styled.namesclient}>First app</Typography>
          <Typography className={styled.namesclient}>Second app</Typography>
          <Typography className={styled.namesclient}>Third app</Typography>
        </div>
        <div className={styled.applicationclient}>
          <Typography className={styled.namesclientgray}>Client ID</Typography>
          <Typography className={styled.namesclient}>fftt456765gjkkjhi83093985</Typography>
          <Typography className={styled.namesclient}>jk076590ygghgh324vd33</Typography>
          <Typography className={styled.namesclient}>jk076590ygghgh324vd33</Typography>
        </div>
        <div className={styled.applicationbox}>
          <Typography className={styled.apicredential}>API Credentials</Typography>
          <Typography className={styled.apianalytic}>Analytics</Typography>
        </div>
      </div>
      <div className={styled.dotbtn}>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default Application;
