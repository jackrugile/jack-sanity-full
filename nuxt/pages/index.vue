<template>
  <div>
    <h1>Jack Sanity Full</h1>
    <p>Testing.</p>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData ({ $sanity }) {
    const query = groq`{ "articles": *[_type == "movie"] }`
    const data = await $sanity.fetch(query)
    console.log(data)
    return data
  },
  mounted () {

  }
}
</script>
