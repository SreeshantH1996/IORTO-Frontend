import BaseService from './base.service';

export default class LogRestService {
  private apiService: any;

  constructor() {
    this.apiService = new BaseService();
  }

  public postUserRegistrationApi(data: any) {
    return this.apiService.post('user_registration/', data);
  }

  public UserLoginApi(data: any) {
    return this.apiService.post('login/', data);
  }
}  