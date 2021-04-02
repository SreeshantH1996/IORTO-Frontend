import BaseService from './base.service';

export default class LogRestService {
  private apiService: any;

  constructor() {
    this.apiService = new BaseService();
  }

  public postUserRegistrationApi(data: any) {
    return this.apiService.post('advertising-api/', data);
  }
}  