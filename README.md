# JavaScript Self-Driving Car

A browser-based self-driving car simulation built with plain JavaScript. The project trains and evolves car agents using a simple neural network, sensor feedback, and a road simulation.

![Self-driving car simulation](https://github.com/hpharis258/JavascriptSelfDrivingCar/blob/main/Ffi1GFev18.png)

## Features

- Simulated road and traffic environment
- Car sensors for obstacle detection
- Neural network-based driving logic
- Evolution / mutation of the best-performing brain
- Visualization of the network and driving behavior
- No external libraries required

## Project structure

```text
JavascriptSelfDrivingCar/
├── car.js
├── controls.js
├── index.html
├── main.js
├── network.js
├── road.js
├── sensor.js
├── style.css
├── utils.js
├── visualizer.js
└── Ffi1GFev18.png
```

## Run locally

1. Open the project folder in a browser, or run a simple local server from the repository root:

```bash
cd JavascriptSelfDrivingCar
python -m http.server 8000
```

2. Visit `http://localhost:8000` in your browser.

## Notes

This project is adapted from classic JavaScript self-driving car tutorials and demonstrates how a neural network can learn to avoid obstacles and stay on the road over time.
