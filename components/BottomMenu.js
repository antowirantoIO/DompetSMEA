import React from "react";

export default function BottomMenu() {
  return (
    <div>
      <div
        className="appBottomMenu"
      >
        <a href="#" className="item active">
          <div className="col">
          <ion-icon name="home-outline"></ion-icon>
            <strong>Beranda</strong>
          </div>
        </a>
        <a href="#" className="item">
          <div className="col">
          <ion-icon name="receipt-outline"></ion-icon>
            <strong>Histori</strong>
          </div>
        </a>
        <a href="#" className="item">
          <div className="col">
            <div className="action-button large">
            <ion-icon name="qr-code-outline" style={{width: 30, height: 30}} />
            </div>
            <strong>Pay</strong>
          </div>
        </a>
        <a href="#" className="item">
          <div className="col">
          <ion-icon name="notifications-outline"></ion-icon>
            <strong>Notifikasi</strong>
          </div>
        </a>
        <a href="#" className="item">
          <div className="col">
            <ion-icon name="settings-outline" />
            <strong>Setelan</strong>
          </div>
        </a>
      </div>
    </div>
  );
}
