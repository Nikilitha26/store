import { createStore } from 'vuex'


export default createStore({
  // variables
  state: {
    // data -> prpertyName, null-> value
    // data:null, - stores nothing
eduction: null,
about: null,
workExperience: null,
projects: null,
testimonials: null,
skills: null,
  },
  getters: {
    // filterData(){
    //   return Array.filter()
    // }
  },
  mutations: {
    // commiting a mutation
    // use this to change /update the state
  //   updateData(state, payload){
  //     state.data = payload
  //   }
  setAboutMe(state,payload){
    state.aboutMe = payload
  },
  setEducation(state,payload){
    state.education = payload
  },
  setSkills(state,payload){
    state.skills = payload
  },
  setTestimonials(state,payload){
    state.testimonials = payload
  },
  setWorkExperience(state,payload){
    state.workexperience = payload
  },
  setProjects(state,payload){
    state.projects = payload
  }
  },
  actions: {
    // dispatching an action
    // run all async code
  //   fetchData(payload){
    
  //   }

  async getAboutMe(commit){
    let fetchedInfo = await fetch('https://candice-dk3.github.io/first_api/data/data.json')
    let data = await fetchedInfo.json()
  //  context.commit('setAboutMe' , aboutMe)
   let {aboutMe,projects,education,skills,testimonials}= data
   //console.log(data);
   commit('setAboutMe', aboutMe)
   commit('setProjects', projects)
   commit('setEducation', education)
   commit('setSkills', skills)
   commit('setTestimonials', testimonials)
  }
  // async getAboutMe(commit){
  //   let fetchedInfo = await fetch()
  //   let converted = await fetchedInfo.json()
  //  context.commit('setAboutMe' , aboutMe)
  // }
  // async getAboutMe(commit){
  //   let fetchedInfo = await fetch()
  //   let converted = await fetchedInfo.json()
  //  context.commit('setAboutMe' , aboutMe)
  // }
  // async getAboutMe(commit){
  //   let fetchedInfo = await fetch()
  //   let converted = await fetchedInfo.json()
  //  context.commit('setAboutMe' , aboutMe)
  // }
  // async getAboutMe(commit){
  //   let fetchedInfo = await fetch()
  //   let converted = await fetchedInfo.json()
  //  context.commit('setAboutMe' , aboutMe)
  // }
  // async getAboutMe(commit){
  //   let fetchedInfo = await fetch()
  //   let converted = await fetchedInfo.json()
  //  context.commit('setAboutMe' , aboutMe)
  // }

  },
  modules: {
  }
})
