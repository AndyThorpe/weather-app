import React, { Component } from 'react';
import '../App.css';
import store from "./redux/store/index.js";
import { connect } from "react-redux"; 

class Msg extends Component {

  render() {  
        return (
          <div className="Message">
                {this.props.message}
            </div>
        );
    }
  }

  function mapStateToProps(state) {
    return {
      loading: state.loading,
    };
  }

  export default connect(mapStateToProps)(Msg);
