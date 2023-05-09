import RouteConstants from "../constants/routeConstants";
import { HTTP_STATUS_CODES } from "../constants/httpStatusCodesConstants";

export function handleError(errorResponse, ignoreAuth) {
  if (
    errorResponse &&
    errorResponse.response &&
    errorResponse.response.status === HTTP_STATUS_CODES.INVALID_TOKEN &&
    !ignoreAuth
  ) {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    window.location = RouteConstants.LOGIN;
  }
  throw errorResponse;
}

export function handleResponse(response) {
  if (response.status === HTTP_STATUS_CODES.SUCCESS) {
    return response.data;
  }

  return handleError(response);
}
