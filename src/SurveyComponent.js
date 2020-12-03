import React, {Component} from 'react';
import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Result from './Result';


class SurveyComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        count : 0,
        currentPageNo:0,
        submittedResponse : "",
        currentData : null
      }
      this.onCompleteComponent= this.onCompleteComponent.bind(this);
      this.onValueChangedComponent= this.onValueChangedComponent.bind(this);
    }
    onCompleteComponent= (result) => {
      var jsonString = JSON.stringify(result.data);
      this.setState({
        isCompleted: true,
        submittedResponse: jsonString
      });
    }

    onValueChangedComponent= (result) => {
        this.setState({
          currentPageNo: result.currentPageNo,
          currentData: result.data,
          count: this.state.count+1
        });
    }
    render() {
      var surveyJSON = {"pages":[{"name":"PersonalDetails","elements":[{"type":"text","name":"nameOfPerson","title":"What is your name?","isRequired":true,"placeHolder":"Name"},{"type":"text","name":"emailAddressOfPerson","title":"What is your email address?","isRequired":true,"inputType":"email","placeHolder":"Email"},{"type":"text","name":"companyName","title":"What company do you work for?","isRequired":true},{"type":"text","name":"roleOfPerson","title":"What is your role on this project?","isRequired":true},{"type":"radiogroup","name":"isTechLead","title":"Will you be the technical lead assigned to this project?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"totalNumberOfLocations","title":"How many locations do you have?","isRequired":true,"choices":[{"value":"range1_10","text":"1-10"},{"value":"range11_49","text":"11-49"},{"value":"range50","text":"50+"}]},{"type":"radiogroup","name":"numberOfLocationsRequiredAssistance","title":"How many locations will you need assistance?","isRequired":true,"choices":[{"value":"range1_10","text":"1-10"},{"value":"range11_49","text":"11-49"},{"value":"range50","text":"50+"}]},{"type":"radiogroup","name":"timelineOfPartner","title":"What is the timeline you partner has provided you?","isRequired":true,"choices":[{"value":"30days","text":"30 days"},{"value":"60days","text":"60 days"},{"value":"90days","text":"90 days"}]},{"type":"radiogroup","name":"yourGotoLiveExpectation","title":"When is your expected go live date for pilot?","isRequired":true,"choices":[{"value":"30days","text":"30 days"},{"value":"60days","text":"60 days"},{"value":"90days","text":"90 days"}]},{"type":"radiogroup","name":"isPSNeeded","title":"Will you be needing PS consulting?","isRequired":true,"choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]}],"title":"Personal Details","description":"This details will help us know better about the organization and person filling this form"},{"name":"Skills Assessment","elements":[{"type":"rating","name":"rankOfATOSkills","title":"What is your teams technical ranking for installing, upgrading, and supporting ATO?","description":"1-10 scale; 1 is no knowledge and 10 is expert knowledge.","isRequired":true,"rateMax":10},{"type":"radiogroup","name":"everUpgradedATO","visibleIf":"{rankOfATOSkills} >= 5","title":"Have your team ever upgraded ATO to a newer version?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"everConfiguredOrderModeInATO","visibleIf":"{rankOfATOSkills} >= 5","title":"Have you configured order mode in ATO?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"everConfiguredTendersInATO","visibleIf":"{rankOfATOSkills} >= 5","title":"Have you configured tenders in ATO?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"everSetupATOParameters","visibleIf":"{rankOfATOSkills} >= 5","title":"Are you able to set up the ATO system parameters for a store?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"rating","name":"rankMenuOnline","title":"What is your teams technical ranking forming and maintaining a menu online?","rateMax":10},{"type":"radiogroup","name":"canCreateMultipleMenus","visibleIf":"{rankMenuOnline} > 5","title":"Can you create multiple menus?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateMulitipleSubMenus","visibleIf":"{rankMenuOnline} > 5","title":"Can you create multiple sub menus?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateAndModifyExistingMenuItems","visibleIf":"{rankMenuOnline} > 5","title":"Can you create and modify existing menu items and modifier groups?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canConfigModifiers","visibleIf":"{rankMenuOnline} > 5","title":"Are you able to config. modifiers as default vs. recipe?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canAssignImagesToMenuItems","visibleIf":"{rankMenuOnline} > 5","title":"Can you assign images to menu items?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"rating","name":"rankConfigurationCenter","title":"What is your teams technical ranking of Configuration center?","rateMax":10},{"type":"radiogroup","name":"canCreateStores","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to create stores?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canMakeMenusCFC","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to make sub menus, menu items, modifier groups?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateOrderModes","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to create order modes?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateTenders","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to create tenders?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canConfigureItemRouting","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to configure item routing?","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"question1","title":"Who handles technical support on your Aloha POS system?","choices":[{"value":"ncrL1Support","text":"NCR L1 Support"},{"value":"clientL1Support","text":"Client L1 Support"},{"value":"ncrL23Support","text":"NCR L2-3 Support"},{"value":"externalSuipport","text":"External Support"}],"otherText":"External Company"}],"visibleIf":"{isPSNeeded} = 'yes'","title":"Skills Assessment","description":"This section helps us to assess and analyze technical skills."}]}
      var model = new Survey.Model(surveyJSON);
      if(this.state.currentData){
        model.data = this.state.currentData;
        model.currentPageNo = this.state.currentPageNo;
     }
     
      var surveyRender = !this.state.isCompleted?(
        <Survey.Survey model = {model}
        showCompletedPage = {false}
        onComplete = {(result) => this.onCompleteComponent(result)}
        onValueChanged= {(result) => this.onValueChangedComponent(result)} />
      ) : null;
      var onSurveyCompletion = this.state.isCompleted?(
      <div> <Result response ={this.state.submittedResponse} /> </div>
  
      ): null;
      return (
        <div className="container">
          {surveyRender}
          {onSurveyCompletion}

          
        </div>
      );
    } 
  }
  
  export default SurveyComponent;