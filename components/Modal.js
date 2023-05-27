import React,{ useContext} from "react";
import { DataContext } from "@/store/GlobalState";
import { deleteItem } from "@/store/Action";

const Modal = () => {
  const {state, dispatch} = useContext(DataContext)
  const { modal } = state

  const deleteCartItem = () => {
    dispatch(deleteItem(modal.data, modal.id, 'ADD_CART'))
    dispatch({ type: 'ADD_MODAL', payload: {}})
  }

  return (
    <div
      className="modal"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-capitalize" id="exampleModalLabel">
              {modal.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">Do you want to delete this item?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={deleteCartItem}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
