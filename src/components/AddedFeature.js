import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from './action/index';
import AdditionalFeatures from './AdditionalFeatures';
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{
        props.removeFeature(props.feature.id)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};
/*const mapStateToProps = state => {
  return{
    feature: state.car,
  
  }
}*/
export default connect(null, {removeFeature}) (AddedFeature);
