import { http } from "../../http/http"
import { ILoginBody, ILoginResponse } from "./userService.interface"


export const userService = {
    async login(body: ILoginBody) {

        return await http.post<ILoginResponse>('/login', body)
    },
    async logout() {
        return await http.post('/logout')
    }
}