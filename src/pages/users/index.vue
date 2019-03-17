<template>
  <div class="ui main text container">
    <h1 class="ui header">
      Users
    </h1>

    <StaffDirectory
      :employees="employeeList"
      @select="showDetail"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StaffDirectory from '@/components/StaffDirectory'

export default {
  layout: 'semantic-ui',
  components: { StaffDirectory },
  computed: {
    ...mapGetters(['employeeList']),
  },
  fetch: ({ store }) => {
    return store.dispatch('getEmployees')
  },
  methods: {
    showDetail (employee) {
      this.$router.push({
        name: 'users-id',
        params: { id: employee.id },
      })
    },
  },
}
</script>
