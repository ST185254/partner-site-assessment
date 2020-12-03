import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "survey-react/modern.css"
import { API } from "aws-amplify";

export default class SimpleSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: {},
          };      
      }

    async componentDidMount() {

        try {
            let querystring = {'queryStringParameters':{'surveyId':this.props.surveyId}}
            const surveyjson = await this.getSurvey(querystring);
            this.setState({ survey: surveyjson});
        } catch (e) {
          alert(e);
        }
      }

      getSurvey(querystring) {
        return  API.get("survey", "/survey", querystring);
        }

simpleone = {"pages": [{"name": "page1","elements": [{"type": "text","name": "question1"}]}]}

 render() {
    console.log('simpleone object', this.simpleone)
    console.log('state object', this.state.survey)
    console.log('both obj the same?', this.simpleone === this.state.survey)
    console.log('simpleone string', JSON.stringify(this.simpleone))
    console.log('state string', JSON.stringify(this.state.survey))
    console.log('both string the same?', JSON.stringify(this.simpleone)===JSON.stringify(this.state.survey))

    // issue:  model works if use this.simpleone defined above; does not work if use this.state.survey set from API
    var model = new Survey.Model(this.simpleone);
    return (<Survey.Survey model={model}/>);
  }

}