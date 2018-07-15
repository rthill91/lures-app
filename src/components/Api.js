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
    .catch(err => {
      console.error(err);
    });
}
