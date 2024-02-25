<template>
  <ion-page>
    <ion-menu side="end" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Display</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list-header>Appearance</ion-list-header>
        <ion-list :inset="true">
          <ion-item>
            <ion-toggle :checked="themeToggle" @ionChange="toggleChange($event)" justify="space-between">
              Dark Mode
            </ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list :inset="true">
          <ion-item :button="true">Text Size</ion-item>
          <ion-item>
            <ion-toggle justify="space-between">Bold Text</ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list-header>Brightness</ion-list-header>
        <ion-list :inset="true">
          <ion-item>
            <ion-range value="40">
              <ion-icon :icon="sunnyOutline" slot="start"></ion-icon>
              <ion-icon :icon="sunny" slot="end"></ion-icon>
            </ion-range>
          </ion-item>
          <ion-item>
            <ion-toggle justify="space-between" checked>True Tone</ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list :inset="true">
          <ion-item :button="true">
            <ion-label>Night Shift</ion-label>
            <ion-text slot="end" color="medium">9:00 PM to 8:00 AM</ion-text>
          </ion-item>
        </ion-list>

        <ion-button expand="block" color="danger" @click="logout">Logout</ion-button>
      </ion-content>
    </ion-menu>

    <ion-header class="ion-no-border">
      <ion-toolbar  color="primary">
        <ion-buttons slot="start">
          <ion-menu-toggle auto-hide="false">
            <ion-button>
              <ion-icon slot="icon-only" :icon="menuOutline"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>

        <ion-buttons slot="end">
          <!-- Notification icon -->
          <ion-button @click="navigateToNotifications">
            <ion-icon name="notifications-outline"></ion-icon>
          </ion-button>
          <!-- Settings button to toggle the navigation drawer -->
          <ion-button @click="toggleSettingsDrawer">
            <ion-icon name="settings-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content id="main-content" class="ion-padding">
      <div class="image-container">
      <img src="/25182785_7052751.jpeg" alt="Get Help you need when you need it" />
    </div>

      <!-- Your main content here -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonMenuToggle, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonToggle, IonRange } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { menuOutline, sunnyOutline, sunny } from 'ionicons/icons';
import axios from 'axios';


export default defineComponent({
  components: { IonPage, IonMenuToggle, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonListHeader, IonToggle, IonRange },
  setup() {
    const themeToggle = ref(false);

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Add or remove the "dark" class on the document body
    const toggleDarkTheme = (shouldAdd) => {
      document.body.classList.toggle('dark', shouldAdd);
    };

    // Check/uncheck the toggle and update the theme based on isDark
    const initializeDarkTheme = (isDark) => {
      themeToggle.value = isDark;
      toggleDarkTheme(isDark);
    };

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));

    // Listen for the toggle check/uncheck to toggle the dark theme
    const toggleChange = (ev) => {
      toggleDarkTheme(ev.detail.checked);
    };
const logout = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/logout', {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    localStorage.removeItem('token');
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

    return {
      menuOutline,
      sunnyOutline,
      sunny,
      toggleChange,
      themeToggle,
    };
  },
});
</script>

<style scoped>
.image-container {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  
}
.small-avatar {
  width: 100%;
  height: 100%;
  margin: 8px;
  max-width: 40px;
  background-color: white;
}
.ios body {
    --ion-background-color: #f2f2f6;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* This sets a different background and item background in light mode on md */
  .md body {
    --ion-background-color: #f9f9f9;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* This is added for the flashing that happens when toggling between themes */
  ion-item {
    --transition: none;
  }
</style>
