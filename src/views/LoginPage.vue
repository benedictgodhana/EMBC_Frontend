<template>
    <ion-page>
      <ion-content>
        <!-- Arrow to go back to homepage -->
        <ion-button class="back-button" fill="clear" @click="goToHomePage">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </ion-button>
  
        <div class="image-container">
          <img src="/25182785_7052751.jpeg" alt="Get Help you need when you need it" />
          <p>Get Help you need when you need it</p>
        </div>
  
        <!-- Consultant Services Chips -->
       
        <!-- Ion Refresher -->
        <ion-refresher @ionRefresh="handleRefresh" slot="fixed">
          <ion-refresher-content pulling-icon="arrow-down" pulling-text="Pull to refresh" refreshing-spinner="circles" refreshing-text="Refreshing..."></ion-refresher-content>
        </ion-refresher>
  
        <!-- Login Form -->
        <form @submit.prevent="login">
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input  type="email" v-model="email"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
  
          <!-- Added an icon to the login button -->
          <ion-button expand="full" type="submit" color="primary" style="margin:8px;margin-top: 20px;">
            <ion-icon name="log-in-outline" slot="start"></ion-icon> <!-- Added icon -->
            Login
          </ion-button>
        </form>
  
        <!-- Signup link -->
        <div class="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </ion-content>
    </ion-page>
  </template>

  <script>
  import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import axiosInstance from '../service/api'

export default defineComponent({
  components: { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel, IonIcon },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        const response = await axiosInstance.post('/login', { email: email.value, password: password.value });
        const { token, role, user } = response.data;

        // Store token and user data in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect based on role
        if (role === 'superadmin') {
          router.push('/superadmin');
        } else if (role === 'admin') {
          router.push('/admin');
        } else if (role === 'consultant') {
          router.push('/consultant');
        } else if (role === 'client') {
          router.push('/welcomepage');
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    const goToHomePage = () => {
      router.push('/');
    };

    return {
      email,
      password,
      login,
      goToHomePage
    };
  }
});

  </script>

<style scoped>
.image-container {
  text-align: center;
  margin-bottom: 20px;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
}

/* Added border-radius to the login button */
ion-button {
  border-radius: 15px;
}
</style>
  