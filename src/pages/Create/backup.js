import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { JSONHeader, JSONContent } from "src/assets";
import { FaTrash } from "react-icons/fa";
import "./style.css";

const Create = () => {
  const [dataModal, setDataModal] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const showModal = () => setModal(!modal);
  const showModalContent = () => setModalContent(!modalContent);

  const removeItem = (id) => {
    setDataModal(dataModal.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="d-flex">
          <button className="btn btn-primary" onClick={() => showModal()}>
            Header
          </button>
          &nbsp;
          <button
            className="btn btn-primary"
            onClick={() => showModalContent()}
          >
            Content
          </button>
        </div>

        <div className="mt-5 d-flex flex-column" style={{ minHeight: "auto" }}>
          {dataModal.map((v, i) => {
            return (
              <div className="preview" style={{ position: "relative" }}>
                <div
                  style={{ height: "auto", width: "100%" }}
                  dangerouslySetInnerHTML={{
                    __html: `${v.code}`,
                  }}
                />
                <img
                  src="https://elements.buildwithangga.com/static/media/Ic_trash.8e356154.svg"
                  alt="trash"
                  class="trash"
                  onClick={() => removeItem(v.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Modal centered size="xl" isOpen={modal} toggle={showModal}>
        <ModalBody>
          <div className="row">
            {JSONHeader.data.map((v, i) => {
              return (
                <>
                  <div className="col-md-3 mb-2">
                    <img
                      key={i}
                      src={`https://api.elements.buildwithangga.com/storage/${v.thumbnails}`}
                      className="img-fluid"
                      onClick={() =>
                        setDataModal([
                          ...dataModal,
                          { id: v.id_components, code: v.code_bootstrap },
                        ])
                      }
                    />
                  </div>
                </>
              );
            })}
          </div>
        </ModalBody>
      </Modal>
      <Modal centered size="xl" isOpen={modalContent} toggle={showModalContent}>
        <ModalBody>
          <div className="row">
            {JSONContent.data.map((v, i) => {
              return (
                <>
                  <div className="col-md-3 mb-2">
                    <img
                      key={i}
                      src={`https://api.elements.buildwithangga.com/storage/${v.thumbnails}`}
                      className="img-fluid"
                      onClick={() =>
                        setDataModal([
                          ...dataModal,
                          { id: v.id_components, code: v.code_bootstrap },
                        ])
                      }
                    />
                  </div>
                </>
              );
            })}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Create;
