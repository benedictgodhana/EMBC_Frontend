<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <ion-title>Communication</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">

        <ion-card>
    <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
        
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

  export default {
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  };
</script>