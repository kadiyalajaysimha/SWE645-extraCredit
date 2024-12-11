<template>
  <div class="container-lg">
    <div class="custom-header">
      <div style="display: inline-block">
        <h1>CS Department Survey</h1>
      </div>
    </div>

    <div class="container-lg custom-form">
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label for="firstname">
            First Name <span class="required-field">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            v-model="surveyModel.firstName"
            placeholder="Enter first name"
            required
            autofocus
          />
        </div>

        <div class="form-group">
          <label for="lastname">
            Last Name <span class="required-field">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            v-model="surveyModel.lastName"
            placeholder="Enter last name"
            required
          />
        </div>

        <div class="form-group">
          <label for="streetAddress">
            Street Address <span class="required-field">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="streetAddress"
            v-model="surveyModel.streetAddress"
            placeholder="Enter Street Address"
            required
          />
        </div>

        <div class="form-group">
          <label for="city"> City <span class="required-field">*</span> </label>
          <input
            type="text"
            class="form-control"
            v-model="surveyModel.city"
            placeholder="Enter City"
            required
          />
        </div>

        <div class="form-group">
          <label for="state">
            State <span class="required-field">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            v-model="surveyModel.state"
            placeholder="Enter State"
            required
          />
        </div>

        <div class="form-group">
          <label for="zip"> Zip <span class="required-field">*</span> </label>
          <input
            type="text"
            class="form-control"
            v-model="surveyModel.zip"
            pattern="[1-9]{1}[0-9]{4}"
            placeholder="Enter Zip code - accepts only 5 digit number"
            required
          />
        </div>

        <div class="form-group">
          <label for="telephone">
            Telephone <span class="required-field">*</span>
          </label>
          <input
            type="tel"
            class="form-control"
            v-model="surveyModel.telephone"
            pattern="[1-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Enter telephone number - 999-999-9999"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">
            Email <span class="required-field">*</span>
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="surveyModel.email"
            placeholder="Enter Email - abc@domain.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="dateOfSurvey">
            Date of Survey <span class="required-field">*</span>
          </label>
          <input
            type="date"
            class="form-control"
            v-model="surveyModel.surveyDate"
            required
          />
        </div>

        <div>
          <h4>What did you like the most about the Campus?</h4>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="surveyModel.likeStudents"
            />
            <label class="form-check-label">Students</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="surveyModel.likeLocation"
            />
            <label class="form-check-label">Location</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="surveyModel.likeCampus"
            />
            <label class="form-check-label">Campus</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="surveyModel.likeAtmosphere"
            />
            <label class="form-check-label">Atmosphere</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="surveyModel.likeDormRooms"
            />
            <label class="form-check-label">DormRooms</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="surveyModel.likeSports"
            />
            <label class="form-check-label">Sports</label>
          </div>
        </div>

        <div>
          <h4>What are the factors behind your interest in the University?</h4>
          <div
            class="form-check"
            v-for="(value, key) in interestOptions"
            :key="key"
          >
            <input
              type="radio"
              class="form-check-input"
              :name="key"
              :id="key"
              :value="key"
              v-model="surveyModel.interested"
            />
            <label class="form-check-label" :for="key">{{ value }}</label>
          </div>
        </div>

        <div class="form-group">
          <label for="Recommendation">Recommend to Others</label>
          <select class="form-select" v-model="surveyModel.recommendation">
            <option value="" disabled>Select</option>
            <option value="Very Likely">Very Likely</option>
            <option value="Likely">Likely</option>
            <option value="Unlikely">Unlikely</option>
          </select>
        </div>

        <button type="submit" class="btn-primary btn custom-submit">
          Submit
        </button>
        <button
          type="reset"
          class="btn-primary btn custom-other-btn"
          @click="clearFields"
        >
          Reset
        </button>
        <RouterLink to="/" class="btn btn-secondary custom-other-btn"
          >Go back to Home</RouterLink
        >
      </form>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import surveyService from "@/services/surveyService";
