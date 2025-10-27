# React World Clock

A React application displaying synchronized clocks for different timezones around the world. All clocks share the same time state and can be adjusted simultaneously using intuitive control buttons.

## Features

- 🌍 **Multiple Timezone Clocks**: Displays clocks for 6 different timezones (UTC, EST, PST, GMT, JST, AEDT)
- 🔄 **Synchronized Time**: All clocks update in real-time and stay synchronized
- ⏱️ **Time Controls**: Adjust hours, minutes, and seconds across all clocks simultaneously
- 🎨 **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- 📱 **Mobile Responsive**: Works great on all screen sizes

## Time Controls

- **Hours**: Add or subtract 1 hour to all clocks
- **Minutes**: Add or subtract 1 minute to all clocks  
- **Seconds**: Add or subtract 10 seconds to all clocks
- **Reset**: Reset all clocks to the current real time

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

## Technologies Used

- React 19.2.0
- React Hooks (useState, useEffect)
- CSS3 with gradients and animations

## How It Works

The application maintains a single time state that is shared across all clock components. When you adjust the time using the control buttons, all clocks update simultaneously while respecting their timezone offsets. The clocks automatically tick forward every second, maintaining synchronization.
