import { useEffect, useState } from "react";
import Displayer from "./Looper/Looper.jsx";
import { Displayer_qu } from "./Looper/Looper.jsx";
import Format from "./Looper/Format.jsx";
import { Vertical } from "./Looper/Vert.jsx";
import Media_data from "./Media_p/media_p.jsx";
import Media from "./album_style/media.jsx";
import Backmoves from "./WD/Backmoves.jsx";
import "./Looper/style/display.css";
import Files from "./data/Files.jsx";

function App() {
  const [data, set_data] = useState([]);
  const [loaded, load_set] = useState(false);

  useEffect(() => {
    Media_data.set_process(["Load to display", (result) => {}]);
    set_data(Files);
  }, []);

  useEffect(() => {
    load_set(true);
    data.map((result) => {});
  }, [data]);

  return (
    <>
      <Backmoves />
      <div className="canvas">
        <div className="found centerMedia">
          {loaded != true ? (
            <>Loading</>
          ) : (
            <>
              <Displayer
                key={`${data}${loaded}`}
                style_={Vertical}
                data_form={Format}
                data={data}
                title={"Search For -Click"}
                titQue={undefined}
                onClick={undefined}
              />
            </>
          )}
        </div>
      </div>

      <div className="album centerMedia">
        <Displayer_qu
          key={loaded}
          style_={Vertical}
          data_form={Media}
          title={"Album"}
          data={[]}
        />
      </div>
    </>
  );
}

export default App;
