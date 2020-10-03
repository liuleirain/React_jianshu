import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

export class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;

    return (
      <TopicWrapper>
        {topicList.map((topic) => {
          return (
            <TopicItem key={topic.get("id")}>
              <img
                className="topic-pic"
                src={topic.get("imgURL")}
                alt={topic.get("title")}
              />
              {topic.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(["home", "topicList"]),
});

export default connect(mapStateToProps, null)(Topic);
