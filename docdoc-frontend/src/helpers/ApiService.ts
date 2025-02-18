class ApiService {

  private baseURL: string;
  private token?: string;
  constructor(baseURL?: string, token?: string) {
    this.baseURL = baseURL ??process.env.NEXT_PUBLIC_API_URL??""; // URL base da API
    this.token = token; // Bearer Token (opcional, pode ser configurado posteriormente)
  }

  // Método para configurar o Bearer Token (caso seja necessário configurar após a criação da instância)
  setToken(token: string) {
    this.token = token;
  }

  // Método genérico para fazer a requisição
  async request(endpoint: string, method = 'GET', body = null) {
    const url = `${this.baseURL}${endpoint}`;
    const headers: any = {
      'Content-Type': 'application/json',
    };

    // Se houver um token, adiciona o Bearer Token ao cabeçalho
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const options: any = {
      method,
      headers,
    };

    // Se houver um corpo para enviar, adiciona ao corpo da requisição
    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        // Caso a resposta não seja bem-sucedida, lança um erro
        throw new Error(`Erro: ${response.status} ${response.statusText}`);
      }

      // Tenta retornar o JSON da resposta
      return await response.json();
    } catch (error) {
      // Tratar erros de rede ou outros problemas
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  // Método para requisição GET
  async get(endpoint:string) {
    return this.request(endpoint, 'GET');
  }

  // Método para requisição POST
  async post(endpoint:string, body:any) {
    return this.request(endpoint, 'POST', body);
  }

  // Método para requisição PUT
  async put(endpoint:string, body:any) {
    return this.request(endpoint, 'PUT', body);
  }

  // Método para requisição DELETE
  async delete(endpoint:string) {
    return this.request(endpoint, 'DELETE');
  }
}

export default ApiService;