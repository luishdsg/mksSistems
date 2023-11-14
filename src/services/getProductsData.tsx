import axios, { AxiosResponse } from 'axios';
import { ProductsInterface } from '../interface/products-interface';
import { ProductParamasInterface } from '../interface/products-params-interface';


const apiUrl = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1';

export const productsData = async (params?: ProductParamasInterface): Promise<ProductsInterface> => {
  try {
    const response: AxiosResponse<ProductsInterface> = await axios.get(`${apiUrl}/products`, {
      params: params,
    });console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
      throw new Error(`Erro ao buscar dados da API: ${error}`);
    }
  };