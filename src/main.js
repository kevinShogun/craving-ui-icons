import React, {useState} from 'react';
import { ModalLabels } from './components/ModalLabels';

const Main = () => {

    const [Modal, setModal] = useState(false);

    return ( 
        <>
            <div className='flex flex-row justify-center items-center center'>
                <input type='submit'
                className='py-4 px-9 bg-blue-500 cursor-pointer rounded-full mt-20 font-medium text-white'
                value='Abrir'
                onClick={ () => setModal(!Modal)}
                />
                <ModalLabels
                    modalState={Modal}
                    setModalState={setModal}
                />
            </div>
        </> 
    );
}
 
export default Main;