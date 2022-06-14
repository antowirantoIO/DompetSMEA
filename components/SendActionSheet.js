import React from "react";

export default function SendActionSheet() {
  return (
    <>
      <div
        className="modal fade action-sheet"
        id="sendActionSheet"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Transfer</h5>
            </div>
            <div className="modal-body">
              <div className="action-sheet-content">
                <form>
                  <div className="form-group basic">
                    <div className="input-wrapper">
                      <label className="label" htmlFor="text11">
                        To
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="text11"
                        placeholder="Enter NIS"
                      />
                      <i className="clear-input">
                        <ion-icon name="close-circle" />
                      </i>
                    </div>
                  </div>
                  <div className="form-group basic">
                    <label className="label">Masukkan Jumlah</label>
                    <div className="input-group mb-2">
                      <span className="input-group-text" id="basic-addon1">
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
                      Kirim
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
