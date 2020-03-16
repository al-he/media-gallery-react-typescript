import { notification } from 'antd';

const errorMessage = (value: boolean): void => {
    if (value) {
        notification.error({
            message: 'Error',
            description: 'Something went wrong. Please try later.',
            duration: 7,
        });
    }
};

export default errorMessage;
