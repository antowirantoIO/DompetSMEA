import React from "react";
import QRCode from "react-qr-code";

export default function ExchangeActionSheet() {
  return (
    <>
      <div
        className="modal fade action-sheet"
        id="exchangeActionSheet"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Minta Uang</h5>
            </div>
            <div className="modal-body">
              <div className="action-sheet-content">
                <form>
                  <div className="row">
                    <center>
                        <QRCode value="{'uuid' : 'fkgh0-urhfd-hfhdp408hkd-jhfkhdkfhj', 'amount' : 5000}" size={200} />
                    </center>
                  </div>
                  <div className="form-group basic pt-5">
                    <label className="label">Atur Jumlah</label>
                    <div className="input-group mb-2">
                      <span className="input-group-text" id="basic-addon2">
                        Rp
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter an amount"
                        defaultValue={100}
                      />
                    </div>
                  </div>
                  <div className="form-group basic">
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Minta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
