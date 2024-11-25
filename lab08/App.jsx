import React, { useState } from "react";
import { Carousel, Form, Input, Button } from "antd";

export default function App() {
    const albums = [
        {
            id: "6BzxX6zkDsYKFJ04ziU5xQ",
            name: "COWBOY CARTER",
            image_url: "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599",
            spotify_url: "https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ",
        },
        {
            id: "2UJwKSBUz6rtW4QLK74kQu",
            name: "BEYONCÉ [Platinum Edition]",
            image_url: "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
            spotify_url: "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu",
        },
        {
            id: "6PeoltoiWQWCyWA0JBHVGN",
            name: "16 CARRIAGES",
            image_url: "https://i.scdn.co/image/ab67616d0000b273f5220893852002a2a3078bab",
            spotify_url: "https://open.spotify.com/album/6PeoltoiWQWCyWA0JBHVGN",
        },
        {
            id: "6oxVabMIqCMJRYN1GqR3Vf",
            name: "Dangerously In Love",
            image_url: "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1",
            spotify_url: "https://open.spotify.com/album/6oxVabMIqCMJRYN1GqR3Vf",
        },
        {
            id: "2m1enA3YrMLVvR3q0MqLpL",
            name: "COWBOY CARTER",
            image_url: "https://i.scdn.co/image/ab67616d0000b2734903a9678d5664b9cd9a3fd8",
            spotify_url: "https://open.spotify.com/album/2m1enA3YrMLVvR3q0MqLpL",
        },
    ];

    const [tracks, setTracks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [limit, setLimit] = useState(10);

    function albumToJSX(album) {
        return (
            <div key={album.id}>
                <img src={album.image_url} alt={album.name} style={{ maxWidth: "100%" }} />
                <h3>{album.name}</h3>
            </div>
        );
    }

    async function handleSearch() {
        const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
        const response = await fetch(url);
        const data = await response.json();
        setTracks(data);
    }

    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <Form layout="inline" onFinish={handleSearch}>
                    <Form.Item>
                        <Input
                            placeholder="Search Term"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder="Limit (max 20)"
                            type="number"
                            onChange={(e) => setLimit(e.target.value)}
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form>

                <Carousel style={{ margin: "20px 0", width: "640px", border: "solid 1px black" }}>
                    {albums.map(albumToJSX)}
                </Carousel>

                <Carousel>
                    {tracks.map((track) => (
                        <iframe
                            key={track.id}
                            src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            title={track.name}
                        ></iframe>
                    ))}
                </Carousel>
            </main>
        </>
    );
}