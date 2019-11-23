import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from './action/index'

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"onClick={()=>
        {addFeature(props.feature.id)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
/*const mapStateToProps = state => {
  return{
    feature: state.additionalFeatures
  }
}*/

export default connect(null, {addFeature})(AdditionalFeature);
