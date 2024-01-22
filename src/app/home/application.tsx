import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import styled from '../page.module.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';

interface ApplicationProps {
  applications?: {
    name: string;
    clientID: string;
    apiCredentials: string;
    analytics: string;
  }[];
}

const Application: React.FC<ApplicationProps> = ({ applications = [] }) => {

const hardcodedValues = [
{ name: 'First name', clientID: 'fftt456765gjkkjhi83093985' },
{ name: 'Second name', clientID: 'fftt456765gjkkjhi83093985' },
{ name: 'Third name', clientID: 'fftt456765gjkkjhi83093985' },
];

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
          <List style={{ marginLeft:'-17px' , marginTop:'-15px' , fontFamily:'poppins'}}>
            {hardcodedValues.map((value, index) => (
              <ListItem key={index}>
                <ListItemText primary={value.name} />
              </ListItem>
            ))}
            {applications && applications.map((app, index) => (
              <ListItem key={index + hardcodedValues.length}>
                <ListItemText primary={app.name} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={styled.applicationclient}>
          <Typography className={styled.namesclientgray}>Client ID</Typography>
          <List style={{ marginLeft:'-17px' , marginTop:'-15px'}}>
            {hardcodedValues.map((value, index) => (
              <ListItem key={index} className={styled.namesclient}>
                <ListItemText primary={value.clientID} />
              </ListItem>
            ))}
            {applications && applications.map((app, index) => (
              <ListItem key={index + hardcodedValues.length}>
                <ListItemText primary={app.clientID} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={styled.applicationbox}>
          <Typography className={styled.apicredential}>API Credentials</Typography>
          <List>
            {applications && applications.map((app, index) => (
              <ListItem key={index}>
                <ListItemText primary={app.apiCredentials} />
              </ListItem>
            ))}
          </List>
          <Typography className={styled.apianalytic}>Analytics</Typography>
          <List>
            {applications && applications.map((app, index) => (
              <ListItem key={index}>
                <ListItemText primary={app.analytics} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className={styled.dotbtn}>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default Application;