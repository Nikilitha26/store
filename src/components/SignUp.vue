<template>
   <div id="parent">
    <form @submit.prevent="formSubmit">
        <h1>Sign Up Form hehe</h1>
        <!-- Using v-model to save data in properties -->
         <label>Email: </label>
         <input type="email" required v-model="email">
         <label>Password: </label>
         <input type="password" required v-model="password">

         <label>Role:</label>
         <!-- Select box -->
          <select v-model="role">
            <!-- default option -->
             <option value="developer">Web Developer</option>
             <option value="designer">Web Designer</option>
             <option value="">Select Role:</option>
             </select>
             <label>Languages:</label>
             <input type="text" v-model="currentlanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
             <button type="submit">Submit</button>
             <div v-for="lang,index in languages" :key="index+1">
                <p id="para" @click='deletelang(lang)'>{{ index+1 }} : {{ lang }}
                </p>
                </div>
                <div class="terms">
                    <!-- isn't it insane? you can use  -->
                     <input type="checkbox" required v-model="terms">
                     <label>Accept Terms and Conditions</label>
                     </div>
                     <div>
                        <input type="checkbox" value="Mario" v-model="names">
                        <label>Mario</label>
                        </div>
                     <div>
                        <input type="checkbox" value="Dean" v-model="names">
                        <label>Dean</label>
                        </div>
                     <div>
                        <input type="checkbox" value="Luigi" v-model="names">
                        <label>Luigi</label>
                        </div>

        </form>
        </div>
        <!-- showing stored information -->
 </template>
 <script>
 
 // import form
 import SignUp from './components/SignUp.vue'
 
 export default {
    data(){
        return{
    email:'',
    password:'',
    role:'',
    // if you want default value to be chacked then change booleanto true
    terms:false,
    names:[],
    currentLanguage:'',
    languages: ['something' , "nothing"],
        }
    },

    formSubmit(){
        console.log('The page has refreshed')
        this.email= ''
        this.password = ''
        this.terms = ''
        this.currentLanguage = ''
        this.role = ''
    }
}
 </script>
 <style lang="">
     
 </style>