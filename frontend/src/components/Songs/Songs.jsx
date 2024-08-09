import YouTubeVideo from "../YoutubeVideo/YoutubeVideo";
import "./songs.css"

const Songs = (props) => {
  // deconstructuring the prop
  const { allSongs } = props;
  return (
    <>
      <header>These are my songs</header>
      <section className="videos-container">
        {allSongs.map((song, index) => (
          <YouTubeVideo
            key = {index}
            name={song.name}
            artist={song.artist}
            videoId={song.videoId}
          />
        ))}
      </section>
    </>
  );
};

export default Songs;
