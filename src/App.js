import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-white is-bold">
      <div className="half-body">
        <div className="container">
          <h1 className="title">
            <font face="Impact">~Fox~</font>
          </h1>
        </div>
        <h2>きつねをみて癒されよう。</h2>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="photo">
      <div className="photo-image">
        <figure className="image">
          <img src={props.src} alt="fox" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <p>
      <font face="Impact">読み込み中です。少々お待ちください。</font>
    </p>
  );
}

function Gallery(props) {
  const { url } = props;
  if (url == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {/* {urls.map((url) => {
        return ( */}
      <div key={url} className="column is-3">
        <Image src={url} />
      </div>
      {/* );
      })} */}
    </div>
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    // const { number } = event.target.elements;
    // props.onFormSubmit(number.value);
    props.onFormSubmit();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          {/* <div className="control is-expanded">
            <div className="select is-halfwidth">
              <select name="number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div> */}
          <div className="control">
            <button type="submit" className="button is-black">
              🦊
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Main() {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    fetchImages().then((url) => {
      console.log(url);
      setUrl(url.image);
    });
  }, []);
  function reloadImages() {
    fetchImages().then((url) => {
      setUrl(url.image);
    });
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery url={url} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>FOx images are retrieved from RandomFox</p>
        <p>
          <a href="https://randomfox.ca/?i=113">Donate to  RandomFox</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;