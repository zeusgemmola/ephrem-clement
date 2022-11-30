import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h5>
        Hi ! It seems like you've lost your way. <br />
        If you're planning a trip to London, i can provide you <br />
        a money converter just by clicking the button below. <br />
      </h5>
      <div class="button">
        <button class="go-button" onClick={goBack}>
          Lets convert money !
        </button>
      </div>
      <br />
      <h5>Else, here's a video for your personnal culture</h5>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/11ZVgbFFJzI?rel=0&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default NotFound;
