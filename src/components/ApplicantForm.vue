<template>
  <div>
    <h2>{{ isEditMode ? 'Edit' : 'Add' }} Applicant</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="applicationDate">Application Date:</label>
        <input type="date" v-model="applicant.applicationDate" required />
      </div>
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" v-model="applicant.firstName" required />
      </div>
      <div>
        <label for="middleName">Middle Name:</label>
        <input type="text" v-model="applicant.middleName" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="applicant.lastName" required />
      </div>
      <div>
        <label for="sex">Sex:</label>
        <select v-model="applicant.sexId" required>
          <option v-for="sex in sexes" :value="sex.sexId" :key="sex.sexId">{{ sex.sexDescription }}</option>
        </select>
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" v-model="applicant.age" required />
      </div>
      <div>
        <label for="maritalStatus">Marital Status:</label>
        <select v-model="applicant.maritalStatusId" required>
          <option v-for="status in maritalStatuses" :value="status.maritalStatusId" :key="status.maritalStatusId">{{ status.maritalStatusDescription }}</option>
        </select>
      </div>
      <div>
        <label for="idPassportNumber">ID/Passport Number:</label>
        <input type="text" v-model="applicant.idPassportNumber" required />
      </div>
      <div>
        <label for="village">Village:</label>
        <select v-model="applicant.villageId" required>
          <option v-for="village in villages" :value="village.villageId" :key="village.villageId">{{ village.villageName }}</option>
        </select>
      </div>
      <div>
        <label for="postalAddress">Postal Address:</label>
        <input type="text" v-model="applicant.postalAddress" />
      </div>
      <div>
        <label for="physicalAddress">Physical Address:</label>
        <input type="text" v-model="applicant.physicalAddress" />
      </div>
      <div>
        <label for="telephoneContacts">Telephone Contacts:</label>
        <input type="text" v-model="applicant.telephoneContacts" required />
      </div>
      <div>
        <label for="declaration">Declaration:</label>
        <input type="checkbox" v-model="applicant.declaration" />
      </div>
      <button type="submit">{{ isEditMode ? 'Update' : 'Add' }} Applicant</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ApplicantForm',
  props: ['applicantId'],
  data() {
    return {
      applicant: {
        applicationDate: '',
        firstName: '',
        middleName: '',
        lastName: '',
        sexId: null,
        age: '',
        maritalStatusId: null,
        idPassportNumber: '',
        villageId: null,
        postalAddress: '',
        physicalAddress: '',
        telephoneContacts: '',
        declaration: false
      },
      sexes: [],
      maritalStatuses: [],
      villages: [],
      isEditMode: false
    };
  },
  methods: {
    fetchSexes() {
      axios.get('http://localhost:8080/api/sexes')
        .then(response => {
          this.sexes = response.data;
        })
        .catch(error => {
          console.error('Error fetching sexes:', error);
        });
    },
    fetchMaritalStatuses() {
      axios.get('http://localhost:8080/api/marital-statuses')
        .then(response => {
          this.maritalStatuses = response.data;
        })
        .catch(error => {
          console.error('Error fetching marital statuses:', error);
        });
    },
    fetchVillages() {
      axios.get('http://localhost:8080/api/villages')
        .then(response => {
          this.villages = response.data;
        })
        .catch(error => {
          console.error('Error fetching villages:', error);
        });
    },
    fetchApplicant() {
      if (this.applicantId) {
        axios.get(`http://localhost:8080/api/applicants/${this.applicantId}`)
          .then(response => {
            this.applicant = response.data;
            this.isEditMode = true;
          })
          .catch(error => {
            console.error('Error fetching applicant:', error);
          });
      }
    },
    handleSubmit() {
      const request = this.isEditMode
        ? axios.put(`http://localhost:8080/api/applicants/${this.applicantId}`, this.applicant)
        : axios.post('http://localhost:8080/api/applicants', this.applicant);

      request
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error saving applicant:', error);
        });
    }
  },
  mounted() {
    this.fetchSexes();
    this.fetchMaritalStatuses();
    this.fetchVillages();
    this.fetchApplicant();
  }
}
</script>

<style scoped>
/* Component-specific styles can be added here */
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="date"],
input[type="number"],
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}
</style>
