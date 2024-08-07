<template>
  <ApplicantForm :applicantId="$route.params.id" />
</template>

<script>
import ApplicantForm from '../components/ApplicantForm.vue';

export default {
  name: 'EditApplicant',
  components: {
    ApplicantForm
  }
}
</script>

<style scoped>
/* Component-specific styles can be added here */
</style>
