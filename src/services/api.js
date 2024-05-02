const baseURL = "http://10.171.17.132:8080/MMS_api"

const listApi = {
    checkNumber: baseURL + "/number/checkTelNumber",
    checkCCCD: baseURL + "/number/checkPersonalID"
}

export default listApi;