import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";

//? import css
import "./AddAnnonce.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { ReactComponent as Upload } from "../../assets/upload.svg";

const AddAnnonce = (props) => {
  const { setShow, show } = props;
  const [open, setOpen] = useState(null);
  const [imagePreview,setImagePreview] = useState(null);
  const [selectedFile,setSelectedFile] = useState();
  const [fileErr,setFileErr] = useState(false);
  
  useEffect(() => {
    if (!selectedFile) {
      setImagePreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setImagePreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e)=>{
    if (fileErr) setFileErr(false)
    let es = e.target.files[0];
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    if (es.type === "image/png" || es.type === "image/jpeg") {
      setSelectedFile(es);
      setImagePreview(es);
    } else {
      setFileErr(true);
    }
    
  }
  useEffect(() => {
    setOpen(show);
  }, [show]);
  return (
    <Modal
      size="big"
      open={open}
      onClose={setShow}
      className="add_annonce_modal appointment_modal modal_login"
    >
      <div className="circle_login"></div>
      <div className="row">
        <div className="picture_part">
          <div className="img_don_modal">
            <div
              className="doctor_img card_don_img"
              style={{
                backgroundImage: imagePreview && `url(${imagePreview})`,
              }}
            />
          </div>
          <label htmlFor="input_annonce">
          <p>
            <Upload />
            Upload photo
          </p>
          </label>
          <input style={{
            visibility:"hidden"
          }} type="file" id="input_annonce" onChange={onSelectFile} />
          {fileErr && <p className="error_upload">
            Please add a valid image
            </p>}
        </div>
        <div className="col">
          <Form>
            <Form.Input
              label="Nom et Prénom"
              type="text"
              className="sha _margin_vertical_sm"
              placeholder="Mohamed Charif"
            />
            <Form.Input
              label="Nom de médicament"
              type="text"
              className="sha _margin_vertical_sm"
              placeholder="médicament"
            />
            <Form.TextArea
              rows={6}
              label="Description"
              type="text"
              className="_margin_vertical_sm"
              placeholder="Ajouter une description ."
            />
            <div className="bottom_add">
              <div className="number_age_field">
                <div class="minus">
                  <span>-</span>
                </div>
                <Form.Input
                  label="Contité"
                  type="number"
                  className="sha _margin_vertical_sm age_input"
                  placeholder="1"
                />
                <div class="plus">
                  <span>+</span>
                </div>
              </div>
              <Button
                content="Confirmer"
                labelPosition="right"
                icon="long arrow alternate right"
              />
            </div>
          </Form>
        </div>
      </div>
      <div className="row second">
        <Logo />
        <p>
          <Icon name="info circle" />
          le donneur devra cocher une case: je jure sur l’honneur qu’il s’agit
          d’un don sans aucune contre partie.
        </p>
      </div>
    </Modal>
  );
};

export default AddAnnonce;
