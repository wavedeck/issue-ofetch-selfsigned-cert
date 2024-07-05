export enum DayName {
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
}

export const useWeatherForecast = async (day: DayName) => {
  const apiBaseUrl = "http://127.0.0.1:5171";

  const { data, error } = await useFetch(`${apiBaseUrl}/weatherforecast`);

  const description = data.value
    ? (data as Ref<any[]>).value[day].summary
    : null;

  return {
    data: description,
    error: error,
  };
};
