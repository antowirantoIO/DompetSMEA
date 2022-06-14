import React from "react";

export default function Transaction() {
  return (
    <div>
      <div className="section mt-4">
        <div className="section-heading">
          <h2 className="title">Transaksi</h2>
          <a href="app-transactions.html" className="link">
            Selengkapnya &rarr;
          </a>
        </div>
        <div className="transactions">
          {/* item */}
          <a href="app-transaction-detail.html" className="item">
            <div className="detail">
              <img
                src="img/sample/brand/1.jpg"
                alt="img"
                className="image-block imaged w48"
              />
              <div>
                <strong>Amazon</strong>
                <p>Shopping</p>
              </div>
            </div>
            <div className="right">
              <div className="price text-danger"> - $ 150</div>
            </div>
          </a>
          {/* * item */}
          {/* item */}
          <a href="app-transaction-detail.html" className="item">
            <div className="detail">
              <img
                src="img/sample/brand/2.jpg"
                alt="img"
                className="image-block imaged w48"
              />
              <div>
                <strong>Apple</strong>
                <p>Appstore Purchase</p>
              </div>
            </div>
            <div className="right">
              <div className="price text-danger">- $ 29</div>
            </div>
          </a>
          {/* * item */}
          {/* item */}
          <a href="app-transaction-detail.html" className="item">
            <div className="detail">
              <img
                src="img/sample/avatar/avatar3.jpg"
                alt="img"
                className="image-block imaged w48"
              />
              <div>
                <strong>Alex Ljung</strong>
                <p>Transfer</p>
              </div>
            </div>
            <div className="right">
              <div className="price">+ $ 1,000</div>
            </div>
          </a>
          {/* * item */}
          {/* item */}
          <a href="app-transaction-detail.html" className="item">
            <div className="detail">
              <img
                src="img/sample/avatar/avatar4.jpg"
                alt="img"
                className="image-block imaged w48"
              />
              <div>
                <strong>Beatriz Brito</strong>
                <p>Transfer</p>
              </div>
            </div>
            <div className="right">
              <div className="price text-danger">- $ 186</div>
            </div>
          </a>
          {/* * item */}
        </div>
      </div>
    </div>
  );
}
