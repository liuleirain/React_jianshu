import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

export class List extends PureComponent {
  render() {
    const { articleList, getMoreList } = this.props;
    return (
      <div>
        {articleList.map((article, index) => {
          return (
            <Link key={index} to={"/detail/" + article.get("id")}>
              <ListItem>
                <img
                  className="pic"
                  src={article.get("imgURL")}
                  alt={article.get("title")}
                />
                <ListInfo>
                  <h3 className="title">{article.get("title")}</h3>
                  <p className="desc">{article.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={getMoreList}>获取更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(["home", "articleList"]),
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
