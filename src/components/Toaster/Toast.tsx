import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toaster.css'

// ---------------TWO TYPES OF TOAST ARE THERE--------------
// 1.SUCCESS
// 2.ERROR


export const showToast = (type: any, message: any) => {

    switch (type) {
        case 'SUCCESS':toast.success(message)
            break;
        case 'ERROR':toast.error(message)
            break;
        default:toast.error('NO TYPE  FOUND');
    }
}

const Toast = () => {
    return <>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme='colored'
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
}

export default Toast;
