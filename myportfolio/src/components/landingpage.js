import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/47683582_10158124645162907_4726016123701559296_n.jpg?_nc_cat=107&ccb=2&_nc_sid=7aed08&_nc_ohc=K5Ji5DNIASQAX9gtLKM&_nc_ht=scontent.ftpa1-1.fna&oh=41e96e1b960b11b72775f59610d1e0fe&oe=5FDE276A"
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