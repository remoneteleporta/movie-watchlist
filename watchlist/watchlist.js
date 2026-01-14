import { renderWatchlist } from '../utils/renderwatchlist.js'
const myWatchlist = localStorage.getItem("myWatchlist")
const watchListSection = document.getElementById("watch-list")

document.addEventListener("DOMContentLoaded", ()=> renderWatchlist(watchListSection, myWatchlist))