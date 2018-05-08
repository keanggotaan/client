import React, { Component } from 'react';
import {getMemberData} from '../store/member/member.action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class MemberList extends Component {
  componentDidMount(){
    this.props.getMemberData()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  member: state.member
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMemberData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MemberList)