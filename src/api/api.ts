import {
    useQuery,
} from 'react-query';
import axios from 'axios';
import { ApiServiceErr, VehicleResponse } from '../types';
import { BASE_URL, vehicleApi } from '../constants';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});


export const useGetVehicles = () =>
    useQuery<VehicleResponse[], ApiServiceErr>(['vehicles'],
        async () => {
            try {
                const response = await apiClient.get(vehicleApi);
                return response.data;
            } catch (error) {
                console.error(error)
            }
        },
    );
