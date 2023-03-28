export const getGifs = async (category) => {
    const limit = 10;
    const apiKey = 'XvzOH5hMDGh7qXZlUZUALXcQydUUUhyT';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${category}`;

    const result = await fetch(url);
    const { data } = await result.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};