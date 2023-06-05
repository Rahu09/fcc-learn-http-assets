// async function getItemData() {
//   const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', getSettings())
//   return response.json()
// }

// const a = getItemData()

// a.then((ans2) => logItems(ans2))

const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', getSettings())
const ans =await response.json()

function getSettings() {
  return {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': 'Testing',
      'Content-Type': 'application/json'
    }
  }
}
console.log(ans);

function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  } 
}
