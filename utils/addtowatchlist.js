let myWatchList = []

export function addtoWatchlist(addMovie){
    myWatchList.push(addMovie)
 localStorage.setItem("myWatchlist", JSON.stringify(myWatchList) )
 return
}