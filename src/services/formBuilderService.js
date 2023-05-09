import { apiClient } from "./apiClient";
import ApiUrlConstants from "../constants/apiConstants";
import { handleResponse, handleError } from "./genericResponseHandler";

class FormBuilderService {
  create(jsonSchema) {
    let url = ApiUrlConstants.LOGIN;

    const payload = jsonSchema;

    return apiClient()
      .post(url, payload)
      .then(handleResponse)
      .catch(handleError);
  }
}

export const formBuilder = new FormBuilderService();
