import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { JSONHeader, JSONContent } from "src/assets";
import { FaDashcube, FaHome, FaTrash } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import "./style.css";

const Create = () => {
  const [modalHeader, setModalHeader] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const showModalHeader = () => setModalHeader(!modalHeader);
  const showModalContent = () => setModalContent(!modalContent);

  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataHeader, setDataHeader] = useState(JSONHeader.data);
  const [dataContent, setDataContent] = useState(JSONContent.data);

  const addHeaderItem = (idComponents) => {
    let newArr = dataHeader.map((item, i) => {
      if (idComponents == item.id_components) {
        //array global
        setDataGlobal([
          ...dataGlobal,
          { id: item.id_components, code: item.code_bootstrap, type: "header" },
        ]);

        return { ...item, ["isCheck"]: true };
      } else {
        if (!item.isCheck) {
          return { ...item, ["isCheck"]: false };
        } else {
          return { ...item, ["isCheck"]: true };
        }
      }
    });
    setDataHeader(newArr);
  };

  const addContentItem = (idComponents) => {
    let newArr = dataContent.map((item, i) => {
      if (idComponents == item.id_components) {
        //array global
        setDataGlobal([
          ...dataGlobal,
          {
            id: item.id_components,
            code: item.code_bootstrap,
            type: "content",
          },
        ]);

        return { ...item, ["isCheck"]: true };
      } else {
        if (!item.isCheck) {
          return { ...item, ["isCheck"]: false };
        } else {
          return { ...item, ["isCheck"]: true };
        }
      }
    });
    setDataContent(newArr);
  };

  const removeItem = (id) => {
    ///remove array global
    setDataGlobal(dataGlobal.filter((item) => item.id !== id));

    ///remove array header
    let newArr = dataHeader.map((item, i) => {
      if (id == item.id_components) {
        return { ...item, ["isCheck"]: false };
      } else {
        if (!item.isCheck) {
          return { ...item, ["isCheck"]: false };
        } else {
          return { ...item, ["isCheck"]: true };
        }
      }
    });

    ///remove array content
    newArr = dataContent.map((item, i) => {
      if (id == item.id_components) {
        return { ...item, ["isCheck"]: false };
      } else {
        if (!item.isCheck) {
          return { ...item, ["isCheck"]: false };
        } else {
          return { ...item, ["isCheck"]: true };
        }
      }
    });
    setDataContent(newArr);
  };

  return (
    <>
      <div className="">
        <div className="tm-menu">
          <button className="btn btn-primary" onClick={() => showModalHeader()}>
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

        {dataGlobal.length !== 0 ? (
          <div className="d-flex flex-column">
            {dataGlobal.map((v, i) => {
              return (
                <div key={i} className="preview">
                  <div
                    id={`element-${v.id}`}
                    style={{ height: "auto", width: "100%" }}
                    dangerouslySetInnerHTML={{
                      __html: `${v.code}`,
                    }}
                  />
                  <img
                    src="https://elements.buildwithangga.com/static/media/Ic_trash.8e356154.svg"
                    alt="trash"
                    className="trash"
                    onClick={() => removeItem(v.id)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <AiOutlineAppstore color="black" size={40} />
            <h4 className="mt-3 text-dark">Customize Template</h4>
          </div>
        )}
      </div>
      <Modal centered size="xl" isOpen={modalHeader} toggle={showModalHeader}>
        <ModalBody>
          <div className="row">
            {dataHeader.map((v, i) => {
              return (
                i < 4 && (
                  <div key={i} className="col-md-3 mb-2">
                    <a
                      href={`#element-${v.id_components}`}
                      onClick={() =>
                        !v.isCheck
                          ? addHeaderItem(v.id_components)
                          : alert("not add again!")
                      }
                    >
                      <img
                        src={`https://api.elements.buildwithangga.com/storage/${v.thumbnails}`}
                        className="img-fluid"
                      />
                    </a>
                    {v.isCheck && "DITAMBAH!"}
                  </div>
                )
              );
            })}
          </div>
        </ModalBody>
      </Modal>

      <Modal centered size="xl" isOpen={modalContent} toggle={showModalContent}>
        <ModalBody>
          <div className="row">
            {dataContent.map((v, i) => {
              return (
                i < 4 && (
                  <div key={i} className="col-md-3 mb-2">
                    <a
                      href={`#element-${v.id_components}`}
                      onClick={() =>
                        !v.isCheck
                          ? addContentItem(v.id_components)
                          : alert("not add again!")
                      }
                    >
                      <img
                        src={`https://api.elements.buildwithangga.com/storage/${v.thumbnails}`}
                        className="img-fluid"
                      />
                    </a>
                    {v.isCheck && "DITAMBAH!"}
                  </div>
                )
              );
            })}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Create;
