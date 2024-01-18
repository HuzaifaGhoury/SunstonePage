import React from 'react';
import styled from '../page.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import thumbnailone from '../../../public/Images/Thumbnail.svg';
import thumbnailtwo from '../../../public/Images/Thumbnailtwo.svg';
import thumbnailthree from '../../../public/Images/Thumbnailthree.svg';

const BlogsCourse = () => {
  return (
    <div>
      <div className={styled.blogsdiv}>
        <Typography className={styled.latesblog} variant='h6'>
          Latest Blogs
        </Typography>
        <div className={styled.courselist}>
          <div className={styled.coursedetail}>
            <div>
              <Image src={thumbnailone} alt='thumbnail' />
            </div>
            <div className={styled.thumbnailimg}>
              <Typography className={styled.coursepara} >
                UX & Web Design Master Course: Strategy, Design, Development
              </Typography>
              <br />
              <Typography className={styled.coursepara2} >
                Learn how to apply User Experience (UX) principles to your website designs...
              </Typography>
              <Button className={styled.courselanguage}>Large Language Models</Button>
            </div>
          </div>
          <div className={styled.coursedetail}>
            <div>
              <Image src={thumbnailtwo} alt='thumbnailtwo' />
            </div>
            <div className={styled.thumbnailimg}>
              <Typography className={styled.coursepara} >
                Gamification: Motivation Psychology & The Art of Engagement
              </Typography>
              <br />
              <Typography className={styled.coursepara2} >
                Learn how to motivate and engage anyone by learning the psychology that u...
              </Typography>
              <Button className={styled.courselanguage}>Generative Image Models</Button>
            </div>
          </div>
          <div className={styled.coursedetail}>
            <div>
              <Image src={thumbnailthree} alt='thumbnailthree' />
            </div>
            <div className={styled.thumbnailimg}>
              <Typography className={styled.coursepara}>
                SOLID Principles: Introducing Software Architecture & Design
              </Typography>
              <br />
              <Typography className={styled.coursepara2}>
                Gain mastery over SOLID Principles and write clean and well-designed code in...
              </Typography>
              <Button className={styled.courselanguage}>Natural Language Processing</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCourse;
