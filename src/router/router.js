import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login/Login";
import Index from "@/components/Index/Index";
import ExamIndex from "@/components/Exam/ExamIndex";
import ExamInfo from "@/components/Exam/ExamInfo";
import Home from "../components/Index/Home";
import Personal from "../components/Personal/Personal";
import Message from "../components/message/Message";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', name: 'login', component: Login},
        {
            path: '/index', name: 'index', component: Index, children: [
                {path: 'home', name: 'home', component: Home},
                {path: 'message', name: 'message', component: Message},
                {path: 'personal', name: 'personal', component: Personal},
                ]
        },
        {path: '/exam', name: 'exam', component: ExamIndex},
        {path: '/examInfo', name: 'examInfo', component: ExamInfo},
    ]
})
