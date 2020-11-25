import React from 'react';
import * as questionTypes from './questionTypes';
import classes from './Result.module.css';
import {recommendPackages} from './recommendPackages';
import PackageList from './components/PackageList';
import Title from './components/Title';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ResponseTable from './components/ResponseTable';
import SimpleAccordion from './components/SimpleAccordion';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
function checkIfPropertyExists(responseObject, propertyName){
    return responseObject.hasOwnProperty(propertyName);
}

function getScoreJsonForCategory(responseObject, selfAsessmentParameter,selfAsessmentParameterScore, subQuestions, skillType ){
    var scoreAnalysis = {};
    scoreAnalysis["skillType"] = skillType;
    var score = 0;

    if(checkIfPropertyExists(responseObject, selfAsessmentParameter)){
         if(responseObject[selfAsessmentParameter] > selfAsessmentParameterScore){
           for (const [key, value] of subQuestions.entries()) {
                if(checkIfPropertyExists(responseObject, key)){
                    if(responseObject[key].toLowerCase() === 'yes'){
                       score+=value;
                    }
                }
              }
        }
    }    
    scoreAnalysis["internalScore"] = score;
    return scoreAnalysis;
}

function getScoreForCategory(responseObject, selfAsessmentParameter,selfAsessmentParameterScore, subQuestions, skillType ){
    var scoreAnalysis = [];
    scoreAnalysis.push(skillType +" skills:");
    var score = 0;
    if(checkIfPropertyExists(responseObject, selfAsessmentParameter)){
        scoreAnalysis.push("Self assessment score: " + responseObject[selfAsessmentParameter]);
        if(responseObject[selfAsessmentParameter] > selfAsessmentParameterScore){
           for (const [key, value] of subQuestions.entries()) {
                if(checkIfPropertyExists(responseObject, key)){
                    if(responseObject[key].toLowerCase() === 'yes'){
                        //scoreAnalysis.push( questionTypes.questions.get(key)  + " Yes");
                        //scoreAnalysis.push(" Scored points: " + value);
                        score+=value;

                    }else{
                        //scoreAnalysis.push(questionTypes.questions.get(key) + " No");        
                    }
                }
              }
            
        }else{
            scoreAnalysis.push("Professional Services is needed to handle " + skillType +" considering the low self rating");
        }
    }    

    scoreAnalysis.push("Internal Score : " + score);
    return getScoreListComponent(scoreAnalysis);
}


function getScores(responseObject){
    var completScoreAnalysis = [];
    completScoreAnalysis.push(getScoreForCategory(responseObject,  questionTypes.rankOfATOSkills, 5,questionTypes.atoAssessmentScores, "ATO" ));
    completScoreAnalysis.push(getScoreForCategory(responseObject,  questionTypes.rankMenuOnline, 5,questionTypes.menuAsssessmentScores, "Menu" ));
    completScoreAnalysis.push(getScoreForCategory(responseObject,  questionTypes.rankConfigurationCenter, 3,questionTypes.configurationCenterAssessmentScores, "Configuration Center CFC " ));
    
    return completScoreAnalysis.map((comp, i)=>{
        return(<div className={classes.Box} key={i}>
            {comp}
        </div>)   });
}

function getScoreListComponent(resultResponses){
    var singleScores = resultResponses.map((resultResponse, i)=>{
        return getSingleScore(resultResponse, i);
    });
    return( <div>
        {singleScores}
    </div>);

}

function getSingleScore(resultResponse, i){
    return(
        <div key={i}>
            <p> {resultResponse}</p>
        </div>
    );
}

function getRecordedSurveyData(responseObject){
    var resultResponses = [] ;
    for(var i=0; i<questionTypes.questionsInOrder.length; i++){
        if(checkIfPropertyExists(responseObject, questionTypes.questionsInOrder[i])){
            resultResponses.push({question: questionTypes.questions.get(questionTypes.questionsInOrder[i]), response: responseObject[questionTypes.questionsInOrder[i]] });
        }
    }
    return  <SimpleAccordion mainHeading="Result" subHeading="Expand to view completely"> < ResponseTable responses = {resultResponses} /> </SimpleAccordion> ;
}

function getPackages(responseObject){
    var atoScoreJson = getScoreJsonForCategory(responseObject,  questionTypes.rankOfATOSkills, 5,questionTypes.atoAssessmentScores, "ATO" );
    var menuScoreJson = getScoreJsonForCategory(responseObject,  questionTypes.rankMenuOnline, 5,questionTypes.menuAsssessmentScores, "Menu" );
    var cfcScoreJson = getScoreJsonForCategory(responseObject,  questionTypes.rankConfigurationCenter, 3,questionTypes.configurationCenterAssessmentScores, "Configuration Center CFC " );
    var packagesRecommended = recommendPackages(atoScoreJson.internalScore, menuScoreJson.internalScore, cfcScoreJson.internalScore);
    return <PackageList recommendedPackages = {packagesRecommended} />;
}

function Result (props) {
    var responseObj = JSON.parse(props.response);
    var completeResponses =  getRecordedSurveyData(responseObj);
    var packages = getPackages(responseObj);
    const classes = useStyles();
    return (
      <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
            Thanks for taking the pre-assessment test
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
            The below are the results.
            </Typography>
            {getScores(responseObj)}   
            <div>
                <Title> Recommended Packages </Title>
                {packages}
            </div>
            <div>
                <Title> Your responses </Title>                
                {completeResponses}
            </div>
          </Container>
        </div>
        </main>
    </React.Fragment>
       
    )
}

export default Result;