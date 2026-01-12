const baseURL = "https://apis.scrimba.com/jsonplaceholder/posts";

async function getData() {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("done")
  }

}

getData();
