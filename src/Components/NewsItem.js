import React, { Component } from "react";
import style from "./NewsItem.module.css";
import image from "./image.png";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className={`my-2 ${style.item} card`}>
        <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-danger ${style.spanner}`}>{source}</span>
        <img className="card-img-top" src={imageUrl?imageUrl:image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By <b>{author ? author : "Unknown"}</b> on <b>{date.split('T')[0]}</b></small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className={style.button}>
            KNOW MORE
          </a>
        </div>
      </div>
    );
  }
}
