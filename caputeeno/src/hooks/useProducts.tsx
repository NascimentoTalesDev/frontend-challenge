"use client"

import { useQuery } from "@tanstack/react-query";
import { ProductsFetchResponse } from "../types/products-response";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post( API_URL,
        {
            query: `query{
                allProducts{
                    id,
                    name,
                    price_in_cents
                }
            }`
        }
        
    )
}

export function useProducts() {
    const { data } = useQuery({
        queryFn: fetcher, 
        queryKey: ['products']
    })

    return{

        data: data?.data?.data?.allProducts
    }
}