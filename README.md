# 🎬 IMDb Clone - React Movie Web App

A sleek and responsive IMDb-style movie browsing web app built with **React**, **Tailwind CSS**, and the **TMDB API**. Users can explore trending movies, manage their watchlist, filter by genre, search, and sort movies by rating and popularity.

## 🔥 Features

- 🔍 Search movies by name
- 🎞️ View trending movies from TMDB API
- 🎯 Filter by genre
- ⭐ Sort by IMDb rating or popularity
- ➕ Add/remove movies to/from your Watchlist (stored in `localStorage`)
- 📱 Fully responsive design

---

## 🚀 Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 🎥 TMDB API
- 🔄 React Router
- 📦 localStorage

---

## 🧠 How It Works

### 1. Fetch Movies
Uses `axios` to call [TMDB API](https://www.themoviedb.org/documentation/api) and fetch trending movies.

### 2. Movie Card Component
Displays movie poster, name, rating, and an option to add/remove from watchlist.

### 3. Watchlist Page
Stores selected movies in `localStorage` so they persist even after refreshing.

---

## 🛠️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/imdb-clone.git
cd imdb-clone
npm install
npm run dev
