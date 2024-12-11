<template>
  <div>
    <h1 class="fw-bold" style="color: #006633">Other Surveys</h1>

    <div v-if="existingSurveys.length > 0" class="surveyList">
      <div
        v-for="survey in existingSurveys"
        :key="survey.surveyId"
        class="card cust-survey"
        style="width: 35rem"
      >
        <div class="card-body">
          <h3 class="card-title">
            <span class="fw-bold">First Name:</span> {{ survey.firstName }}
          </h3>
          <h3 class="card-title" style="margin-bottom: 16px">
            <span class="fw-bold">Last Name:</span> {{ survey.lastName }}
          </h3>

          <p class="card-text">
            <span class="fw-bold">Street Address: </span
            >{{ survey.streetAddress }}
          </p>
          <p class="card-text">
            <span class="fw-bold">City: </span>{{ survey.city }}
          </p>
          <p class="card-text">
            <span class="fw-bold">State: </span>{{ survey.state }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Zip: </span>{{ survey.zip }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Telephone: </span>{{ survey.telephone }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Date of Survey: </span>{{ survey.surveyDate }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Email: </span>{{ survey.email }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Likes about the campus: </span
            >{{ survey.liked }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Interest Source: </span
            >{{ survey.interested }}
          </p>
          <p class="card-text">
            <span class="fw-bold"> Recommending Likelihood: </span
            >{{ survey.recommendation }}
          </p>
          <p class="card-text">
            <span class="fw-bold">Comments: </span
            >{{ survey.additionalComments }}
          </p>

          <button
            class="btn btn-primary btn-md cust-edit"
            @click="editSurvey(survey.surveyId)"
          >
            Edit
          </button>
          <button
            class="btn btn-danger btn-md cust-del"
            @click="deleteSurvey(survey.surveyId)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <RouterLink to="/" class="btn btn-secondary custom-other-btn"
      >Go back to Home</RouterLink
    >
  </div>
</template>

<script>
import surveyService from "@/services/surveyService";
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      existingSurveys: [],
    };
  },
  mounted() {
    // console.log("Hello there");
    this.getAllExistingSurveys();
  },
  methods: {
    // Fetch all surveys from the service
    getAllExistingSurveys() {
      surveyService
        .getAllSurveys()
        .then((response) => {
          // console.log(response.data);
          let data = response.data;
          if (data && data.length > 0) {
            data.forEach((survey) => {
              const likedList = survey.liked.split(",");
              survey.likeStudents = likedList.includes("Students");
              survey.likeLocation = likedList.includes("Location");
              survey.likeDormRooms = likedList.includes("DormRooms");
              survey.likeSports = likedList.includes("Sports");
              survey.likeAtmosphere = likedList.includes("Atmosphere");
              survey.likeCampus = likedList.includes("Campus");
            });
            this.existingSurveys = data;
          }
          // console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // Edit Survey
    editSurvey(surveyId) {
      console.log(surveyId);
      this.$router.push(`/survey/${surveyId}`);
    },

    // Delete Survey
    deleteSurvey(surveyId) {
      console.log(surveyId);
      surveyService
        .deleteSurvey(surveyId)
        .then(() => {
          this.getAllExistingSurveys(); // Refresh the list after deletion
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.surveydiv {
  border-style: solid;
  border-width: 5px;
  border-color: #006633;
  border-radius: 6px;
}

.cust-del {
  margin-left: 10px;
}
.cust-survey {
  margin-bottom: 10px;
}

.surveyList {
  margin-left: 10px;
}

.custom-other-btn {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
