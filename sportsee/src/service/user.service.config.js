import MockedAPI from "./mockedAPI"
import { user_service } from "./user.service"

var env = 'mock'

export default function getUserService(){
    switch (env) {
        case 'development' :
            return user_service
        case 'mock' :
            return new MockedAPI()
        }
}