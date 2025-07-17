
#  **Smart Travel App**

A smart travel assistant built with **React + Vite**, that gives you real-time **weather updates**, **clothing suggestions**, and **nearby tourist places** — all in one place!

---

##  **Features**

- 🌦️ **Live Weather** – Search any city to get current temperature, wind, humidity, and condition using **OpenWeatherMap API**.
- 👕 **Clothing Suggestions** – Automatically gives dressing tips based on weather conditions.
- 📍 **Nearby Places** – Discover top sightseeing spots using **Geoapify Places API**.
- 📱 **Responsive UI** – Works seamlessly on both desktop and mobile.
- 🔐 **Environment Variables** – Secure API keys via `.env` and Vite.

---

##  **Tech Stack**

- **React** + **Vite**
- **Material UI (MUI)** – Beautiful, accessible UI components
- **CSS3** – Flexbox-based styling
- **OpenWeatherMap API**
- **Geoapify Places API**

---

##  **Installation**

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/Smart-Travel-App.git
cd Smart-Travel-App
````

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Add `.env` File**

Create a `.env` file in the root folder:

```env
VITE_API_KEY_OPENWEATHERMAP=your_openweather_api_key
VITE_API_KEY_GEOAPIFY=your_geoapify_api_key
```


### 4. **Run the App**

```bash
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

##  **Preview**

### **Desktop Preview**

| **Weather Info**               | **Clothing Tip**               | **Places Nearby**             |
| ------------------------------ | ------------------------------ | ----------------------------- |
| ![](./screenshots/weather.png) | ![](./screenshots/clothes.png) | ![](./screenshots/places.png) |

### **Mobile Preview**

| **Weather Info**               | **Clothing Tip**               | **Places Nearby**             |
| ------------------------------ | ------------------------------ | ----------------------------- |
| ![](./screenshots/weather.png) | ![](./screenshots/clothes.png) | ![](./screenshots/places.png) |

---

##  **Project Structure**

```
Smart-Travel-App/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   ├── InfoBox.jsx
│   │   └── Places.jsx
│   ├── views/
│   │   ├── InfoBox.css
│   │   ├── SearchBox.css
│   │   └── Places.css
|   |   └── WeatherApp.css
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── main.jsx
├── .env
├── README.md
└── package.json
```

---

##  **Future Improvements**

* 🌐 **Geolocation auto-detect**
* 💬 **Integration of Available stay options**
* 🗺️ **Map view for tourist places**
* 🌙 **Dark mode support**
* 💬 **Multi-language support**

---



## 🙋‍♂️ **Author**

Built with ❤️ by **\Sayam**

> Found it useful? ⭐ the repo and spread the word!

```

---

### 🔍 Quick Summary of What’s Bold:
- All **section headings**
- All **feature and tech keywords**
- Important **file or command names**
- Warnings like **"Never commit this..."**
- Any UI label or concept name that adds value in **bold** (like Weather Info, Clothing Tip, etc.)

Let me know if you want this added directly to a file or pushed to GitHub.
```
