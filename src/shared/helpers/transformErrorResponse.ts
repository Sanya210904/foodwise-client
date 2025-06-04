import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {ServerError} from '../types/ServerError';

export const transformErrorResponse = (
  error: FetchBaseQueryError,
): {message: string; code: number | null} => {
  let message = 'An unexpected error occurred';
  let statusCode: number | null = null;

  if ('data' in error) {
    const serverError = error.data as ServerError;
    message = serverError.error.message;
    statusCode = serverError.error.code;
  }

  if ('status' in error && typeof error.status === 'number') {
    statusCode = error.status;
  }

  if (error.status === 'FETCH_ERROR') {
    message =
      'Network connection error. Please check your internet connection.';
  } else if (error.status === 'TIMEOUT_ERROR') {
    message = 'Request timed out. Please try again.';
  }

  return {message, code: statusCode};
};
