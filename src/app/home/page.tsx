"use client"
import React, { useState } from 'react';
import styled from '../page.module.scss';
import Image from 'next/image';
import { Typography, Avatar, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import userimg from '../../../public/Images/user.svg';
import home from '../../../public/Images/home.svg';
import book from '../../../public/Images/bookicon.svg';
import apps from '../../../public/Images/appsicon.svg';
import school from '../../../public/Images/schoolicon.svg';
import trophy from '../../../public/Images/trophy.svg';
import iconstar from '../../../public/Images/staricon.png';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { useRouter } from 'next/navigation';
import sunstone from '../../../public/Images/sunstoneicon.png';
import HomeContent from './homecontent';
import Apicontent from './apicontent';
import Application from './application';
import Link from 'next/link';
import Blogscourse from './blogscourse';
import Hackathon from './hackathon';
import Profile from './profile';
import Updatepro from './updatepro';

const Page = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSection, setSelectedSection] = useState<string>('home');
  const [profile, setProfile] = useState<boolean>(false);
  const [blogscourse, setBlogscourse] = useState<boolean>(false);
  const [updatepro, setUpdatepro] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSidebarToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    console.log(section);
    if (section === 'Profile') {
      setProfile(true);
      setBlogscourse(false);
      setUpdatepro(false);
    } else if (section === 'Blogsandcourse') {
      setBlogscourse(true);
      setProfile(false);
      setUpdatepro(false);
    } else if (section === 'Updatepro') {
      setUpdatepro(true);
      setProfile(false);
      setBlogscourse(false);
    } else {
      setProfile(false);
      setBlogscourse(false);
      setUpdatepro(false);
    }
    window.history.pushState(null, '' , `/home/${section.toLowerCase()}`);
  };

  const sectionToComponent: Record<string, JSX.Element> = {
    home: <HomeContent />,
    Apicontent: <Apicontent />,
    Application: <Application />,
    Blogsandcourse: <Blogscourse />,
    Hackathon: <Hackathon />,
    Profile: <Profile />,
    Updatepro: <Updatepro />,
  };

  return (
    <div className={styled.mainnav}>
      <div className={styled.navbar}>
        <div className={styled.drawer}>
          <Button onClick={handleSidebarToggle}>
            <Avatar style={{ backgroundColor: '#7662EA' }}>
              <MenuIcon />
            </Avatar>
          </Button>
        </div>
        <div className={styled.sunstoneheading}>
          <Image src={sunstone} alt='sunstone' />
          <Link style={{ textDecoration: 'none', color: 'black' }} href="/">
            <Typography className={styled.h6} variant="h6">
              Sunstone
            </Typography>
          </Link>
        </div>
        <Drawer className={styled.drawernone} anchor="left" open={drawerOpen} onClose={handleSidebarToggle}>
          <List>
            <div style={{ display: 'flex' }}>
              <Image src={sunstone} alt='sunstone' />
              <Link style={{ textDecoration: 'none', color: 'black' }} href="/">
                <Typography className={styled.h6} variant="h6">
                  Sunstone
                </Typography>
              </Link>
            </div>
            <ListItem button onClick={() => handleSectionClick('home')}>
              <Image src={home} alt="homeimg" />
              <ListItemText style={{ paddingLeft: '12px', paddingTop: '8px' }} primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleSectionClick('Apicontent')}>
              <Image src={book} alt="book" />
              <ListItemText style={{ paddingLeft: '12px', paddingTop: '8px' }} primary="API Docs" />
            </ListItem>
            <ListItem button onClick={() => handleSectionClick('Application')}>
              <Image src={apps} alt="apps" />
              <ListItemText style={{ paddingLeft: '12px', paddingTop: '8px' }} primary="Applications" />
            </ListItem>
            <ListItem button onClick={() => handleSectionClick('Blogsandcourse')}>
              <Image src={school} alt="school" />
              <ListItemText style={{ paddingLeft: '12px', paddingTop: '8px' }} primary="Blogs and Courses" />
            </ListItem>
            <ListItem button onClick={() => handleSectionClick('Hackathon')}>
              <Image src={trophy} alt="trophy" />
              <ListItemText style={{ paddingLeft: '12px', paddingTop: '8px' }} primary="Hackathon" />
            </ListItem>
          </List>
          <div style={{ marginTop: '93%', marginLeft: '7%' }}>
            <div className={styled.update}>
              <div className={styled.updatebox}>
                <Image className={styled.updatestar} src={iconstar} alt="star" />
                <p className={styled.updatetext}>Upgrade to Sunstone <br /> Pro member</p>
                <p className={styled.updatetextwo}>Get full access to all courses for 1 month.</p>
                <Button className={styled.updatebtn} onClick={() => handleSectionClick('Updatepro')}>
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
        <div>
          <Button onClick={handleClick}>
            <Avatar className={styled.dropdown}>
              <Image className={styled.userimg} src={userimg} alt="User" />
            </Avatar>
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} style={{ width: '340px', marginLeft: '-6%' }}>
            <MenuItem style={{ display: 'flex', gap: '13px', borderRadius: '7px' }}>
              <Image className={styled.userimg} src={userimg} alt="User" />
              <Typography className={styled.username} >
                Alexander Gerrard
              </Typography>
              <Typography className={styled.useremail} >
                alexander@email.com
              </Typography>
            </MenuItem>
            <hr className={styled.hr} />
            <MenuItem onClick={() => handleSectionClick('Profile')}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign out</MenuItem>
          </Menu>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={styled.sidebar}>
          <div className={styled.apps}>
            <div className={styled.sidebaenames}>
              <div
                className={`${styled.namebackground} ${selectedSection === 'home' ? styled.selectedOption : ''}`}
                onClick={() => handleSectionClick('home')}
              >
                <Image src={home} alt="homeimg" />
                <p className={styled.homenames}>Home</p>
              </div>
              <div
                className={`${styled.namebackground} ${selectedSection === 'Apicontent' ? styled.selectedOption : ''}`}
                onClick={() => handleSectionClick('Apicontent')}
              >
                <Image src={book} alt="book" />
                <p className={styled.homenames}>API Docs</p>
              </div>
              <div
                className={`${styled.namebackground} ${selectedSection === 'Application' ? styled.selectedOption : ''}`}
                onClick={() => handleSectionClick('Application')}
              >
                <Image src={apps} alt="apps" />
                <p className={styled.homenames}>Applications</p>
              </div>
              <div
                className={`${styled.namebackground} ${selectedSection === 'Blogsandcourse' ? styled.selectedOption : ''}`}
                onClick={() => handleSectionClick('Blogsandcourse')}
              >
                <Image src={school} alt="school" />
                <p className={styled.homenames}>Blogs and Courses</p>
              </div>
              <div
                className={`${styled.namebackground} ${selectedSection === 'Hackathon' ? styled.selectedOption : ''}`}
                onClick={() => handleSectionClick('Hackathon')}
              >
                <Image src={trophy} alt="trophy" />
                <p className={styled.homenames}>Hackathon</p>
              </div>
            </div>
          </div>
          <div className={styled.update}>
            <div className={styled.updatebox}>
              <Image className={styled.updatestar} src={iconstar} alt="star" />
              <p className={styled.updatetext}>Upgrade to Sunstone <br /> Pro member</p>
              <p className={styled.updatetextwo}>Get full access to all courses for 1 month.</p>
              <Button className={styled.updatebtn} onClick={() => handleSectionClick('Updatepro')}>
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styled.content}>{sectionToComponent[selectedSection]}</div>

          {profile && (
            <div className={styled.content}>
              {sectionToComponent['profilee']}
              <div className={styled.profilediv}>
                <Typography className={styled.profileheading} variant="h6">
                  Sign-in Method
                </Typography>
                <div className={styled.profileemailpassword}>
                  <div>
                    <input className={styled.Profileemail} type='password' placeholder='Old password' />
                  </div>
                  <div>
                    <input className={styled.profilepassword} type='password' placeholder='New password' />
                  </div>
                </div>
                <Button className={styled.changepassword}>
                  Change Password
                </Button>
              </div>
            </div>
          )}

          {blogscourse && (
            <div className={styled.blogscard}>
              <div className={styled.card}>
                <Typography className={styled.recomended} variant="h6">
                  Recommended Course
                </Typography>

                <iframe
                  className={styled.video}
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/6Yx8DtSVNP4"
                  title="YouTube Video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

                <div className={styled.prize}>
                  <div className={styled.darkprice}>
                    <Typography
                      style={{
                        color: '#1D1F24',
                        fontSize: '25px',
                        fontWeight: '600',
                      }}
                      
                    >
                      <span
                        style={{
                          color: '#A3A5AB',
                          fontSize: '25px',
                          fontWeight: '600',
                        }}
                      >
                        $
                      </span>
                      8.99
                    </Typography>
                  </div>
                  <div className={styled.lightprize}>
                    <div className={styled.lightprizeone}>
                      <hr
                        style={{
                          width: '34px',
                          marginLeft: '1px',
                        }}
                      />
                      <Typography className={styled.prizetwoo}>
                        $10.99
                      </Typography>
                    </div>
                    <div className={styled.lightprizeone}>
                      <Typography className={styled.twentyperson}>
                        20% Off
                      </Typography>
                    </div>
                  </div>
                </div>
                <Button className={styled.addtocart}>Add to cart</Button>

                <Button className={styled.buynow}>Buy Now</Button>
                <div style={{ marginTop: '14px' }}>
                  <Typography className={styled.courseinclude} >
                    This course includes:
                  </Typography>
                  <div className={styled.iconpara}>
                    <div>
                      <PlayCircleOutlineIcon className={styled.videoplayicon} />
                      <div className={styled.videoparagraph}>
                        <span>3 hours on-demand video</span>
                      </div>
                    </div>
                    <div>
                      <AllInclusiveIcon className={styled.videoplayicon} />
                      <div className={styled.videoparagraph}>
                        <span>Full lifetime access</span>
                      </div>
                    </div>
                    <div>
                      <AdUnitsIcon className={styled.videoplayicon} />
                      <div className={styled.videoparagraph}>
                        <span>Access on mobile and TV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {updatepro && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Page;
