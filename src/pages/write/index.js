import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Write extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (loginState) {
      return <div>写文章</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(["login", "login"]),
});

export default connect(mapStateToProps, null)(Write);
