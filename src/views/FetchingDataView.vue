<template lang="">

<div>
<div v-for="project in projectData()" :key="project.name">
    <h1>{{project.name}}</h1>

</div>
        hehe
        {{$store.state.aboutMe}}
    </div>
</template>
<script>
export default {
    methods:{
        projectData(){
          return  this.$store.state.projects
        }
    },
    // mounted(){
    //     this.getAboutMe
    // }
}
</script>
<style lang="">
    
</style>