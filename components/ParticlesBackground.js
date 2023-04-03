import React, { Component } from 'react';
import Particles from 'particles.js';

class ParticlesBackground extends Component {

  componentDidMount() {
    // Load particles container
    Particles.init({
      // Particles.js configuration options
      selector: '.background',
      color: '#ffffff',
      connectParticles: true,
      sizeVariations: 3,
      maxParticles: 150,
      responsive: [{
        breakpoint: 768,
        options: {
          maxParticles: 100,
          color: '#00C9B1',
          connectParticles: false
        }
      }]
    });
  }

  render() {
    return (
      <div className="background" />
    );
  }
}

export default ParticlesBackground;
