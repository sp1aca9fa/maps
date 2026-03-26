# Maps

A JavaScript web application that converts user-input addresses into geographic coordinates and displays the location on an interactive map.

## Features

- Geocode an address to find its geographic location
- Display results dynamically without page reload
- Render an interactive map fitted to the searched location
- Handle user input via form submission

## Tech Stack

- JavaScript (ES6)
- Fetch API
- OpenStreetMap (Nominatim API)
- Leaflet.js (map rendering)
- Bootstrap 5
- HTML & CSS

## How It Works

1. The user enters an address into a form
2. A request is sent to the OpenStreetMap Nominatim API
3. The API returns geographic coordinates (latitude & longitude)
4. The app dynamically updates the UI:
   - Renders a Leaflet map fitted to the result's bounding box

## Implementation Note

While the original challenge suggested using Mapbox, I chose to implement the solution using OpenStreetMap’s Nominatim API and Leaflet.

This decision was made to:
- Avoid requiring API keys or billing setup
- Work with fully open and free geolocation tools
- Gain a deeper understanding of how geocoding and map rendering can be combined independently

This alternative approach demonstrates flexibility in adapting technical solutions while still achieving the same core functionality.

## Setup

```bash
git clone https://github.com/sp1aca9fa/maps.git
cd maps
npx serve
```

Open in your browser: http://localhost:3000

## Learnings

- Making API requests with dynamic query parameters
- Parsing and using JSON responses from external services
- Handling form events and preventing page reloads
- Integrating geocoding services with map rendering libraries
- Adapting a solution by replacing suggested tools with alternatives

## Notes

This project is a solution to a bootcamp coding challenge and was adapted to use open-source geocoding and mapping tools instead of the originally suggested Mapbox stack.
