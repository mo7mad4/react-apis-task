import React, { Component } from "react";
import "./style.css";
import GiedComponents from "../../components/GiedComponents";
import HOME_PAGE_DATA from '../../mock/HomePageDATA'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        {HOME_PAGE_DATA.map((data,index)=>
          <GiedComponents
          key={index}
           title={data.title}
           subTitle={data.subTitle}
           paragraph={data.paragraph}
           moreRead={data.moreRead}
           image={data.image}
           nameOfImage={data.nameOfImage}
          />
          )}
      </div>
    );
  }
}
