import { Component, Prop, Vue } from 'vue-property-decorator'
import { BModal, VBModal } from "bootstrap-vue";
import LogRestService from '../services/LogReg';
import $ from 'jquery'
import router from '@/router';

const logregserve = new LogRestService();

@Component({
    components: {
        BModal,
    },
    directives: {
        'b-modal': VBModal
    },
})
export default class DocumentList extends Vue {
    public user_id = "";
    public MainDocuments = "";
    public OtherDocuments = "";

    public created() {
        if (!this.$store.state.IsUserLoggedIn) {
            router.push("/")
        } else {
            const userFromStorage = localStorage.getItem("user");
            console.log(userFromStorage)
            const user = JSON.parse(userFromStorage || "") as any;
            console.log(user)
            if (user !== null) {
                this.user_id = user.user_id;
            }
        }
        $("#document_name").val("");
        $("#docuemnt_up").val("");
        // document.getElementById('document_name').value = ""
        // document.getElementById('docuemnt_up').value = ""
        this.documentList();
    }

    public documentList() {
        let loader = this.$loading.show();
        $("#document_name").val("");
        $("#docuemnt_up").val("");
        var data = { "user_id": this.user_id }
        logregserve.documentList(data).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status) {
                this.MainDocuments = response.data.data.main_documents;
                this.OtherDocuments = response.data.data.other_documents;
                setTimeout(() => {
                    loader.hide()
                }, 2000)
            } else {
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
    }

    public OtherDocument() {
        let loader = this.$loading.show();
        const form: any = document.getElementById('otherdocumentupload');
        const formData = new FormData(form);
        formData.append('user_id', this.user_id);
        logregserve.otherDocumentUpload(formData).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status) {
                setTimeout(() => {
                    loader.hide()
                    this.$store.dispatch('showSuccessMsg', "Document Upoaded successfully");
                    this.documentList();
                }, 1000)
            } else {
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
    }

    public DeleteFile(id:any){
        let loader = this.$loading.show();
        var data = {"image_id":id}
        logregserve.otherDocumentDelete(data).then((response: any) => {
            console.log(response.data.data.status);
            var status = response.data.data.status
            if (status) {
                setTimeout(() => {
                    loader.hide()
                    this.$store.dispatch('showSuccessMsg', "Document Deleted successfully");
                    this.documentList();
                }, 500)
            } else {
                loader.hide()
            }
        }, (err: any) => {
            console.log("error");
            loader.hide()
        });
    }   
}