import {
    UseQueryOptions,
} from 'react-query';

export type UserType = {
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
}

export type ApiServiceErr = any;

export type QueryOpt<Response, TVariables = unknown> = UseQueryOptions<
    Response,
    ApiServiceErr,
    TVariables,
    any[]
>;
export interface ParamOptions {
    limit: number;
    page: number;
    sortBy: string;
}

type UsageVehicle  ={
    id: number;
    title: string;
}

export type VehicleResponse = {
    id: number;
    title: string;
    usages: UsageVehicle[]
};