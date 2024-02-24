import React, { Component } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import style from "./News.module.css";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  

  async componentDidMount() {
    this.setState({ loading: true });
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=db3b1f8974e84aa29c58a075827f58fd&page=1&pagesize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=db3b1f8974e84aa29c58a075827f58fd&page=${
      this.state.page - 1
    }&pagesize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  handleNextClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=db3b1f8974e84aa29c58a075827f58fd&page=${
      this.state.page - 1
    }&pagesize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  render() {
    return (
      <div className={`container my-3 ${style.outer}`}>
        <p className={`mt-2 mb-4 ${style.heading}`}>
          Latest News Available Now
        </p>

        <div className={style.border}>
          <div className={`my-3 mx-4 row`}>
            {this.state.loading && <Spinner />}
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                element.title !=="[Removed]" && (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 65) : ""}
                      description={element.description ? element.description.slice(0, 130) : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                )
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className={style.prev}
                onClick={this.handlePrevClick}
              >
                {" "}
                <FaChevronCircleLeft size={30} /> PREVIOUS
              </button>
              <button className={style.dot}>
                {this.state.page}
              </button>
              <button
                type="button"
                disabled={
                  this.state.page >= Math.ceil(this.state.totalResults / 18)
                }
                className={style.prev}
                onClick={this.handleNextClick}
              >
                NEXT <FaChevronCircleRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
