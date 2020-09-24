<template>
  <div>
    <h1>This is the Send Location page</h1>

    <h3>Ti trovi alle seguenti coordinate:</h3>

    <p>{{ coordinates.lat }} : {{ coordinates.lng }}</p>

    <button v-on:click="startTracking()">Start Tracking</button>
    <button v-on:click="stopTracking()">Stop Tracking</button>

    <p></p>
  </div>
</template>

<script>
import VueGeolocation from "vue-browser-geolocation";
import Vue from "vue";
import axios from "axios";

var interval;

export default {
  data() {
    return {
      currentDate: "",
      currentTime: "",
      coordinates: {
        lat: "",
        lng: "",
      },
    };
  },
  created() {
    this.getCoordinates();
  },
  methods: {
    sendPosition() {
      this.getCoordinates();
      axios.post("http://localhost:3000/positions", {
        date: this.currentDate,
        time: this.currentTime,
        latitude: this.coordinates.lat,
        longitude: this.coordinates.lng,
      });
    },
    startTracking() {
      interval = setInterval(() => this.sendPosition(), 3000);
    },
    stopTracking() {
      clearInterval(interval);
    },
    getCoordinates() {
      Vue.use(VueGeolocation);

      this.$getLocation().then((coordinates) => {
        this.coordinates.lat = coordinates.lat;
        this.coordinates.lng = coordinates.lng;
        this.currentDate = new Date().toLocaleDateString();
        this.currentTime = new Date().toLocaleTimeString();
      });
    },
  },
};
</script>
