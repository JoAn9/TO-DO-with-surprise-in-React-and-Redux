import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import { FormGroup, FormControl } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import imageBackground from '../images/235.jpg';
import { createUser } from '../actions/user';
import Header from './Header';

const container = {
  backgroundImage: 'url(' + imageBackground + ')',
  backgroundSize: 'cover',
  height: '100vh',
  // flex: 1,
  display: 'flex',
  // alignContent: 'spaceBetween',
  // justifyContent: 'center',
  // flexDirection: 'column',
};

const textFieldStyle = {
  marginLeft: 50,
  marginRight: 50,
  width: 200,
};

const buttonStyle = {
  margin: 50,
}


class Welcome extends React.Component {
  state = {
    user: {
      name: '',
      band: '',
    },
    buttonDisabled: true,
  };

  handleChange = stateName => event => {
    const { user } = this.state;
    const newUser = {
      ...user,
      [stateName]: event.target.value,
    };
    this.setState({
      user: newUser,
    });
  };

  submitUser = event => {
    event.preventDefault();
    console.log('submit & createUser');
    this.props.createUser(this.state.user.name, this.state.user.band);
  };

  render() {
    // const { classes } = this.props;
    console.log(this.state.user);
    console.log(this.props.userFromRedux);
    console.log(this.props.tasksToDo);
    return (
      <Grid container style={container}>
        <Grid container spacing={24} direction="column" alignItems="center" justify="center">
          <Grid item style={{margin: 50}}>
            <h2>Hello {this.state.user.name}</h2>
          </Grid>
          <Grid item>
            <form noValidate autoComplete="off" onSubmit={this.submitUser}>
              <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="name"
                    label="Your Name"
                    value={this.state.user.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    style={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="band"
                    label="Your Favourite Band"
                    value={this.state.user.band}
                    onChange={this.handleChange('band')}
                    margin="normal"
                    style={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="raised" type="submit" style={buttonStyle}>
                    Create User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        {/* <Grid container direction="column" justify="center" alignContent="center">
          <Grid item>
            <Link to="/list" style={styleButton}><Button variant="raised">Add some tasks to do</Button></Link>
          </Grid>
        </Grid> */} 
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item style={{marginBottom: 60}}>
            <Header />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(store) {
  return {
    userFromRedux: store.user,
    tasksToDo: store.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createUser,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
