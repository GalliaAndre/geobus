<template>
  <div>
    <h1>This is the Database page</h1>
    <p>
      Qui vengono mostrati provvisoriamente i dati salvati nel DB
    </p>

    <!-- <ul>
      <li class="bulletless" v-for="position in positions" :key="position.time">
        {{ position.date }} {{ position.time }} {{ position.latitude }}
        {{ position.longitude }}
      </li>
    </ul>
    -->
    <p>
      {{ positions[positions.length - 1].date }}
      {{ positions[positions.length - 1].time }}
      {{ positions[positions.length - 1].latitude }}
      {{ positions[positions.length - 1].longitude }}
    </p>

    <button @click="getPeriodicalData(3000)">Keep Looking</button>
    <button @click="stopPeriodicalData()">Stop Updating</button>
  </div>
</template>

<script>
import axios from "axios";
var interval;

export default {
  data() {
    return {
      positions: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/positions")
        .then((response) => {
          this.positions = response.data;
        })
        .catch((error) => {
          console.log("There was an error: ", error.response);
        });
    },
    getPeriodicalData(milliseconds) {
      interval = setInterval(this.getData, milliseconds);
    },
    stopPeriodicalData() {
      clearInterval(interval);
    },
  },
};
</script>

<style>
.bulletless {
  list-style-type: none;
}
</style>
