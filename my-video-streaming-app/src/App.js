import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to my Video Streaming App</h2>
      <video width="700px" height="400px" controls>
        <source src="https://d2xpign8lqkkjx.cloudfront.net/SuperbVideo.mp4" type="video/mp4"/>
      </video>

    </div>
  );
}

export default App;
