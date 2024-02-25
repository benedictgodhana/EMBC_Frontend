<template>
  <ion-page>
    <ion-content>
      <div class="image-container">
        <img src="/25182785_7052751.jpeg" alt="Get Help you need when you need it" />
        <p>Get Help you need when you need it</p>
      </div>

      <!-- Consultant Services Chips -->
     
      <!-- Ion Refresher -->
      <ion-refresher @ionRefresh="handleRefresh" slot="fixed">
        <ion-refresher-content pulling-icon="arrow-down" pulling-text="Pull to refresh" refreshing-spinner="circles" refreshing-text="Refreshing..."></ion-refresher-content>
      </ion-refresher>

      <!-- Buttons for authentication -->
      <div class="auth-buttons">
        <ion-button expand="full" color="" @click="continueWithGoogle" style="margin: 8px;">
          <ion-icon name="logo-google"></ion-icon>
        </ion-button>
        <ion-button expand="full" color="" @click="continueWithFacebook" style="margin: 8px;">
          <ion-icon name="logo-facebook"></ion-icon>
        </ion-button>
        <ion-button expand="full" color="" @click="continueWithApple" style="margin: 8px;">
          <ion-icon name="logo-apple"></ion-icon>
        </ion-button>
        <ion-button expand="full" color="success" @click="signUp" style="margin: 8px;">
          <ion-icon name="log-in-outline"></ion-icon>
          Sign up for free
        </ion-button>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonContent, IonPage, IonIcon, IonButton } from '@ionic/vue';
import { notificationsOutline } from 'ionicons/icons'; // Import the icons you want to use
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonIcon, IonButton },
  setup() {
    // Function to refresh consultant services
    const handleRefresh = async (event: CustomEvent) => {
      // Simulate refreshing data
      setTimeout(() => {
        console.log('Consultant services refreshed');
        event.detail.complete(); // Hide the refresher
      }, 2000);
    };

    // Functions for authentication buttons
    const continueWithGoogle = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/auth/google');
        window.location.href = response.data.redirect_url;
      } catch (error) {
        console.error('Error initiating Google OAuth authentication:', error);
      }
    };

    const continueWithFacebook = () => {
      // Implement Facebook authentication logic
      console.log('Continuing with Facebook');
    };

    const continueWithApple = () => {
      // Implement Apple authentication logic
      console.log('Continuing with Apple');
    };

    const signUp = () => {
      // Implement sign up logic
      console.log('Signing up for free');
    };

    return {
      notificationsOutline,
      handleRefresh,
      continueWithGoogle,
      continueWithFacebook,
      continueWithApple,
      signUp
    };
  }
});
</script>

<style scoped>
.image-container {
  text-align: center;
  margin-bottom: 20px;
}

.auth-buttons {
  margin-top: 20px;
  text-align: center;
}
</style>
