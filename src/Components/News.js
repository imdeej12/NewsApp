import React, { Component } from 'react'
import NewsContent from './NewsContent'


export class News extends Component {

   
    constructor(){
        super();
        // console.log("Hello i am a constructor from news component");
        this.state = {
        articles: [],
        loading : false


        }
    }

    async componentDidMount(){
      // console.log("check");
      let url = "https://newsapi.org/v2/top-headlines?country=In&apiKey=82e2153cdb4e4168b7307dff248d21a7";

      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({articles:parsedData.articles})
    }

  render() {


    return (
      <div className= "container my-3">
        <h2>News Headlines...</h2>
        <div className="row">
        
        {this.state.articles.map((element)=>{
         
         return  <div className="col-md-4" key={element.url}>
                    <NewsContent title={element.title}  description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                </div>
        
        }
        )
    }

          
          </div>
      </div>
    )
  }
}

export default News
