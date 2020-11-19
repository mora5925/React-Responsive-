import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/126552047_10160559736652907_71579686096077317_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8024bb&_nc_ohc=xBEDa6wrvBYAX9mGXFI&_nc_oc=AQmL0RGN3KNKC3DajjRUsq3yOvLayASCgvxhR2Pi6zT47j1_t3ckUFBo2eu9yKIxqCYRRRsVXdrxcIJYj9s1XF2M&_nc_ht=scontent.ftpa1-2.fna&oh=df7bbddcce0611c15554345669755551&oe=5FDADAC1) center / cover'}} >React Project #1</CardTitle>
            <CardText>
            Overview of the project: As a homebuyer, I want to see greater information on the area that I am looking at in order to be more confident in my real estate purchase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/126408125_10160559735007907_2377822252361212066_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8024bb&_nc_ohc=0ES5f5ecVwMAX_xtJ7a&_nc_ht=scontent.ftpa1-2.fna&oh=befdf24a9970f996f52029225ecf1889&oe=5FDD1E72) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            Bookmark is a website that alows you to see recomended books, search for books, and add a book to the database.
From there you can see more details on the book you search and select.
You can also add the book to your "favorites" section on your account.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/126767059_10160559727162907_2361610902592907450_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8024bb&_nc_ohc=QZkyKWDj2NYAX8xkr-W&_nc_ht=scontent.ftpa1-1.fna&oh=6fa2d009005fda880d1685d934ec33b4&oe=5FDDE16C) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            In this application the user will be able to add any burger to a database, also they can devour the burger with the push of a button.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
   
    
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;