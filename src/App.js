import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import './index.css';
import profile from './assets/profile.png'
class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    this.togggleDisplayBio = this.togggleDisplayBio.bind(this);
  }


  togggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }


  render() {

    return (
      <div>
        <img src={profile} alt="profile-image" className='profile' />
        <h1>Hello!</h1>
        <p>May name is David. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Sofia, Bulgaria and code every day</p>
            <p>My favorite language is JavaScript, and i think react.js is awesome.</p>
            <p>Besides coding I also love music and football.</p>
            <button onClick={this.togggleDisplayBio}>Show less</button>
          </div>
        ) : (
            <div>
              <button onClick={this.togggleDisplayBio}>Read more</button>
            </div>
          )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}
export default App;
