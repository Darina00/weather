<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      <SearchBox />
      <Weather />
    </main>
  </div>
</template>

<script>
import SearchBox from './components/search/SearchBox';
import Weather from './components/weather/WeatherWrap';

export default {
  name: 'App',
  components: {
    SearchBox,
    Weather,
  },
  computed: {
    weather: {
      get() {
        return this.$store.getters.weather;
      },
      set(newValue) {
        this.$store.commit('setWeather', newValue);
      }
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url('./assets/warm-bg.jpg');
}

main {
  min-height: 100vh;
  padding: 15px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>
