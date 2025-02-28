import axios, { AxiosInstance } from 'axios';
// import { getSession, signOut, useSession } from 'next-auth/react';

export default function getApiClientInstance(){
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL + '/api';

  const api: AxiosInstance = axios.create({
    baseURL
  });

  api.interceptors.request.use(
    async (config) => {
      // const session = await getSession();
      // if (session?.status == 'expired') {
      //   await signOut();
      // }

      // if (session?.accessToken) {
      //   config.headers.Authorization = `Bearer ${session.accessToken}`;
      // }
      return config;
    },
    async (error) => {
      console.log("erro busca",error);
      if (error.response.status === 401) {
        console.log('erro autenticação');
        // await signOut();
      }
      return Promise.reject(error);
    }
  );
}