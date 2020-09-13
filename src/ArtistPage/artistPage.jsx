import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { Nouvelle } from '../_components/New';
import { Ludotheque } from '../_components/Ludotheque';

class ArtistPage extends React.Component {
    /*  componentDidMount() {
          this.props.getUsers();
      }
  
      handleDeleteUser(id) {
          return (e) => this.props.deleteUser(id);
      }*/

    render() {
        // const { loggingIn } = this.props;
        // const { username, password, submitted } = this.state;
        const mystyle = {
            color: "white",
            backgroundColor: "red",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <div style={mystyle} className="">

                    <h2>Artiste</h2>
                    <p>La musique Rock, electronique ainsi que des clips et des services d'enregistrement</p>

                </div>
                <Nouvelle></Nouvelle>
                <div className="col-sm-12">

                    <div className='example_2'>
                        <Ludotheque></Ludotheque>

                    </div>
                </div>

            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(ArtistPage);
export { connectedHomePage as ArtistPage };