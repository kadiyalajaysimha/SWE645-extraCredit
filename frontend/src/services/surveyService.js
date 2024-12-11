import axios from "axios";

const API_URL = "http://ec2-3-213-242-74.compute-1.amazonaws.com:32001/api";

const SurveyService = {
  getAllSurveys() {
    return axios.get(`${API_URL}/getAllSurveys`);
  },

  getSurveyById(id) {
    console.log("In get method");
    return axios.get(`${API_URL}/getSurveyById/${id}`);
  },

  submitSurvey(survey) {
    return axios.post(`${API_URL}/createNewSuvery`, survey);
  },

  updateExistingSurvey(survey) {
    return axios.put(`${API_URL}/updateSuvery`, survey);
  },

  deleteSurvey(id) {
    return axios.delete(`${API_URL}/deleteSuveryById/${id}`);
  },
};

export default SurveyService;
