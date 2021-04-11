import { Component, Vue } from 'vue-property-decorator'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);
@Component({
    components: {
    },
    methods: {
    },
  })
export default class LogReg extends Vue {
    public UserName = ""
    public UserLoggedInFlag = false;

    public created(){
        // let loader = this.$loading.show();
        // setTimeout(() => {
        //     loader.hide()
        // },2000)  
        this.UserLoggedInFlag = this.$store.state.IsUserLoggedIn;
        console.log(this.UserLoggedInFlag)
        const userFromStorage = localStorage.getItem("user");
        console.log(userFromStorage)
        const user = JSON.parse(userFromStorage || "") as any;
        console.log(user)
        if (user !== null) {
            this.UserName = user.name;
          }
    }
    public LogOut(){
        console.log("Clicked on Logot button");
        localStorage.setItem("user", "");
        this.$store.state.IsUserLoggedIn = false;
        this.$router.push("/");
        let loader = this.$loading.show();
        location.reload();
        setTimeout(() => {
            loader.hide()
        },2000) 
    }
}   