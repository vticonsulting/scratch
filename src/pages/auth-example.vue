<template>
  <div class="ui main text container">
    <h1 class="ui header">
      Chapter 7 - Tying it all Together
    </h1>
    <p>
      This example builds upon everything we've covered in the book. It uses what we've learned to create a Nuxt.js app
      with a Vuex store and authentication, that fetches data from a remote API and displays it in a custom component,
      linking to a detail page for each item.
    </p>
    <p>
      Go to the <nuxt-link to="/users">
        Users page
      </nuxt-link>.
    </p>
  </div>
</template>
<template>
  <div>
    <b-jumbotron class="text-center">
      <h3>Welcome to Nuxt.js auth example</h3>
      <div class="mt-1">
        <template v-if="$auth.$state.loggedIn">
          <b-btn
            class="ml-3"
            variant="info"
            to="/secure"
          >Secure</b-btn>
          <b-btn
            class="ml-3"
            variant="danger"
            @click="$auth.logout()"
          >Logout</b-btn>
        </template>
        <b-btn
          variant="success"
          v-else
          to="/login"
        >Login</b-btn>
      </div>
    </b-jumbotron>

    <div>
      User status:
      <b-badge>{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</b-badge>
    </div>

    <p>Go to the <nuxt-link to="/users">Users page</nuxt-link>.</p>
  </div>
</template>

<script>
export default {
  layout: 'bootstrap',
}
</script>
