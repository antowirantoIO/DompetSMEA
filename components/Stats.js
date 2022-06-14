import React from "react";

export default function Stats() {
  return (
    <div>
      <div className="section">
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">Pemasukan</div>
              <div className="value text-success">Rp. 552.950</div>
            </div>
          </div>
          <div className="col-6">
            <div className="stat-box">
              <div className="title">Pengeluaran</div>
              <div className="value text-danger">Rp. 86.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
