// import './index.scss';

const renderPortfolio = (portfolio) => {
  return (
    <div className="images-container">
      {portfolio.map((port, idx) => {
        return (
          <div key={idx} className="image-box">
            <img src={port.cover} alt="Ryu" className="portfolio-image" />
            <div className="content">
              <p className="title">{port.title}</p>
              <h4 className="description">{port.description}</h4>
              <button className="btn" onClick={() => window.open(port.url)}>
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default renderPortfolio;
