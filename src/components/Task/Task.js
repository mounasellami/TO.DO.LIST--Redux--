import React, {useState} from 'react';
import './Task.css';
import {useDispatch} from 'react-redux';
import { editTask } from '../../JS/actions/actionTask';
import Modal from 'react-modal'; /*npm i react-modal*/
import { TiEdit } from 'react-icons/ti';

           // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Task = ({ item }) => {
    const [editIsOpen, setIsOpen] = useState(false);
    const [editInput, setEditInput] = useState(item.description)
    
    const dispatch = useDispatch() 
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            {/* <button onClick={openModal}>   Edit   </button> */}
            <TiEdit className='edit-icon' onClick={openModal}  />
            <Modal
                className='todo-modal'
                isOpen={editIsOpen}
                onRequestClose={closeModal}
                backdrop="static"
                keyboard={false}
            >
                <h3>Edit item</h3>
                <form className='todo-form'>
                  <input
                     className='todo-input edit'
                     type='text' name='text' required
                     placeholder="Add a todo"
                     value={editInput}
                     onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button className='todo-button edit' onClick={() => { closeModal(); dispatch(editTask({ id: item.id, description: editInput })) }}>
                    Update
                  </button>
                </form>

                <button className='todo-button edit close' onClick={closeModal}> Close </button>
                
            </Modal>
        </div>
    );
};

export default Task;