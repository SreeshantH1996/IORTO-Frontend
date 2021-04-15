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

  public documentList(data: any) {
    return this.apiService.post('document_list/', data);
  }

  public otherDocumentUpload(data: any) {
    return this.apiService.post('other_document_upload/', data);
  }

  public otherDocumentDelete(data: any) {
    return this.apiService.post('other_document_delete/', data);
  }
  public LicenceRenewalApplication(data:any){
    return this.apiService.post('licence_renewal/', data);
  }

  public getUserRenewalDetials(data: any) {
    return this.apiService.post('get_user_renewal/', data);
  }

  public getStatusPagedata(data: any) {
    return this.apiService.post('get_status_data/', data);
  }

  public createRTOOfficer(data: any) {
    return this.apiService.post('create_rto/', data);
  }
  public getRTOList(){
    return this.apiService.get('rto_list/')
  }
  public rtoOfficerDelete(data: any) {
    return this.apiService.post('rto_delete/', data);
  }

  public rtoOfficerRegistration(data: any) {
    return this.apiService.post('rto_registration/', data);
  }

  public getUserList(){
    return this.apiService.get('user_list/')
  }

  public licenceRenewalList(data: any) {
    return this.apiService.post('renewal_list/', data);
  }
}  