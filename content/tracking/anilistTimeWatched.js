var query = `query {
  User(id: 5313378) {
    statistics {
      anime {
        minutesWatched
        episodesWatched
        count
      }
    }
  }
  MediaList(userId: 5313378, sort: UPDATED_TIME_DESC) {
    progress
    media {
      title {
        english
      }
    }
  }
}`;

var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query: query
        })
    };

fetch(url, options).then(handleResponse)
                    .then(handleData)
                    .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
  var minutesWatched = data["data"]["User"]["statistics"]["anime"]["minutesWatched"];
  var episodesWatched = data["data"]["User"]["statistics"]["anime"]["episodesWatched"];
  var lastWatchedSeries = data["data"]["MediaList"]["media"]["title"]["english"];
  var lastWatchEpisode = data["data"]["MediaList"]["progress"];
  document.getElementById("minutesWatched").innerHTML = minutesWatched;
  document.getElementById("episodesWatched").innerHTML = episodesWatched;
  document.getElementById("lastWatchedSeries").innerHTML = lastWatchedSeries;
  document.getElementById("lastWatchedEpisode").innerHTML = lastWatchEpisode;
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
