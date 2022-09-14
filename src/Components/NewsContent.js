import React, { Component } from 'react'

export class NewsContent extends Component {
   
    
  render() {
   let {title, description, imageUrl, url } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{width : "18rem"}}>
          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/09/14/1600x900/43cb2d66-f88a-11ec-b6f2-35645806a8b6_1660913599478_1660913599478_1663163533928_1663163533928.jpg": imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">Explore</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsContent
