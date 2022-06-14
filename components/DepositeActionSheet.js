import React from "react";

export default function DepositeActionSheet() {
  return (
    <div>
      <>
        {/* Deposit Action Sheet */}
        <div
          className="modal fade action-sheet"
          id="depositActionSheet"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Top Up</h5>
              </div>
              <div className="modal-body">
                <div className="action-sheet-content">
                  <form>
                    <div className="form-group basic">
                      <div className="input-wrapper">
                        <label className="label" htmlFor="account1">
                          Payment Method
                        </label>
                        <select
                          className="form-control custom-select"
                          id="account1"
                        >
                          <option value={0}>Bank BRI</option>
                          <option value={1}>Bank BCA</option>
                          <option value={2}>Bank BNI</option>
                          <option value={3}>Bank Mandiri</option>
                          <option value={4}>Bank Permata</option>
                          <option value={5}>Gopay</option>
                          <option value={6}>Indomaret</option>
                          <option value={7}>Alfamart</option>
                          <option value={8}>Akulaku</option>
                          <option value={9}>Debit Credit Card</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group basic">
                      <label className="label">Masukan Jumlah</label>
                      <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addona1">
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
                        Top Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* * Deposit Action Sheet */}
      </>
    </div>
  );
}
