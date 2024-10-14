const baseURL = "https://matmasocaivan.com/MMS_api"

const listApi = {
    // Check information
    checkNumber: baseURL + "/number/checkTelNumber",
    checkCCCD: baseURL + "/number/checkPersonalID",
    checkCarNumber: baseURL + "/number/checkcarnumber",
    checkBanking: baseURL + "/number/checkbankingaccount",
    checkGPKD : baseURL + "/number/checkGPKD ",
    checkAddress: baseURL + "/number/checkaddress",

    // export PDF
    exportPDF : baseURL + "/pdf/exportPDFTelNumber",
    carPDF: baseURL + "/pdf/exportPDFCarNumber" ,
    stkPDF : baseURL + "/pdf/exportPDFBankAccount",
    cccdPDF: baseURL + "/pdf/exportPDFPersonalID",
    gplxPDF : baseURL + "/pdf/exportPDFGPKD",

    // Feedback
    feedback: baseURL + "/report/addReport",

    login : baseURL + "/user/login",
    signup: baseURL +"/user/signup"
}

export default listApi;