const mapEl = document.querySelector("#map");
const map = L.map("map");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

mapEl.style.display = "none";
// const displayCoordinates = (longitude, latitude) => {
//   // TODO #6: Insert the coordinates into the DOM
//   // - Display the coordinates in the element where the coordinates will be displayed
// };

const injectMap = (boundingBox) => {
  // TODO #5: Create the map
  // - Create a map using the Mapbox API
  // - Add a marker to the map at the coordinates
  // console.log(boundingBox);

  mapEl.style.display = "block";

  const south = parseFloat(boundingBox[0], 10);
  const north = parseFloat(boundingBox[1], 10);
  const west = parseFloat(boundingBox[2], 10);
  const east = parseFloat(boundingBox[3], 10);

  const bounds = L.latLngBounds(
    [south, west],
    [north, east]
  );

  map.fitBounds(bounds, {
    padding: [30, 30], // breathing room
    maxZoom: 17 // prevent absurd zoom-in for streets
  });
};

const showMapAndCoordinates = (userInput) => {
  // TODO #3: Construct the URL (with apiKey & userInput)
  // and make the fetch request to the mapbox API
  const url = `https://nominatim.openstreetmap.org/search?q=${userInput}&format=json`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // TODO #4: Extract the coordinates from the parsed JSON response (longitude, latitude)
      const boundingBox = data[0].boundingbox;
      // Use these coordinates to call the displayCoordinates and injectMap functions
      injectMap(boundingBox);
    });
};

// ### ### ### ### ###
// ### START HERE! ###
// ### ### ### ### ###
// TODO #1: Select the form element
const form = document.querySelector(".d-flex.my-5");
// TODO #2: Add event listener to the form that:
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const address = event.target.address.value;
  showMapAndCoordinates(address);
});
// - Prevents the default form submission behavior
// - Gets the user input
// - Calls the showMapAndCoordinates function with the userInput (it should be a string!) as an argument
