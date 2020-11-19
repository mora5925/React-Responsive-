import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/15193477_10155562553792907_1716324699997995270_n.jpg?_nc_cat=104&ccb=2&_nc_sid=7aed08&_nc_ohc=NBFxTKp-m78AX8DzGZ5&_nc_ht=scontent.ftpa1-2.fna&oh=ceb0e6197fcd6fe6158d35c9b35ce0dc&oe=5FDA7669"
                         alt="samaer"
                         className="samer-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | BootStrap | JavaScript | NodeJS | MYSQL | MongoDB | React | React Native</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                    <a href="https://github.com/mora5925" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>


                            </div>


                        </div>
                        

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;