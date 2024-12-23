import { environment } from "src/environments/environment"

export const API_ENDPOINT = {
    login: {
        URI: 'login/authenticate'
    },
    logout: {
        URI: 'login/logout'
    },
    firm: {
        getFirm: 'firm',
    },
    designation: {
        getDesignation: 'designation'
    },
    expense: {
        getDesignation: 'expenseType'
    },
    user: {
        getUsers: 'user'
    },
    location: {
        getLocations: 'location'
    }
}

// http://3.138.195.191:8080/fs/user

export class GetApiEndPoints {
    public static login = {
        getUrl: () => `${environment.baseURI}${API_ENDPOINT.login.URI}`
    }
    public static getFirm = {
        getUrl: () => `${environment.baseURI}${API_ENDPOINT.firm.getFirm}`
    }
    public static getDesignation = {
        getUrl: () => `${environment.baseURI}${API_ENDPOINT.designation.getDesignation}`
    }
    public static getExpense = {
        getUrl: () => `${environment.baseURI}${API_ENDPOINT.expense.getDesignation}`
    }
    public static getUser = {
        getUrl: () => `${environment.baseURI}${API_ENDPOINT.user.getUsers}`
    }
    public static getLocation = {
        getUrl: () => `${environment.baseURI}${API_ENDPOINT.location.getLocations}`
    }
}