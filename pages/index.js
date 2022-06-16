import React from "react";
import AppLayout from "../components/AppLayout";
import DepositeActionSheet from "../components/DepositeActionSheet";
import ExchangeActionSheet from "../components/ExchangeActionSheet";
import SendActionSheet from "../components/SendActionSheet";
import SendMoney from "../components/SendMoney";
import Sidebar from "../components/Sidebar";
import Stats from "../components/Stats";
import Transaction from "../components/Transaction";
import WithdrawActionSheet from "../components/WithdrawActionSheet";

function index() {
  return (
    <AppLayout>
      <div className="appHeader bg-primary text-light">
        <div className="left">
          <a
            href="#"
            className="headerButton"
            data-bs-toggle="modal"
            data-bs-target="#sidebarPanel"
          >
            <ion-icon name="menu-outline" />
          </a>
        </div>
        <div className="pageTitle">
          <img src="img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="right">
          <a href="app-settings.html" className="headerButton">
            <img
              src="img/sample/avatar/avatar1.jpg"
              alt="image"
              className="imaged w32"
            />
            <span className="badge badge-danger">6</span>
          </a>
        </div>
      </div>

      <div id="appCapsule">
        <div className="section wallet-card-section pt-1">
          <div className="wallet-card">
            {/* Balance */}
            <div className="balance">
              <div className="left">
                <span className="title">Saldo Kamu</span>
                <h1 className="total">Rp 2,562.50</h1>
              </div>
              <div className="right">
                <a
                  href="#"
                  className="button"
                  data-bs-toggle="modal"
                  data-bs-target="#depositActionSheet"
                >
                  <ion-icon name="add-outline" />
                </a>
              </div>
            </div>
            {/* * Balance */}
            {/* Wallet Footer */}
            <div className="wallet-footer">
              <div className="item">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#withdrawActionSheet"
                >
                  <div className="icon-wrapper bg-danger">
                    <ion-icon name="arrow-down-outline" />
                  </div>
                  <strong>Tarik Tunai</strong>
                </a>
              </div>
              <div className="item">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#sendActionSheet"
                >
                  <div className="icon-wrapper">
                    <ion-icon name="arrow-forward-outline" />
                  </div>
                  <strong>Transfer</strong>
                </a>
              </div>
              <div className="item">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exchangeActionSheet"
                >
                  <div className="icon-wrapper bg-warning">
                  <ion-icon name="arrow-up-outline"></ion-icon>
                  </div>
                  <strong>Minta</strong>
                </a>
              </div>
            </div>
            {/* * Wallet Footer */}
          </div>
        </div>
        <DepositeActionSheet />
        <WithdrawActionSheet />
        <SendActionSheet />
        <ExchangeActionSheet />
        <Stats />
        <Transaction />

        <Sidebar />
      </div>
    </AppLayout>
  );
}

export default index;
