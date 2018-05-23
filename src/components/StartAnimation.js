import React, { Component } from 'react';
import anime from 'animejs';

class StartAnimation extends Component {
  state = {
    animationFinished: false
  };
  componentDidMount() {
    const startElement = document.querySelector('.start');
    const greenWrapperElement = document.querySelector('.greenWrapper');
    startElement.setAttribute('style', 'display: block');
    greenWrapperElement.setAttribute('style', 'display: block');

    const basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets: '.start',
        duration: 1250,
        translateY: '50px',
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '.logo',
        duration: 1250,
        opacity: 1,
        easing: 'easeInOutQuad',
        offset: '-=1000'
      })
      .add({
        targets: '.yannicklombart',
        duration: 1500,
        opacity: 1,
        easing: 'easeInOutQuad',
        offset: '-=500'
      })
      .add({
        targets: '.title',
        duration: 1500,
        opacity: 1,
        easing: 'easeInOutQuad',
        offset: '-=600'
      })
      .add({
        targets: '.greenWrapper',
        duration: 150,
        delay: 2000,
        height: 0,
        easing: 'easeInOutQuad',
        offset: '-=600'
      })
      .add({
        targets: '.logo, .title, .yannicklombart',
        duration: 120,
        opacity: 0,
        easing: 'easeInOutQuad',
        offset: '-=400'
      });

    basicTimeline.complete = () => {
      const startElement = document.querySelector('.start');
      startElement.setAttribute('style', 'display: none');
      sessionStorage.setItem('animationFinished', true);
      this.props.finish();
    };
  }

  render() {
    return (
      <div className="greenWrapper">
        <div className="start">
          <img className="logo" src="/static/yannicklogo.svg" />
          <span className="yannicklombart">yannick lombart</span>
          <span className="title">
            offerte <b>hulpia.be</b>
          </span>
        </div>
      </div>
    );
  }
}

export default StartAnimation;
