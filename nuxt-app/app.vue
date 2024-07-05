<script setup lang="ts">
import { DayName } from "./composables/weather";

const { data: weatherData, error } = await useWeatherForecast(
  DayName.Wednesday
);
</script>

<template>
  <div>
    <p v-if="weatherData">Data: {{ weatherData }}</p>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>
