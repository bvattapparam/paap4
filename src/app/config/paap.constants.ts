export class PaapConstants{

    public static DEV_HOSTNAME: string                  =   "http://localhost/paap/paap-apis";
    public static PROD_HOSTNAME: string                 =   "http://localhost/paap";
    private static ASSETS_FOLDER: string                =   "http://localhost:4200/assets/" ;
    public static HOSTING: string                       =   PaapConstants.DEV_HOSTNAME;

    public static GET_GRAND_TOTAL: string               =   PaapConstants.HOSTING + "/grandtotal/?action=get_grandtotal_data";
    public static FLATMANAGER_GET_PROPERTYTAX: string   =   PaapConstants.HOSTING + "/grandtotal/?action=get_grandtotal_data";
    public static FLATMANAGER_GET_TNEB: string          =   PaapConstants.HOSTING + "/grandtotal/?action=get_grandtotal_data";
    public static FLATMANAGER_GET_MAINTENANCE: string   =   PaapConstants.HOSTING + "/grandtotal/?action=get_grandtotal_data";
    public static GET_EVENTSCHEDULER_ALL: string        =   PaapConstants.HOSTING + "/eventscheduler/get/";
    public static ADD_EVENTSCHEDULER: string            =   PaapConstants.HOSTING + "/eventscheduler/add/";
    public static REFERENCE_SERVICE: string             =   PaapConstants.HOSTING + "/references/get/";
    public static GET_FLAT_PAYMENT: string              =   PaapConstants.HOSTING + "/flat/staticpayment/get/";

    public static VALIDATOR_JSON: string                =   PaapConstants.ASSETS_FOLDER + "/validation/validator.json";

    public static DATE_FORMAT: string                   =    "dd/MM/yyyy" ;
}