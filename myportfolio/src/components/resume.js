import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Samer Wahba</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Developing front end website architecture.
Designing user interactions on web pages.
Developing back end website applications.
Creating servers and databases for functionality.
Ensuring cross-platform optimization for mobile phones.
Ensuring responsiveness of applications.
Working alongside graphic designers for web design features.
Seeing through a project from conception to finished product.
Designing and developing APIs.
Meeting both technical and consumer needs.
Staying abreast of developments in web applications and programming languages..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>150 BoardWalk Ave oviedo FL 32765</p>
            <h5>Phone</h5>
            <p>(407)878-8207</p>
            <h5>Email</h5>
            <p>wahba190@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2008}
              endYear={2012}
              schoolName="
              Arab Academy for Science, Technology, and Maritime Transport "
              schoolDescription="Double Major Bachelor Degree In Marketing And Business Administration"
               />

               <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Wells Fargo Service Manager ll    level III                                      "
              jobDescription="managing the direction of work for several direct reports and are involved in the day-to- day operations of the teller line. Successful service managers are role models for Wells Fargo's customer-centric culture, while embracing diversity and maintaining ethics and integrity."
              />

              <Experience
                startYear={2015}
                endYear={2018}
                jobName="Wells Fargo Branch Manager ll                                                        "
                jobDescription=" leader of the branch team and serve as the face of Wells Fargo in the community by actively participating in community events, committees, and business groups. They are role models for building lifelong relationships with customers, both consumers and small businesses."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={90}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;