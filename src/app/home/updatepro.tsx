import React from 'react';
import styled from '../page.module.scss';
import { Button, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const UpdatePro = () => {
  return (
    <div className={styled.contentmain}>
      <div>
        <div className={styled.updatetop}>
          <Typography className={styled.h4plan} variant='h4'>
            Choose Your Plan
          </Typography>
          <Typography className={styled.ppricing} >
            Simple pricing. No hidden fees. Advanced features for your business.
          </Typography>
        </div>
        <div className={styled.boxupdatemain}>
          <div className={styled.prizecardone}>
            <Typography className={styled.proversion}>PRO version</Typography>
            <Typography className={styled.pricing}>
              $9.9 <span className={styled.month}>/month</span>
            </Typography>
            <ul className={styled.ultag}>
              <li className={styled.litxet}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Single user license</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Component properties</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Interactive components</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Light & Dark theme</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>30 + Page examples</span>
              </li>
            </ul>
            <Button className={styled.chooseplan}>Choose Plan</Button>
          </div>
          <div className={styled.prizecardone}>
            <Typography className={styled.proversion}>PRO version</Typography>
            <Typography className={styled.pricing}>
              $9.9 <span className={styled.month}>/month</span>
            </Typography>
            <ul className={styled.ultag}>
              <li className={styled.litxet}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Single user license</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Component properties</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Interactive components</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Light & Dark theme</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>30 + Page examples</span>
              </li>
            </ul>
            <Button className={styled.chooseplan}>Choose Plan</Button>
          </div>
          <div className={styled.prizecardone}>
            <Typography className={styled.proversion}>PRO version</Typography>
            <Typography className={styled.pricing}>
              $9.9 <span className={styled.month}>/month</span>
            </Typography>
            <ul className={styled.ultag}>
              <li className={styled.litxet}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Single user license</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Component properties</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Interactive components</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>Light & Dark theme</span>
              </li>
              <li className={styled.litxettwo}>
                <DoneIcon className={styled.icondone} />
                <span style={{ paddingLeft: '8px' }}>30 + Page examples</span>
              </li>
            </ul>
            <Button className={styled.chooseplan}>Choose Plan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePro;
