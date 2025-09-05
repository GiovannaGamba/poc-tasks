import { useCallback } from 'react';
import { AxiosError } from 'axios';

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export const useApiError = () => {
  const handleError = useCallback((error: unknown): ApiError => {
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message || 'Erro desconhecido';
      
      return {
        message,
        status,
        code: error.code,
      };
    }
    
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    }
    
    return {
      message: 'Erro desconhecido',
    };
  }, []);

  const getErrorMessage = useCallback((error: unknown): string => {
    const apiError = handleError(error);
    
    // Mensagens customizadas por status
    switch (apiError.status) {
      case 400:
        return 'Dados inválidos. Verifique as informações e tente novamente.';
      case 401:
        return 'Sessão expirada. Faça login novamente.';
      case 403:
        return 'Você não tem permissão para realizar esta ação.';
      case 404:
        return 'Recurso não encontrado.';
      case 409:
        return 'Conflito de dados. O item pode já existir.';
      case 422:
        return 'Dados inválidos. Verifique os campos obrigatórios.';
      case 500:
        return 'Erro interno do servidor. Tente novamente mais tarde.';
      case 503:
        return 'Serviço temporariamente indisponível.';
      default:
        return apiError.message;
    }
  }, [handleError]);

  return {
    handleError,
    getErrorMessage,
  };
};
