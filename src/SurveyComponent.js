import React, {Component} from 'react';
import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Result from './Result';


class SurveyComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        submittedResponse : ""
      }
      this.onCompleteComponent= this.onCompleteComponent.bind(this);
    }
    onCompleteComponent= (result) => {
      var jsonString = JSON.stringify(result.data);
      this.setState({
        isCompleted: true,
        submittedResponse: jsonString
      });
    }
    render() {
      var surveyJSON = {"pages":[{"name":"PersonalDetails","elements":[{"type":"text","name":"nameOfPerson","title":"What is your name?","defaultValue":"John","isRequired":true,"placeHolder":"Name"},{"type":"text","name":"emailAddressOfPerson","title":"What is your email address?","defaultValue":"test@test.com","isRequired":true,"inputType":"email","placeHolder":"Email"},{"type":"text","name":"companyName","title":"What company do you work for?","defaultValue":"NCR","isRequired":true},{"type":"text","name":"roleOfPerson","title":"What is your role on this project?","defaultValue":"Tech Lead ","isRequired":true},{"type":"radiogroup","name":"isTechLead","title":"Will you be the technical lead assigned to this project?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"totalNumberOfLocations","title":"How many locations do you have?","defaultValue":"range1_10","isRequired":true,"choices":[{"value":"range1_10","text":"1-10"},{"value":"range11_49","text":"11-49"},{"value":"range50","text":"50+"}]},{"type":"radiogroup","name":"numberOfLocationsRequiredAssistance","title":"How many locations will you need assistance?","defaultValue":"range11_49","isRequired":true,"choices":[{"value":"range1_10","text":"1-10"},{"value":"range11_49","text":"11-49"},{"value":"range50","text":"50+"}]},{"type":"radiogroup","name":"timelineOfPartner","title":"What is the timeline you partner has provided you?","defaultValue":"90days","isRequired":true,"choices":[{"value":"30days","text":"30 days"},{"value":"60days","text":"60 days"},{"value":"90days","text":"90 days"}]},{"type":"radiogroup","name":"yourGotoLiveExpectation","title":"When is your expected go live date for pilot?","defaultValue":"30days","isRequired":true,"choices":[{"value":"30days","text":"30 days"},{"value":"60days","text":"60 days"},{"value":"90days","text":"90 days"}]},{"type":"radiogroup","name":"isPSNeeded","title":"Will you be needing PS consulting?","defaultValue":"yes","isRequired":true,"choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]}],"title":"Personal Details","description":"This details will help us know better about the organization and person filling this form"},{"name":"Skills Assessment","elements":[{"type":"rating","name":"rankOfATOSkills","title":"What is your teams technical ranking for installing, upgrading, and supporting ATO?","description":"1-10 scale; 1 is no knowledge and 10 is expert knowledge.","defaultValue":6,"isRequired":true,"rateMax":10},{"type":"radiogroup","name":"everUpgradedATO","visibleIf":"{rankOfATOSkills} >= 5","title":"Have your team ever upgraded ATO to a newer version?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"everConfiguredOrderModeInATO","visibleIf":"{rankOfATOSkills} >= 5","title":"Have you configured order mode in ATO?","defaultValue":"no","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"everConfiguredTendersInATO","visibleIf":"{rankOfATOSkills} >= 5","title":"Have you configured tenders in ATO?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"everSetupATOParameters","visibleIf":"{rankOfATOSkills} >= 5","title":"Are you able to set up the ATO system parameters for a store?","defaultValue":"no","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"rating","name":"rankMenuOnline","title":"What is your teams technical ranking forming and maintaining a menu online?","defaultValue":6,"rateMax":10},{"type":"radiogroup","name":"canCreateMultipleMenus","visibleIf":"{rankMenuOnline} > 5","title":"Can you create multiple menus?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateMulitipleSubMenus","visibleIf":"{rankMenuOnline} > 5","title":"Can you create multiple sub menus?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateAndModifyExistingMenuItems","visibleIf":"{rankMenuOnline} > 5","title":"Can you create and modify existing menu items and modifier groups?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canConfigModifiers","visibleIf":"{rankMenuOnline} > 5","title":"Are you able to config. modifiers as default vs. recipe?","defaultValue":"no","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canAssignImagesToMenuItems","visibleIf":"{rankMenuOnline} > 5","title":"Can you assign images to menu items?","defaultValue":"no","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"rating","name":"rankConfigurationCenter","title":"What is your teams technical ranking of Configuration center?","defaultValue":5,"rateMax":10},{"type":"radiogroup","name":"canCreateStores","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to create stores?","defaultValue":"no","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canMakeMenusCFC","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to make sub menus, menu items, modifier groups?","defaultValue":"no","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateOrderModes","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to create order modes?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canCreateTenders","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to create tenders?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"canConfigureItemRouting","visibleIf":"{rankConfigurationCenter} > 5","title":"Are you able to configure item routing?","defaultValue":"yes","choices":[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]},{"type":"radiogroup","name":"question1","title":"Who handles technical support on your Aloha POS system?","defaultValue":"ncrL1Support","choices":[{"value":"ncrL1Support","text":"NCR L1 Support"},{"value":"clientL1Support","text":"Client L1 Support"},{"value":"ncrL23Support","text":"NCR L2-3 Support"},{"value":"externalSuipport","text":"External Support"}],"otherText":"External Company"}],"visibleIf":"{isPSNeeded} = 'yes'","title":"Skills Assessment","description":"This section helps us to assess and analyze technical skills."}]}
      
      var surveyRender = !this.state.isCompleted?(
        <Survey.Survey json = {surveyJSON}
        showCompletedPage = {false}
        onComplete = {(result) => this.onCompleteComponent(result)} />
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