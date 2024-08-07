<template>
  <div>
    <h2>Applicants</h2>
    <table>
      <thead>
        <tr>
          <th>Application Date</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Marital Status</th>
          <th>ID/Passport</th>
          <th>Village</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="applicant in applicants" :key="applicant.applicantId">
          <td>{{ applicant.applicationDate }}</td>
          <td>{{ applicant.firstName }}</td>
          <td>{{ applicant.middleName }}</td>
          <td>{{ applicant.lastName }}</td>
          <td>{{ applicant.sex.sexDescription }}</td>
          <td>{{ applicant.age }}</td>
          <td>{{ applicant.maritalStatus.maritalStatusDescription }}</td>
          <td>{{ applicant.idPassportNumber }}</td>
          <td>{{ applicant.village.villageName }}</td>
          <td>
            <button @click="approveApplicant(applicant.applicantId)">Approve</button>
            <button class="edit" @click="editApplicant(applicant.applicantId)">Edit</button>
            <button class="delete" @click="deleteApplicant(applicant.applicantId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ApplicantList',
  data() {
    return {
      applicants: []
    };
  },
  methods: {
    fetchApplicants() {
      axios.get('http://localhost:8080/api/applicants')
        .then(response => {
          this.applicants = response.data;
        })
        .catch(error => {
          console.error('Error fetching applicants:', error);
        });
    },
    approveApplicant(id) {
      axios.patch(`http://localhost:8080/api/applicants/${id}/approve`)
        .then(() => {
          this.fetchApplicants();
        })
        .catch(error => {
          console.error('Error approving applicant:', error);
        });
    },
    editApplicant(id) {
      this.$router.push(`/edit/${id}`);
    },
    deleteApplicant(id) {
      axios.delete(`http://localhost:8080/api/applicants/${id}`)
        .then(() => {
          this.fetchApplicants();
        })
        .catch(error => {
          console.error('Error deleting applicant:', error);
        });
    }
  },
  mounted() {
    this.fetchApplicants();
  }
}
</script>

<style scoped>
/* Component-specific styles can be added here */
</style>
