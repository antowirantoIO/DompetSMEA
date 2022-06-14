import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div
        className="modal fade panelbox panelbox-left"
        id="sidebarPanel"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              {/* profile box */}
              <div className="profileBox pt-2 pb-2">
                <div className="image-wrapper">
                  <img
                    src="img/sample/avatar/avatar1.jpg"
                    alt="image"
                    className="imaged  w36"
                  />
                </div>
                <div className="in">
                  <strong>Sebastian Doe</strong>
                  <div className="text-muted">4029209</div>
                </div>
                <a
                  href="#"
                  className="btn btn-link btn-icon sidebar-close"
                  data-bs-dismiss="modal"
                >
                  <ion-icon name="close-outline" />
                </a>
              </div>
              {/* * profile box */}
              {/* menu */}
              <div className="listview-title mt-1">Menu</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <a href="app-settings.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="settings-outline" />
                    </div>
                    <div className="in">Setelan</div>
                  </a>
                </li>
                <li>
                  <a href="component-messages.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="chatbubble-outline" />
                    </div>
                    <div className="in">Support</div>
                  </a>
                </li>
                <li>
                  <a href="app-login.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="log-out-outline" />
                    </div>
                    <div className="in">Log out</div>
                  </a>
                </li>
              </ul>
              {/* * others */}
              {/* send money */}
              <div className="listview-title mt-1">Transfer</div>
              <ul className="listview image-listview flush transparent no-line">
                <li>
                  <a href="#" className="item">
                    <img
                      src="img/sample/avatar/avatar2.jpg"
                      alt="image"
                      className="image"
                    />
                    <div className="in">
                      <div>Artem Sazonov</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item">
                    <img
                      src="img/sample/avatar/avatar4.jpg"
                      alt="image"
                      className="image"
                    />
                    <div className="in">
                      <div>Sophie Asveld</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item">
                    <img
                      src="img/sample/avatar/avatar3.jpg"
                      alt="image"
                      className="image"
                    />
                    <div className="in">
                      <div>Kobus van de Vegte</div>
                    </div>
                  </a>
                </li>
              </ul>
              {/* * send money */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
