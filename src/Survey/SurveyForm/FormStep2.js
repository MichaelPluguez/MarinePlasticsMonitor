import React, { Component } from 'react';

class FormStep2 extends Component {
  render() {
    return (
      <form>
    
  <h2>Survey Area</h2>
  <label>Name of Beach</label>
  <input
    type='text'
    placeholder='Name of Beach'
    id='beach'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />
  <label>Reason for Location Choice</label>
  <input
    type='text'
    placeholder='Reason for Location Choice (ex. Proximity, Problem Spot, etc.)'
    id='reason'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />
  <label>Substrate Type</label>

  <input
    type='text'
    placeholder='Substrate Type (ex. Sand, Gravel, etc.)'
    id='st'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />

  <label>GPS Coordinates (Starting Point)</label>
    <br/>
  <input
    type='number'
    placeholder='Latitude'
    id='lat'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin uk-width-1-2@s'
  />
  <input
    type='number'
    placeholder='Longitude'
    id='lon'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin uk-width-1-2@s'
  />

  <label>Slope</label>
  <input
    type='text'
    placeholder='Slope (ex. Steep, Gradual, Gentle, etc.)'
    id='slope'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />
        <h2>Survey Area</h2>
        <label>Name of Beach</label>
        <input
          type='text'
          placeholder='Name of Beach'
          id='beach'
          onChange={ this.props.handleInputChange }
          className='uk-input uk-margin'
        />
        <label>Reason for Location Choice</label>
        <input
          type='text'
          placeholder='Reason for Location Choice (ex. Proximity, Problem Spot, etc.)'
          id='reason'
          onChange={ this.props.handleInputChange }
          className='uk-input uk-margin'
        />
        <label>Substrate Type</label>
        <input
          type='text'
          placeholder='Substrate Type (ex. Sand, Gravel, etc.)'
          id='st'
          onChange={ this.props.handleInputChange }
          className='uk-input uk-margin'
        />
        <label>GPS Coordinates (Starting Point)</label>
        <input
          type='number'
          placeholder='Latitude'
          id='lat'
          onChange={ this.props.handleInputChange }
          className='uk-input uk-margin'
        />
        <input
          type='number'
          placeholder='Longitude'
          id='lon'
          onChange={ this.props.handleInputChange }
          className='uk-input uk-margin'
        />
        <label>Slope</label>
        <input
          type='text'
          placeholder='Slope (ex. Steep, Gradual, Gentle, etc.)'
          id='slope'
          onChange={ this.props.handleInputChange }
          className='uk-input uk-margin'
        />
        <label>Nearest River Output</label>
    <br/>
  <input
    type='text'
    placeholder='Name'
    id='nroName'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin  uk-width-1-2@s'
  />
  <input
    type='number'
    placeholder='Distance (m)'
    id='nroDist'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin  uk-width-1-2@s'
  />
  <label>Aspect</label>
  <input
    type='text'
    placeholder='(Compass direction facing water in degrees, perpendicular to spine)'
    id='aspect'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />
  <label>Tide Information</label>
  <br/>
  <input
    type='text'
    placeholder='Last Tide / Height'
    id='lastTide'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin  uk-width-1-2@s'
  />
  <input
    type='text'
    placeholder='Next Tide / Height'
    id='nextTide'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin  uk-width-1-2@s'
  />
  <label>Wind Direction</label>
  <input
    type='text'
    placeholder='Wind Speed/Direction'
    id='windDir'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />
  <label>Major Usage</label>
  <input
    type='text'
    placeholder='(ex. Recreational, Commercial, Remote/Unused, Private, etc.)'
    id='majorUse'
    onChange={ this.props.handleInputChange }
    className='uk-input uk-margin'
  />
      </form>
    )
  }
}

export default FormStep2;
