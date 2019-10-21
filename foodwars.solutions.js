const episodes = [
  { title: "The Vast Wasteland", airdate: "April 4, 2015" },
  { title: "God Tongue", airdate: "April 11, 2015" },
  { title: "That Chef Doesn't Smile", airdate: "April 18, 2015" },
  { title: "The Madonna of the Polar Star", airdate: "April 25, 2015" },
  { title: "The Ice Queen and the Spring Storm", airdate: "May 2, 2015" },
  { title: "The Meat Aggressor", airdate: "May 9, 2015" },
  { title: "The Silent Bowl, the Eloquent Bowl", airdate: "May 16, 2015" },
  { title: "A Concerto of Concept and Creation", airdate: "May 23, 2015" }
];

function episodes_listing(array_of_episodes) {
  array_of_episodes.forEach((episode, array_index) => {
    const title = episode.title;
    const airdate = episode.airdate;
    console.log("Food Wars, Episode " + (array_index + 1), title, "aired on " + airdate)
  })
}

episodes_listing(episodes);