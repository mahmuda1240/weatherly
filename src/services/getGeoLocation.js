export const getGeoLocation = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
  const result = await fetch(url).then((res) => res.json());
  if (!result) {
    throw new Error("GeoLocation not found");
  }
  const data = result.results[0];
  return {
    name: data.name,
    latitude: data.latitude,
    longitude: data.longitude,
  };
};
