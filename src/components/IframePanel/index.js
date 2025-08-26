import "./iframePanel.scss";
function IframePanel() {
  return (
    <>
      <div className="container">
        <div className="iframePanel">
          <iframe
            src="https://www.youtube.com/embed/L1kI-MVZtEY?si=ISuJHF0rKaxGZD2f"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default IframePanel;
