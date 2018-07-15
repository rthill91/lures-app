export function GetLures() {
  return fetch('/api/lures')
    .then(res => {
      return res.json();
    })
    .then(lureJson => {
      console.log(lureJson);
      // lures = lureJson
      return lureJson
    })
}

export function SaveLure(lure) {
  return fetch('/api/lure', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lure),
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err);
    });
}
