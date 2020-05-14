import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";

//? import css
import "./Login.css";

//? import icons
import { ReactComponent as Google } from "../../assets/google_icon.svg";
import { ReactComponent as Facebook } from "../../assets/facebook_login.svg";

const Login = (props) => {
  const { setShow, show } = props;
  const [open, setOpen] = useState(null);

  useEffect(() => {
    setOpen(show);
  }, []);
  return (
    <Modal
      closeIcon
      size="small"
      open={open}
      onClose={setShow}
      className="modal_login _best_doc"
    >
      <div className="circle_login"></div>
      <div className="row">
        <div className="col info">
          <div className="title_best_doc">
            <p>s'identifier</p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>Lorem Ipsum is simply dummy text of the printing </h3>
          <Form>
            <Form.Input
              label="Nom d'utilisateur ou email"
              type="text"
              className="sha"
            />
            <Form.Input label="Mot de pass" type="password" />
            <div className="form_actions_modal">
              <p>Mot de pass oublier ?</p>
              <Button>
                S'identifier
                <Icon name="long arrow alternate right" />
              </Button>
              <p>Inscriver vous</p>
            </div>
          </Form>
        </div>
        <div className="col_icon">
          <Facebook />
          <Google />
        </div>
      </div>
    </Modal>
  );
};

export default Login;
