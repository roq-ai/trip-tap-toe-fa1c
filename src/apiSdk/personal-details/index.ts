import axios from 'axios';
import queryString from 'query-string';
import { PersonalDetailInterface, PersonalDetailGetQueryInterface } from 'interfaces/personal-detail';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPersonalDetails = async (
  query?: PersonalDetailGetQueryInterface,
): Promise<PaginatedInterface<PersonalDetailInterface>> => {
  const response = await axios.get('/api/personal-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPersonalDetail = async (personalDetail: PersonalDetailInterface) => {
  const response = await axios.post('/api/personal-details', personalDetail);
  return response.data;
};

export const updatePersonalDetailById = async (id: string, personalDetail: PersonalDetailInterface) => {
  const response = await axios.put(`/api/personal-details/${id}`, personalDetail);
  return response.data;
};

export const getPersonalDetailById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/personal-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePersonalDetailById = async (id: string) => {
  const response = await axios.delete(`/api/personal-details/${id}`);
  return response.data;
};
