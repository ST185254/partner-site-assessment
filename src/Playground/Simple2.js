export default class SimpleSurvey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            survey: null,
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

      getModel(json){
        var model = new Survey.Model(json);
        return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
      }

      onComplete(survey, options) {
        console.log("Survey results: " + JSON.stringify(survey.data));
       }

 render() {
   return(
    <div>
    {this.state.survey ? this.getModel(this.state.survey) : null}
    </div>
   )
  }
} 