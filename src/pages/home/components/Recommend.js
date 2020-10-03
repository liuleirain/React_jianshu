import React, { PureComponent } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";

export class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {recommendList.map((recommend) => (
          <RecommendItem
            key={recommend.get("id")}
            imgUrl={recommend.get("imgURL")}
          ></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(["home", "recommendList"]),
});

export default connect(mapStateToProps, null)(Recommend);