export default {
  data() {
    return {
      surveyModel: {
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        telephone: "",
        email: "",
        surveyDate: "",
        likeStudents: "",
        likeLocation: "",
        likeCampus: "",
        likeAtmosphere: "",
        likeDormRooms: "",
        likeSports: "",
        interested: "",
        recommendation: "",
      },
      likeOptions: {
        Students: "Students",
        Location: "Location",
        Campus: "Campus",
        Atmosphere: "Atmosphere",
        DormRooms: "Dorm Rooms",
        Sports: "Sports",
      },
      interestOptions: {
        Friends: "Friends",
        Television: "Television",
        Internet: "Internet",
        Others: "Others",
      },
    };
  },
  created() {
    const id = this.$route.params.id;
    console.log("In created");
    console.log(id);
    if (id) {
      surveyService
        .getSurveyById(Number(id))
        .then((response) => {
          let data = response.data;
          // console.log(data.liked);
          console.log("Initial", data);
          let likedList;
          if (data.liked != null) {
            likedList = data.liked.split(",");

            for (let j = 0; j < likedList.length; j++) {
              if (likedList.includes("Students")) {
                data["likeStudents"] = true;
              } else {
                data["likeStudents"] = "";
              }
              if (likedList.includes("Location")) {
                data["likeLocation"] = true;
              } else {
                data["likeLocation"] = "";
              }
              if (likedList.includes("DormRooms")) {
                data["likeDormRooms"] = true;
              } else {
                data["likeDormRooms"] = "";
              }
              if (likedList.includes("Sports")) {
                data["likeSports"] = true;
              } else {
                data["likeSports"] = "";
              }
              if (likedList.includes("Atmosphere")) {
                data["likeAtmosphere"] = true;
              } else {
                data["likeAtmosphere"] = "";
              }
              if (likedList.includes("Campus")) {
                data["likeCampus"] = true;
              } else {
                data["likeCampus"] = "";
              }
            }
          }
          console.log("Initial Survey", this.surveyModel);
          console.log("Final", data);
          this.surveyModel = data;
          console.log("Final surveyModel");
          console.log(this.surveyModel);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  methods: {
    onFormSubmit() {
      if (this.validateFields()) {
        let likedList = "";
        if (this.surveyModel.likeStudents) likedList += "Students, ";
        if (this.surveyModel.likeLocation) likedList += "Location, ";
        if (this.surveyModel.likeCampus) likedList += "Campus, ";
        if (this.surveyModel.likeAtmosphere) likedList += "Atmosphere, ";
        if (this.surveyModel.likeDormRooms) likedList += "DormRooms, ";
        if (this.surveyModel.likeSports) likedList += "Sports, ";

        likedList = likedList.slice(0, likedList.length - 2);

        // const likedList = this.surveyModel.liked.join(", ");
        const survey = {
          ...this.surveyModel,
          liked: likedList,
        };
        console.log("Survey Data:", survey);
        if (this.surveyModel.surveyId) {
          survey.surveyId = this.surveyModel.surveyId;
          surveyService
            .updateExistingSurvey(survey)
            .then(() => {
              alert("Form Submitted Successfully");
              this.clearFields();
              this.$router.push("/surveyLists");
            })
            .catch((err) => {
              console.error("Error updating form:", err);
              alert("Failed to update survey Form");
            });
        } else {
          surveyService
            .submitSurvey(survey)
            .then(() => {
              alert("Form Submitted Successfully");
              this.clearFields();
              this.$router.push("/surveyLists");
            })
            .catch((err) => {
              console.error("Error saving form:", err);
              alert("Failed to save survey Form");
            });
        }
      }
    },
    validateFields() {
      const requiredFields = [
        "firstName",
        "lastName",
        "streetAddress",
        "city",
        "state",
        "zip",
        "telephone",
        "email",
        "surveyDate",
      ];
      for (let field of requiredFields) {
        if (!this.surveyModel[field]) {
          alert(`Please fill out the ${field} field.`);
          return false;
        }
      }
      return true;
    },
    clearFields() {
      this.surveyModel = {
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        telephone: "",
        email: "",
        surveyDate: "",
        liked: [],
        interested: "",
        recommendation: "",
      };
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f7;
}

.custom-GM_Full_Logo {
  width: 250px;
}

h1,
h4 {
  color: #006633;
}

.custom-header {
  border-style: solid;
  border-width: 5px;
  border-color: #006633;
  box-shadow: 5px 7px 8px;
  border-radius: 6px;
  background-color: #ffcc33;
}

.custom-form {
  margin-top: 20px;
}

label {
  font-size: 23px;
  font-family: sans-serif;
  font-weight: 550;
  color: #006633;
}

.custom-form div {
  margin-top: 16px;
}

.custom-submit {
  margin-top: 20px;
}

.custom-other-btn {
  margin-top: 20px;
  margin-left: 10px;
}

.graduation-div div {
  width: 200px;
  display: inline-block;
}

.required-field {
  color: red;
}

#error-div {
  color: red;
}

#error-zip {
  color: red;
}

.footer-sec {
  background-color: #ffcc33;
  height: 50px;
}
</style>
