import React, { useState } from 'react';
import styled from '../page.module.scss';
import { Button, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'next/image';
import keyimg from '../../../public/Images/keyicon.svg';
import stackicon from '../../../public/Images/Stack.svg';
import Link from 'next/link';
import icontwo from '../../../public/Images/icontwo.png';

const Credentials = () => {
  const [value, setValue] = useState(0);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setIsContentOpen(false);
  };

  const handleDeleteClick = () => {
    setIsContentOpen(true);
  };

  return (
    <div>
      <div className={styled.tabsdiv}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#7662EA',
            },
          }}
        >
          <Tab style={{ color: '#000' }} label="Credentials" />
          <Tab style={{ color: '#000' }} label="Analytics" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className={styled.mainkeydiv}>
            <div className={styled.keydiv}>
              <div className={styled.keybox}>
                <div>
                  <Image src={keyimg} alt='key' />
                </div>
                <div>
                  <Typography className={styled.Credentialspara}>API Credentials</Typography>
                </div>
              </div>
            </div>
            <div className={styled.secondapp}>
              <div className={styled.secondappcontent}>
                <div style={{ display: 'flex', gap: '9px' }}>
                  <div>
                    {' '}
                    <Image src={stackicon} alt='stack' />
                  </div>
                  <div>
                    <Typography className={styled.secondappP}>Second App</Typography>
                  </div>
                </div>
                <div className={styled.hrline}></div>
                <div className={styled.clientidone}>
                  <Typography  className={styled.clientidpara}>
                    Client ID
                  </Typography>
                  <Typography  className={styled.clientid}>
                    nCYG5imCRCiWHC6wBcOR4By6TAzi7gsm
                  </Typography>
                </div>
                <div className={styled.clientidone}>
                  <Typography  className={styled.clientidpara}>
                    Client Secret
                  </Typography>
                  <Typography  className={styled.clientid}>
                    nCYG5imCRCiWHC6wBcOR4By6TAzi7gsm
                  </Typography>
                </div>
                <div className={styled.hrline}></div>
                <Button className={styled.deleteapplicaton} onClick={handleDeleteClick}>
                  Delete my application
                </Button>
                {isContentOpen && (
                  <div className={styled.deletebox}>
                    <div className={styled.errorred}>
                      <div style={{ marginTop: '15px', marginLeft: '20px' }}>
                        <Typography  className={styled.deletetext}>
                          Permanently delete the application
                        </Typography>
                        <br />
                        <Typography  className={styled.deletetexttwo}>
                          All apps using this Client ID will stop working.
                        </Typography>
                      </div>
                      <div style={{ marginTop: '20px', marginLeft: '90px' }}>
                        <Link href='/applicationdelete'>
                          <Button className={styled.deletebtnn}>Delete</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <div className={styled.applicationreport}>
              <Typography >Application report glance</Typography>
              <div className={styled.columsfur}>
                <div className={styled.tabbox}>
                  <Typography className={styled.fourtyk}>42K</Typography>
                  <Typography  className={styled.typorequest}>
                    Total Requests
                  </Typography>
                </div>
                <div className={styled.tabbox}>
                  {' '}
                  <Typography className={styled.fourtyk}>14</Typography>
                  <Typography  className={styled.typorequest}>
                    Total Requests
                  </Typography>
                </div>
                <div className={styled.tabbox}>
                  {' '}
                  <Typography className={styled.fourtyk}>8</Typography>
                  <Typography  className={styled.typorequest}>
                    Recorded User feedback
                  </Typography>
                </div>
                <div className={styled.tabbox}>
                  {' '}
                  <Typography className={styled.fourtyk}>600</Typography>
                  <Typography  className={styled.typorequest}>
                    Moderated Requests
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styled.hide} style={{ marginLeft: '-17%' }}>
              <div className={styled.hackathondiv}>
                <Typography className={styled.comingheading} variant='h6'>
                  Coming soon!
                </Typography>
                <Typography className={styled.hackathonheading} variant='h5'>
                  {' '}
                  Moderation Metrics
                </Typography>
                <Typography className={styled.hackathonParagrah} >
                  {' '}
                  Always protect your brands reputation with our robust moderation service, tackling
                  everything from hate speech to violence, ensuring a safe space for all users
                </Typography>
                <div className={styled.hackathonfooter}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div className={styled.hackathonimgbox}>
                      <Image className={styled.icontwo} src={icontwo} alt='iocns' />
                    </div>
                    <div className={styled.hackathonparaa}>
                      <Typography className={styled.hackathonimgparagraph} >
                        Were flattered by the overwhelming interest! Initial spots are gone! Missed
                        the first cut? Fear not – secure your spot on our waitlist today to be next
                        in line.
                      </Typography>
                    </div>
                    <div>
                      <Button className={styled.joinbtn}>Join our waitlist</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
      <div className={styled.tabsborderbottom}></div>
      <div className={styled.contentmain}></div>
    </div>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Credentials;
