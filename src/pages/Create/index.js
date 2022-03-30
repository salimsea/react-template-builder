import React, { useState } from "react";
import { Tooltip, Modal, ModalBody, UncontrolledTooltip } from "reactstrap";
import {
  JSONHeader,
  JSONContent,
  ICCostumize,
  ICAdded,
  ICAdd,
} from "src/assets";
import {
  AiOutlinePlus,
  AiOutlinePicCenter,
  AiOutlinePicLeft,
  AiOutlinePicRight,
  AiOutlineComment,
} from "react-icons/ai";
import "./style.css";
import { Navigation } from "src/components";

const Create = () => {
  const [state, setState] = useState("desktop");

  const [modalHeader, setModalHeader] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [modalDevice, setModalDevice] = useState(false);
  const showModalHeader = () => setModalHeader(!modalHeader);
  const showModalContent = () => setModalContent(!modalContent);
  const showModalDevice = () => setModalDevice(!modalDevice);

  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataHeader, setDataHeader] = useState(JSONHeader.data);
  const [dataContent, setDataContent] = useState(JSONContent.data);
  const [dataFrame, setDataFrame] = useState("");

  const addHeaderItem = (idComponents) => {
    let newArr = dataHeader.map((item, i) => {
      if (idComponents === item.id_components) {
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
      if (idComponents === item.id_components) {
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
      if (id === item.id_components) {
        return { ...item, ["isCheck"]: false };
      } else {
        if (!item.isCheck) {
          return { ...item, ["isCheck"]: false };
        } else {
          return { ...item, ["isCheck"]: true };
        }
      }
    });
    setDataHeader(newArr);

    ///remove array content
    newArr = dataContent.map((item, i) => {
      if (id === item.id_components) {
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

  const compileFrame = () => {
    var html = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>GetShayna by BuildWith Angga</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        </head>
        <body>`;
    dataGlobal.map((v, i) => {
      html += v.code;
    });
    html += ` <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    </body>
  </html>`;
    setDataFrame(html);

    showModalDevice();
  };

  return (
    <>
      <Navigation onClick={() => compileFrame()} />
      <div className="feedback">
        <div className="card-feedback px-3 py-2">
          <AiOutlineComment color="white" size={20} />
          <span className="text-white ps-2">feedback</span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-xxl">
          <div className="mt-5">
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
                        id={`TooltipDelete${i}`}
                      />
                      <UncontrolledTooltip
                        placement="right"
                        target={`TooltipDelete${i}`}
                      >
                        Delete Section
                      </UncontrolledTooltip>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center card-costumize">
                <img src={ICCostumize} width={48} alt="ic-costumize" />
                <h4 className="mt-3 text-costumize">Customize Template</h4>
              </div>
            )}
          </div>
        </div>
        <div className="floating-container">
          <div className="floating-button">
            <AiOutlinePlus color="white" size={30} />
          </div>
          <div className="element-container">
            <span className="float-element tooltip-left">
              <a href="javascript:void()" onClick={() => showModalHeader()}>
                <AiOutlinePicCenter
                  color="#6D9886"
                  id="TooltipHeader"
                  size={25}
                />
              </a>
            </span>
            <span className="float-element ">
              <a href="javascript:void()" onClick={() => showModalContent()}>
                <AiOutlinePicLeft
                  color="#6D9886"
                  id="TooltipContent"
                  size={25}
                />
              </a>
            </span>
            <span className="float-element">
              <a href="javascript:void()" onClick={() => showModalContent()}>
                <AiOutlinePicRight
                  color="#6D9886"
                  id="TooltipFooter"
                  size={25}
                />
              </a>
            </span>
          </div>
        </div>

        <UncontrolledTooltip placement="right" target="TooltipHeader">
          Header
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="right" target="TooltipContent">
          Content
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="right" target="TooltipFooter">
          Footer
        </UncontrolledTooltip>
      </div>

      <Modal centered size="xl" isOpen={modalHeader} toggle={showModalHeader}>
        <ModalBody>
          <div className="p-3">
            <h3>Components Header</h3>
            <div className="row mt-4 card-component">
              {dataHeader.map((v, i) => {
                return (
                  i < 3 && (
                    <div key={i} className="col-md-4 mb-3 card-image">
                      <a
                        href={`#element-${v.id_components}`}
                        onClick={() =>
                          !v.isCheck
                            ? addHeaderItem(v.id_components)
                            : alert("not add again!")
                        }
                        className="position-relative d-flex"
                      >
                        <img
                          src={`https://api.elements.buildwithangga.com/storage/${v.thumbnails}`}
                          className="img-thumbnail"
                          alt={v.thumbnails}
                        />
                        {v.isCheck ? (
                          <>
                            <img
                              src={ICAdded}
                              width={30}
                              alt="ic-added"
                              className="ic-added"
                              id="TooltipAdded"
                            />
                            <UncontrolledTooltip
                              placement="right"
                              target="TooltipAdded"
                            >
                              Added
                            </UncontrolledTooltip>
                          </>
                        ) : (
                          <img
                            src={ICAdd}
                            width={30}
                            alt="ic-add"
                            className="ic-add"
                          />
                        )}
                      </a>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal centered size="xl" isOpen={modalContent} toggle={showModalContent}>
        <ModalBody>
          <div className="p-3">
            <h3>Components Section</h3>
            <div className="row mt-4 card-component">
              {dataContent.map((v, i) => {
                return (
                  i < 3 && (
                    <div key={i} className="col-md-4 mb-2 card-image">
                      <a
                        href={`#element-${v.id_components}`}
                        onClick={() =>
                          !v.isCheck
                            ? addContentItem(v.id_components)
                            : alert("not add again!")
                        }
                        className="position-relative d-flex"
                      >
                        <img
                          src={`https://api.elements.buildwithangga.com/storage/${v.thumbnails}`}
                          className="img-thumbnail"
                          alt={v.thumbnails}
                        />
                        {v.isCheck ? (
                          <>
                            <img
                              src={ICAdded}
                              width={30}
                              alt="ic-added"
                              className="ic-added"
                              id="TooltipAdded"
                            />
                            <UncontrolledTooltip
                              placement="right"
                              target="TooltipAdded"
                            >
                              Added
                            </UncontrolledTooltip>
                          </>
                        ) : (
                          <img
                            src={ICAdd}
                            width={30}
                            alt="ic-add"
                            className="ic-add"
                          />
                        )}
                      </a>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        centered
        size="xl"
        className="modal-big"
        isOpen={modalDevice}
        toggle={showModalDevice}
      >
        <ModalBody>
          <div>
            <button
              className="btn btn-primary m-1"
              onClick={() => setState("desktop")}
            >
              Desktop
            </button>
            <button
              className="btn btn-primary m-1"
              onClick={() => setState("tablet")}
            >
              Tablet
            </button>
            <button
              className="btn btn-primary m-1"
              onClick={() => setState("phone")}
            >
              Phone
            </button>
            <center>
              <iframe
                className={`template-device ${state}`}
                style={{ height: "70vh" }}
                srcDoc={dataFrame}
                title={state}
              />
            </center>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Create;
