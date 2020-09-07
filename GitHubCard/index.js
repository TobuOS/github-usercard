import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



axios.get('https://api.github.com/users/TobuOS')
.then((x) => {
  console.log(x)
})
.catch((err) => {
alert(`Error has occurred in transfer: ${err}` )
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/TobuOS')
.then((x) => {
  cardCreator(x)
})
.catch((err) => {
alert(`${err}` )
})

/*
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  `tetondan` ,
  `dustinmyers` ,
  `justsml` ,
  `luishrd` ,
  `bigknell`
];

followersArray.forEach(other => {
  
  axios.get(`https://api.github.com/users/${other}`)
.then((x) => {
  cardCreator(x)
})
.catch((err) => {
alert(`${err}`)
})
return other
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

 function cardCreator(x){
  const card = document.createElement('div')
  const avi = document.createElement('img')
  const info = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const page = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  let cards = document.querySelector('.cards')

  cards.appendChild(card)
  card.appendChild(avi)
  card.appendChild(info)
  info.appendChild(name)
  info.appendChild(username)
  info.appendChild(location)
  info.appendChild(profile)
  profile.appendChild(page)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)


  avi.src = x.data.avatar_url
  name.innerText = `${x.data.name}`
  username.innerText = `${x.data.login}`
  location.innerText = `Location: ${x.data.location}`
  page.href = x.data.html_url
  page.innerText = `${x.data.html_url}`
  followers.innerText = `Followers: ${x.data.followers}`
  following.innerText = `Following: ${x.data.following}`
  bio.innerText = `Bio: ${x.data.bio}`

  return card
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
