import React, { Component, Fragment } from 'react'
import AppContext from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class Welcome extends Component {

    constructor() {
        super();

        this.state = {
            error: null
        };
    }

    render() {
        return (
            <div id="login">
                
                <div className="login-container">
                    <AppContext.Consumer>
                        {(context) => (
                            <form id="login-form">
                                <h1>Join a room</h1>
                                <span>Name: </span>
                                <input type="text" name="name" value={context.name} onChange={(e) => {
                                    context.setName(e.target.value);
                                    if(this.state.error) {this.setState({error: ''})};
                                }} placeholder="name"/>
                                <span>Room ID: </span>
                                <input type="text" name="roomId" value={context.roomId} onChange={(e) => {
                                    context.setRoomId(e.target.value);
                                    if(this.state.error) {this.setState({error: ''})};
                                }} placeholder="Room ID"/>
                                <button className="login-field" type="submit" onClick={(e) => {
                                e.preventDefault();
                                if(context.name && context.roomId) {
                                    context.toggleShowBoard();
                                    return;
                                } 
                                this.setState({error: 'Missing name/roomId'});
                                }}>Join Session</button>
                            </form>
                        )}
                    </AppContext.Consumer>
                </div>
                {this.state.error && <span className="error">{this.state.error}</span>}
                <hr />
            </div>
        )
    }
}

