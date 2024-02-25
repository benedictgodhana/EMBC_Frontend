<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
       
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  import { homeOutline, calendarOutline, timeOutline, chatbubbleOutline, helpOutline } from 'ionicons/icons'; // Import the icons
  
  export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
      return {
        homeOutline, // Include the home icon
        calendarOutline, // Include the calendar icon
        timeOutline,     // Include the time icon
        chatbubbleOutline, // Include the chatbubble icon
        helpOutline // Include the help icon
      };
    },
  };
  </script>
  