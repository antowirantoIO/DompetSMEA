import React from "react";

export default function DialogDanger(props) {
  return (
    <div>
      <div
        className="modal fade dialogbox"
        id="DialogIconedDanger"
        data-bs-backdrop="static"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-icon text-danger">
              <ion-icon name="close-circle" />
            </div>
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
            </div>
            <div className="modal-body">{props.text}</div>
            <div className="modal-footer">
              <div className="btn-inline">
                <a href="#" className="btn" data-bs-dismiss="modal">
                  CLOSE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
