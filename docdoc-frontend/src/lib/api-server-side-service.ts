import axios from "axios";

export function getApiServerInstance() {
    // const session = await getServerSession(authOptions);
    
    // if(!session){
    //   redirect("/")
    // }
    // if (session?.status == 'expired') {
    //   redirect("/")
    // }

    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    //   headers:{
    //     Authorization: `Bearer ${session.accessToken}`
    //   }
    });
    api.interceptors.request.use(
      async (config) => {
        return config;
      },
      async (error) => {
        if (error.response.status === 401) {
          console.log('erro autenticação');
        }
        return Promise.reject(error);
      }
    );
    return api;
  };