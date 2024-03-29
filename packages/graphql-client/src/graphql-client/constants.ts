export const CLIENT = "GraphQL Client";
export const MIN_RETRIES = 0;
export const MAX_RETRIES = 3;

export const GQL_API_ERROR =
  "An error occurred while fetching from the API. Review 'graphQLErrors' for details.";
export const UNEXPECTED_CONTENT_TYPE_ERROR =
  "Response returned unexpected Content-Type:";
export const NO_DATA_OR_ERRORS_ERROR =
  "An unknown error has occurred. The API did not return a data object or any errors in its response.";

export const CONTENT_TYPES = {
  json: "application/json",
  multipart: "multipart/mixed",
};

export const RETRY_WAIT_TIME = 1000;
export const RETRIABLE_STATUS_CODES = [429, 503];
