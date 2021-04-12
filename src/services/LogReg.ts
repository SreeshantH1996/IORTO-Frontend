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

  public CreateNewLicence(data: any) {
    return this.apiService.post('licence_apply/', data);
  }

  public getUserDetials(data: any) {
    return this.apiService.post('get_user/', data);
  }

  public documentUploadApi(data: any) {
    return this.apiService.post('document_upload/', data);
  }

  public getUserStatus(data: any) {
    return this.apiService.post('user_status/', data);
  }

  public userStatusUpdate(data: any) {
    return this.apiService.post('status_update/', data);
  }
}  