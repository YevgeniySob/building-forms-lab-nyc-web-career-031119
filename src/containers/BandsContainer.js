import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>

        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ bands: state.bands });

const mapDispatchToProps = dispatch => ({
  addBand: inputs => dispatch({type: 'ADD_BAND', payload: inputs})
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
