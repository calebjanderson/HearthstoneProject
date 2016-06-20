import fetch from 'isomorphic-fetch'


export function fetchCardByName(cardName) {
	let obj = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-Mashape-Key': 'z5AthkFHYimshOyYGJ3qPzMO02Msp1YdRJUjsnJlyToYz8NsEj'
    }
  }
  return fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${cardName}?collectible=1`, obj)
    .then(function(data){
      console.log(data, 'data')
      return data.json()
    })
}




export function fetchCardByClass(className) {
	let obj = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-Mashape-Key': 'z5AthkFHYimshOyYGJ3qPzMO02Msp1YdRJUjsnJlyToYz8NsEj'
    }
  }
  return fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${className}?collectible=1` , obj)
    .then(function(data){
      console.log(data, 'data')
      return data.json()
    })
}