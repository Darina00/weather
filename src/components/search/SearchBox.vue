<template>
    <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." v-model="query" @keypress="fetchWeather" />
    </div>
</template>

<script>

export default {
    name: 'SearchBox',
    data() {
        return {
            api_key: '9ec6d80ad68c9a607bdd855c02d18094',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            currentWeather: {},
        }
    },
    methods: {
        fetchWeather(e) {
            if(e.key == "Enter") {
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res => res.json())
                .then(results => this.currentWeather = results)
                this.$store.commit('setWeather', this.currentWeather);
            }
        },
    },
}
</script>

<style scoped>
.search-box {
    width: 100%;
    margin-bottom: 30px;
}

.search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    transition: 0.4s;
}

.search-box .search-bar:focus {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0;
}
</style>