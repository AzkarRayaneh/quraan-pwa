<template>
  <section>
    <h1>بخش ها</h1>
    <ol>
      <li v-for="res in results"><router-link to="chapter/1">{{ res.title }}</router-link></li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'chapter',
  data () {
    return {
      results: []
    }
  },
  mounted () {
    this.results = [{
      'chapter': 1,
      'title': 'فصل اول - قرآن و سبک زندگی'
    },
    {
      'chapter': 2,
      'title': 'فصل اول - زندگی بهتر در پرتو دین داری'
    }
    ]
  }
}
</script>

<style>
  ol {
    text-align: right;
    background-color: #eee;
    border-radius: 4px;
  }
  li {
    padding: 5px;
    transition: all .6s ease;
  }
  li:hover {
    background: #ddd;
  }
  li:not(:last-child) {

    border-bottom: 1px solid #999;
  }
</style>

