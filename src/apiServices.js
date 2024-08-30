const configs = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050",
  },
};

export async function getImagesByTopic(topic, page = 1, pageSize = 3) {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=${pageSize}`,
      configs
    );
    if (!res.ok) {
      throw new Error("Could not fetch images");
    }
    const images = await res.json();
    return images.photos;
  } catch (err) {
    console.error(err.message);
  }
}
