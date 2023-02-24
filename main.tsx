import "./App.css";

function App() {
  return (
    <html>
      <head>
        <title>UniAct</title>
        <link rel="stylesheet" href="landing.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="box0">
          <h2>UniAct</h2>
        </div>
        <div className="emp">
          <p>
            <label>ลงทะเบียนเข้าร่วมกิจกรรม</label>
          </p>
        </div>
        <div className="box">
          <h2>กิจกรรม</h2>
        </div>
        <div className="box1">
          <h2>ค่าย/ค่ายออนไลน์</h2>
        </div>
        <div className="box2">
          <h2>หมวดหมู่</h2>
        </div>
        <a className="button" href="#openingactivity">
          ค่ายทั้งหมด
        </a>
        <a className="button" href="#onlinecamp">
          ค่ายออนไลน์
        </a>
        <a className="button" href="#field camp">
          ค่ายลงพื้นที่
        </a>
        <a className="button" href="#academic camp">
          ค่ายวิชาการ
        </a>
        <div className="box2">
          <h2 id="openingactivity">กิจกรรมที่เปิดอยู่</h2>
        </div>
        <div className="album grid">
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายออนไลน์"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">ค่ายออนไลน์</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card 1">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายลงพื้นที่"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">ค่ายลงพื้นที่</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card 1">
              <svg
                className="card-img-top"
                width="100%"
                height="200%"
                role="img"
                aria-label="ค่ายลงพื้นที่"
              >
                <text x="50%" y="50%">
                  ค่ายวิชาการ
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">ค่ายวิชาการ</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line">
          <h1 id="onlinecamp"> ค่ายออนไลน์</h1>
        </div>
        <div className="album grid">
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายออนไลน์"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text"> ค่ายวิชาการ</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card 1">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายลงพื้นที่"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">ค่ายลงพื้นที่</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line">
          <h1 id="field camp">ค่ายลงพื้นที่</h1>
        </div>
        <div className="album grid">
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายออนไลน์"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text"> ค่ายวิชาการ</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card 1">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายลงพื้นที่"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">ค่ายลงพื้นที่</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line">
          <h1 id="academic camp">ค่ายวิชาการ</h1>
        </div>
        <div className="album grid">
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายออนไลน์"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text"> ค่ายวิชาการ</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card 1">
              <svg
                className="card-img-top"
                width="100%"
                height="225"
                role="img"
                aria-label="ค่ายลงพื้นที่"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">ค่ายลงพื้นที่</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      README
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
