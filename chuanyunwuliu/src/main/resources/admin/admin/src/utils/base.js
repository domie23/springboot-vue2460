const base = {
    get() {
        return {
            url : "http://localhost:8080/chuanyunwuliu/",
            name: "chuanyunwuliu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chuanyunwuliu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "船运物流管理系统"
        } 
    }
}
export default base
