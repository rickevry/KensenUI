/// <reference path="../../../typings/tsd.d.ts" />
var customNewEmployee = {

    getCreditCardList: function () {
        var result = [
        { "id": 0, "name": "No card" },
            { "id": 1, "name": "First card" }
        ];
        return result;
    },

    getGenderList: function () {
        var result = [

        { "id": 0, "name": "Choose gender..." },
        { "id": 1, "name": "Female" },
        { "id": 2, "name": "Male" }
        ];
        return result;
    },

    getWorkingTime: function () {
        var result = [
            {"id": 0, "name": "Choose working time..."},
            {"id": 1, "name": "Daytime"},
            {"id": 2, "name": "AM shift"},
            {"id": 3, "name": "PM shift"},
            {"id": 4, "name": "Evenings"},
            {"id": 5, "name": "Night"},
            {"id": 6, "name": "Weekend"},
            {"id": 7, "name": "Two-shift, even weeks AM"},
            {"id": 8, "name": "Two-shift, odd weeks AM"}
        ];
        return result;
    },

    getAgreementArea: function () {
        var result =[
            { "id": 0, "name": "Choose agreement area..." },
            { "id": 1, "name": "Teknikavtalet" },
            { "id": 2, "name": "Handels" }
        ];
        return result;
    },

    getRoles: function () {
        var result = [
            { "id": 0, "name": "Choose role..." },
            { "id": 1, "name": "Manager" },
            { "id": 2, "name": "Co-worker" }
        ];
        return result;
    },

    getMainRoles: function() {
        var result = [
            { "id": 0, "name": "Choose employment..." },
            { "id": 1, "name": "White-collar worker" },
            { "id": 2, "name": "Blue-collar worker" }
        ];
        return result;
    },

    getTypeOfEmployment: function() {
        var result = [
            { "id": 0, "name": "Choose type of employment..." },
            { "id": 1, "name": "Tillsvidareanställning" },
            { "id": 2, "name": "Visstidsanställning" },
            { "id": 3, "name": "Feriearbetare" },
            { "id": 4, "name": "Praktikant" }
        ];
        return result;
    },

    getContryList: function() {
        var result = [
            { "id": 0, "name": "Choose country..." },
            { "id": 222, "name": "Sweden" },
            { "id": 1, "name": "Afghanistan" },
            { "id": 2, "name": "Akrotiri" },
            { "id": 3, "name": "Albania" },
            { "id": 4, "name": "Algeria" },
            { "id": 5, "name": "American Samoa" },
            { "id": 6, "name": "Andorra" },
            { "id": 7, "name": "Angola" },
            { "id": 8, "name": "Anguilla" },
            { "id": 9, "name": "Antarctica" },
            { "id": 10, "name": "Antigua and Barbuda" },
            { "id": 11, "name": "Argentina" },
            { "id": 12, "name": "Armenia" },
            { "id": 13, "name": "Aruba" },
            { "id": 14, "name": "Ashmore and Cartier Islands" },
            { "id": 15, "name": "Australia" },
            { "id": 16, "name": "Austria" },
            { "id": 17, "name": "Azerbaijan" },
            { "id": 20, "name": "Bangladesh" },
            { "id": 23, "name": "Belarus" },
            { "id": 24, "name": "Belgium" },
            { "id": 25, "name": "Belize" },
            { "id": 26, "name": "Benin" },
            { "id": 27, "name": "Bermuda" },
            { "id": 28, "name": "Bhutan" },
            { "id": 29, "name": "Bolivia" },
            { "id": 30, "name": "Bosnia and Herzegovina" },
            { "id": 33, "name": "Brazil" },
            { "id": 37, "name": "Bulgaria" },
            { "id": 38, "name": "Burkina Faso" },
            { "id": 39, "name": "Burma" },
            { "id": 40, "name": "Burundi" },
            { "id": 41, "name": "Cambodia" },
            { "id": 42, "name": "Cameroon" },
            { "id": 43, "name": "Canada" },
            { "id": 44, "name": "Cape Verde" },
            { "id": 45, "name": "Cayman Islands" },
            { "id": 46, "name": "Central African Republic" },
            { "id": 47, "name": "Chad" },
            { "id": 48, "name": "Chile" },
            { "id": 49, "name": "China" },
            { "id": 50, "name": "Christmas Island" },
            { "id": 51, "name": "Clipperton Island" },
            { "id": 52, "name": "Cocos (Keeling) Islands" },
            { "id": 53, "name": "Colombia" },
            { "id": 54, "name": "Comoros" },
            { "id": 57, "name": "Cook Islands" },
            { "id": 58, "name": "Coral Sea Islands" },
            { "id": 59, "name": "Costa Rica" },
            { "id": 60, "name": "Cote d'Ivoire" },
            { "id": 61, "name": "Croatia" },
            { "id": 62, "name": "Cuba" },
            { "id": 63, "name": "Cyprus" },
            { "id": 64, "name": "Czech Republic" },
            { "id": 65, "name": "Denmark" },
            { "id": 66, "name": "Dhekelia" },
            { "id": 67, "name": "Djibouti" },
            { "id": 68, "name": "Dominica" },
            { "id": 69, "name": "Dominican Republic" },
            { "id": 70, "name": "Ecuador" },
            { "id": 71, "name": "Egypt" },
            { "id": 72, "name": "El Salvador" },
            { "id": 73, "name": "Equatorial Guinea" },
            { "id": 74, "name": "Eritrea" },
            { "id": 75, "name": "Estonia" },
            { "id": 76, "name": "Ethiopia" },
            { "id": 77, "name": "Europa Island" },
            { "id": 80, "name": "Fiji" },
            { "id": 81, "name": "Finland" },
            { "id": 82, "name": "France" },
            { "id": 83, "name": "French Guiana" },
            { "id": 84, "name": "French Polynesia" },
            { "id": 85, "name": "French Southern and Antarctic Lands" },
            { "id": 86, "name": "Gabon" },
            { "id": 87, "name": "Gambia, The" },
            { "id": 88, "name": "Gaza Strip" },
            { "id": 89, "name": "Georgia" },
            { "id": 90, "name": "Germany" },
            { "id": 91, "name": "Ghana" },
            { "id": 92, "name": "Gibraltar" },
            { "id": 93, "name": "Glorioso Islands" },
            { "id": 94, "name": "Greece" },
            { "id": 95, "name": "Greenland" },
            { "id": 96, "name": "Grenada" },
            { "id": 97, "name": "Guadeloupe" },
            { "id": 98, "name": "Guam" },
            { "id": 99, "name": "Guatemala" },
            { "id": 100, "name": "Guernsey" },
            { "id": 101, "name": "Guinea" },
            { "id": 102, "name": "Guinea-Bissau" },
            { "id": 103, "name": "Guyana" },
            { "id": 104, "name": "Haiti" },
            { "id": 105, "name": "Heard Island and McDonald Islands" },
            { "id": 106, "name": "Holy See (Vatican City)" },
            { "id": 107, "name": "Honduras" },
            { "id": 108, "name": "Hong Kong" },
            { "id": 109, "name": "Hungary" },
            { "id": 110, "name": "Iceland" },
            { "id": 111, "name": "India" },
            { "id": 112, "name": "Indonesia" },
            { "id": 113, "name": "Iran" },
            { "id": 114, "name": "Iraq" },
            { "id": 115, "name": "Ireland" },
            { "id": 116, "name": "Isle of Man" },
            { "id": 117, "name": "Israel" },
            { "id": 118, "name": "Italy" },
            { "id": 119, "name": "Jamaica" },
            { "id": 120, "name": "Jan Mayen" },
            { "id": 121, "name": "Japan" },
            { "id": 122, "name": "Jersey" },
            { "id": 123, "name": "Jordan" },
            { "id": 124, "name": "Juan de Nova Island" },
            { "id": 125, "name": "Kazakhstan" },
            { "id": 126, "name": "Kenya" },
            { "id": 127, "name": "Kiribati" },
            { "id": 128, "name": "Korea, North" },
            { "id": 129, "name": "Korea, South" },
            { "id": 130, "name": "Kuwait" },
            { "id": 131, "name": "Kyrgyzstan" },
            { "id": 132, "name": "Laos" },
            { "id": 133, "name": "Latvia" },
            { "id": 134, "name": "Lebanon" },
            { "id": 135, "name": "Lesotho" },
            { "id": 136, "name": "Liberia" },
            { "id": 137, "name": "Libya" },
            { "id": 138, "name": "Liechtenstein" },
            { "id": 139, "name": "Lithuania" },
            { "id": 140, "name": "Luxembourg" },
            { "id": 141, "name": "Macau" },
            { "id": 142, "name": "Macedonia" },
            { "id": 143, "name": "Madagascar" },
            { "id": 144, "name": "Malawi" },
            { "id": 145, "name": "Malaysia" },
            { "id": 146, "name": "Maldives" },
            { "id": 147, "name": "Mali" },
            { "id": 148, "name": "Malta" },
            { "id": 149, "name": "Marshall Islands" },
            { "id": 150, "name": "Martinique" },
            { "id": 151, "name": "Mauritania" },
            { "id": 152, "name": "Mauritius" },
            { "id": 153, "name": "Mayotte" },
            { "id": 154, "name": "Mexico" },
            { "id": 156, "name": "Moldova" },
            { "id": 157, "name": "Monaco" },
            { "id": 158, "name": "Mongolia" },
            { "id": 159, "name": "Montserrat" },
            { "id": 160, "name": "Morocco" },
            { "id": 161, "name": "Mozambique" },
            { "id": 162, "name": "Namibia" },
            { "id": 163, "name": "Nauru" },
            { "id": 164, "name": "Navassa Island" },
            { "id": 165, "name": "Nepal" },
            { "id": 166, "name": "Netherlands" },
            { "id": 167, "name": "Netherlands Antilles" },
            { "id": 168, "name": "New Caledonia" },
            { "id": 169, "name": "New Zealand" },
            { "id": 170, "name": "Nicaragua" },
            { "id": 171, "name": "Niger" },
            { "id": 172, "name": "Nigeria" },
            { "id": 173, "name": "Niue" },
            { "id": 174, "name": "Norfolk Island" },
            { "id": 175, "name": "Northern Mariana Islands" },
            { "id": 176, "name": "Norway" },
            { "id": 177, "name": "Oman" },
            { "id": 178, "name": "Pakistan" },
            { "id": 179, "name": "Palau" },
            { "id": 180, "name": "Panama" },
            { "id": 181, "name": "Papua New Guinea" },
            { "id": 182, "name": "Paracel Islands" },
            { "id": 183, "name": "Paraguay" },
            { "id": 184, "name": "Peru" },
            { "id": 185, "name": "Philippines" },
            { "id": 186, "name": "Pitcairn Islands" },
            { "id": 187, "name": "Poland" },
            { "id": 188, "name": "Portugal" },
            { "id": 189, "name": "Puerto Rico" },
            { "id": 190, "name": "Qatar" },
            { "id": 191, "name": "Reunion" },
            { "id": 192, "name": "Romania" },
            { "id": 193, "name": "Russia" },
            { "id": 194, "name": "Rwanda" },
            { "id": 195, "name": "Saint Helena" },
            { "id": 196, "name": "Saint Kitts and Nevis" },
            { "id": 197, "name": "Saint Lucia" },
            { "id": 198, "name": "Saint Pierre and Miquelon" },
            { "id": 199, "name": "Saint Vincent and the Grenadines" },
            { "id": 200, "name": "Samoa" },
            { "id": 201, "name": "San Marino" },
            { "id": 202, "name": "Sao Tome and Principe" },
            { "id": 203, "name": "Saudi Arabia" },
            { "id": 204, "name": "Senegal" },
            { "id": 205, "name": "Serbia and Montenegro" },
            { "id": 206, "name": "Seychelles" },
            { "id": 207, "name": "Sierra Leone" },
            { "id": 208, "name": "Singapore" },
            { "id": 209, "name": "Slovakia" },
            { "id": 210, "name": "Slovenia" },
            { "id": 211, "name": "Solomon Islands" },
            { "id": 212, "name": "Somalia" },
            { "id": 213, "name": "South Africa" },
            { "id": 214, "name": "South Georgia and the South Sandwich Islands" },
            { "id": 215, "name": "Spain" },
            { "id": 216, "name": "Spratly Islands" },
            { "id": 217, "name": "Sri Lanka" },
            { "id": 218, "name": "Sudan" },
            { "id": 219, "name": "Suriname" },
            { "id": 220, "name": "Svalbard" },
            { "id": 221, "name": "Swaziland" },
            { "id": 222, "name": "Sweden" },
            { "id": 223, "name": "Switzerland" },
            { "id": 224, "name": "Syria" },
            { "id": 225, "name": "Taiwan" },
            { "id": 226, "name": "Tajikistan" },
            { "id": 227, "name": "Tanzania" },
            { "id": 228, "name": "Thailand" },
            { "id": 229, "name": "Timor-Leste" },
            { "id": 230, "name": "Togo" },
            { "id": 231, "name": "Tokelau" },
            { "id": 232, "name": "Tonga" },
            { "id": 233, "name": "Trinidad and Tobago" },
            { "id": 234, "name": "Tromelin Island" },
            { "id": 235, "name": "Tunisia" },
            { "id": 236, "name": "Turkey" },
            { "id": 237, "name": "Turkmenistan" },
            { "id": 238, "name": "Turks and Caicos Islands" },
            { "id": 239, "name": "Tuvalu" },
            { "id": 240, "name": "Uganda" },
            { "id": 241, "name": "Ukraine" },
            { "id": 242, "name": "United Arab Emirates" },
            { "id": 243, "name": "United Kingdom" },
            { "id": 244, "name": "United States" },
            { "id": 245, "name": "Uruguay" },
            { "id": 246, "name": "Uzbekistan" },
            { "id": 247, "name": "Vanuatu" },
            { "id": 248, "name": "Venezuela" },
            { "id": 249, "name": "Vietnam" },
            { "id": 250, "name": "Virgin Islands" },
            { "id": 251, "name": "Wake Island" },
            { "id": 252, "name": "Wallis and Futuna" },
            { "id": 253, "name": "West Bank" },
            { "id": 254, "name": "Western Sahara" },
            { "id": 255, "name": "Yemen" },
            { "id": 256, "name": "Zambia" },
            { "id": 257, "name": "Zimbabwe" }

        ];
    return result;
    },

    getTitleList: function() {
        var result = [
                { "id": 0, "name": "Choose title..." },
                { "id": 1, "name": "Accounting Assistant" },
                { "id": 2, "name": "Accounting Manager" },
                { "id": 3, "name": "Administrator" },
                { "id": 4, "name": "Art Director" },
                { "id": 5, "name": "Assembler" },
                { "id": 6, "name": "BI/Sharepoint Specialist" },
                { "id": 7, "name": "Business Area Director" },
                { "id": 8, "name": "Business Controller" },
                { "id": 9, "name": "Category Manager" },
                { "id": 10, "name": "Claim & Service Technician" },
                { "id": 11, "name": "Claim Officer" },
                { "id": 12, "name": "Commercial Support Representative" },
                { "id": 13, "name": "Concept Developer" },
                { "id": 14, "name": "Construction Worker" },
                { "id": 15, "name": "Constructor" },
                { "id": 16, "name": "Customer Demand Manager" },
                { "id": 17, "name": "Customer Design Manager" },
                { "id": 18, "name": "Customer Relation Officer" },
                { "id": 19, "name": "Customer Support Manager" },
                { "id": 20, "name": "Customer Support Representative" },
                { "id": 21, "name": "Design Engineer" },
                { "id": 22, "name": "Design Engineer Administrator" },
                { "id": 23, "name": "Desktop & Application Coordinator" },
                { "id": 24, "name": "Electrician" },
                { "id": 25, "name": "Finance & Administration Manager" },
                { "id": 26, "name": "Finance Assistant" },
                { "id": 27, "name": "Finance Director" },
                { "id": 28, "name": "Finance Manager" },
                { "id": 29, "name": "General Manager" },
                { "id": 30, "name": "Graphic Designer" },
                { "id": 31, "name": "HR Advisor" },
                { "id": 32, "name": "HR Director" },
                { "id": 33, "name": "HR Manager" },
                { "id": 34, "name": "Industrialization Manager" },
                { "id": 35, "name": "Integration Architect" },
                { "id": 36, "name": "International Customer Support Representative" },
                { "id": 37, "name": "International Project Manager" },
                { "id": 38, "name": "IT Support Coordinator" },
                { "id": 39, "name": "Janitor" },
                { "id": 40, "name": "Key Account manager" },
                { "id": 41, "name": "Laboratory Engineer" },
                { "id": 42, "name": "Light Control Support Representative" },
                { "id": 43, "name": "Light Control Support Manager" },
                { "id": 44, "name": "Light Service & Application Manager" },
                { "id": 45, "name": "Light Service Coordinator" },
                { "id": 46, "name": "Lighting Adviser" },
                { "id": 47, "name": "Lighting Design Manager" },
                { "id": 48, "name": "Lighting Designer" },
                { "id": 49, "name": "Lighting Technician" },
                { "id": 50, "name": "Logistics Manager" },
                { "id": 51, "name": "Maintenance Manager" },
                { "id": 52, "name": "Maintenance Worker" },
                { "id": 53, "name": "Managing Director" },
                { "id": 54, "name": "Marketing Assistant" },
                { "id": 55, "name": "Marketing Coordinator" },
                { "id": 56, "name": "Marketing Director" },
                { "id": 57, "name": "Marketing Manager" },
                { "id": 58, "name": "Master Planner" },
                { "id": 59, "name": "Online Marketing Manager" },
                { "id": 60, "name": "Operational Buyer" },
                { "id": 61, "name": "Operations Manager" },
                { "id": 62, "name": "Paint Worker" },
                { "id": 63, "name": "Planner" },
                { "id": 64, "name": "Plant Manager" },
                { "id": 65, "name": "Preparation engineer" },
                { "id": 66, "name": "Process & IT Development Manager" },
                { "id": 67, "name": "Process Developer" },
                { "id": 68, "name": "Product & Application Manager" },
                { "id": 69, "name": "Product and Marketing Coordinator" },
                { "id": 70, "name": "Product Auditor" },
                { "id": 71, "name": "Product Coordinator" },
                { "id": 72, "name": "Product Development Director" },
                { "id": 73, "name": "Product Manager" },
                { "id": 74, "name": "Product Marketing Manager" },
                { "id": 75, "name": "Production Controller" },
                { "id": 76, "name": "Production Controlling Manager" },
                { "id": 77, "name": "Production Engineer" },
                { "id": 78, "name": "Production Leader" },
                { "id": 79, "name": "Production Manager" },
                { "id": 80, "name": "Production Planner" },
                { "id": 81, "name": "Program Office Director" },
                { "id": 82, "name": "Project Engineer" },
                { "id": 83, "name": "Project Leader" },
                { "id": 84, "name": "Project Management Manager" },
                { "id": 85, "name": "Project Manager" },
                { "id": 86, "name": "Property & Maintenance Manager" },
                { "id": 87, "name": "Property Worker" },
                { "id": 88, "name": "Purchasing Director" },
                { "id": 89, "name": "Quality & Environment Coordinator" },
                { "id": 90, "name": "Quality & Environment Manager" },
                { "id": 91, "name": "Quality Coordinator" },
                { "id": 92, "name": "Quality Engineer" },
                { "id": 93, "name": "Quality Manager" },
                { "id": 94, "name": "Quality Technician" },
                { "id": 95, "name": "R&D Manager" },
                { "id": 96, "name": "Receptionist" },
                { "id": 97, "name": "Regional Director" },
                { "id": 98, "name": "Regional Sales Manager" },
                { "id": 99, "name": "Sales Coordinator" },
                { "id": 100, "name": "Sales Director" },
                { "id": 101, "name": "Sales Manager" },
                { "id": 102, "name": "Sales Representative" },
                { "id": 103, "name": "Sales Support Representative" },
                { "id": 104, "name": "Senior Marketing Coordinator" },
                { "id": 105, "name": "Senior Project Manager" },
                { "id": 106, "name": "Senior Sales Manager" },
                { "id": 107, "name": "Service Manager" },
                { "id": 108, "name": "Supply Planner" },
                { "id": 109, "name": "Support Coordinator" },
                { "id": 110, "name": "System Developer" },
                { "id": 111, "name": "System Specialist" },
                { "id": 112, "name": "System Support" },
                { "id": 113, "name": "Team Coach" },
                { "id": 114, "name": "Team Manager" },
                { "id": 115, "name": "Teamleader" },
                { "id": 116, "name": "Technical Product Manager" },
                { "id": 117, "name": "Technical Support Representative" },
                { "id": 118, "name": "Technical Support Manager" },
                { "id": 119, "name": "Tooling Manager" },
                { "id": 120, "name": "Toolmaker" },
                { "id": 121, "name": "Trading Manager" },
                { "id": 122, "name": "Transport Administrator" },
                { "id": 123, "name": "Unified Communication Manager" },
                { "id": 124, "name": "Wages Administrator" },
                { "id": 125, "name": "Warehouse Worker" },
                { "id": 126, "name": "Web-coordinator" },
                { "id": 127, "name": "Workshop Worker" }
            ];
        return result;

    },

    getDepartments: function(company) {
        if (!company)
            return [{id: 0, name: "Choose department..." }]
        var findDepartments = function (total,currentValue,currentIndex,arr) {
            if (total) return total;
            if (currentValue.id == company) {
                return currentValue.departments;
            }
            return null;
        }
        
        return companyData.companies.reduce( findDepartments, null);
    },
    
    getLocationList: function(company) {
        if (!company)
            return [{id: 0, name: "Choose location..." }]
        var findLocations = function (total,currentValue,currentIndex,arr) {
            if (total) return total;
            if (currentValue.id == company) {
                return currentValue.locations;
            }
            return null;
        }
        
        return companyData.companies.reduce( findLocations, null);
    },

    getCompanyList: function() {
        return companyData.companies;
    },
    
    getFreeApplications: function() {
        return [
            { id: 1, name: "Dialux" },
            { id: 2, name: "DWG TrueView" },  
            { id: 3, name: "Fagerhult Life Cycle Calculator" },  
            { id: 4, name: "Fagerhult Ligthing Concept Tool" },  
            { id: 5, name: "KM Fagerhult" },  
            { id: 6, name: "PDF Viewer" },  
            { id: 7, name: "Solid Edge Viewer" }  
        ];
    },

    getLicensedApplications: function() {
        return [
            { id: 1, name: "Adobe Standard" },
            { id: 2, name: "AIDE PDF to DXF" },  
            { id: 3, name: "Autocad LT" },  
            { id: 4, name: "Microsoft Office 365" },  
            { id: 5, name: "Microsoft Visio Standard" },  
            { id: 6, name: "Solid Edge" },  
            { id: 7, name: "Solid Edge Teamcenter" }  
        ];
    },
    
    getCoreSystems: function() {
        return [
            { id: 1, name: "Jeeves" },
            { id: 2, name: "MS Dynamics AX" },  
            { id: 3, name: "MS Dynamics CRM" },  
            { id: 4, name: "BIC" },  
            { id: 5, name: "Astro" },  
            { id: 6, name: "EdiCom" },  
            { id: 7, name: "Aditro" }  
        ];
    },
    
    getManagerList: function() {
        var result = [
            {id: 0, name: "Choose manager..." },
            {id: 1, name: "Jeanette Breidmer"},
            {id: 2, name: "Jonas Abrahamsson"},
            {id: 3, name: "Anders Jakobsson"},
            {id: 4, name: "Tony Lennartsson"}
        ];
        return result;
    },
    
    getOneTwoSided: function () {
        var result = [
            { "id": 0, "name": "One-sided" },
            { "id": 1, "name": "Two-sided" }          
        ];
        return result;
    },
    
    getNumberOfCards: function () {
        var result = [
            { "id": 0, "name": "100pcs" },
            { "id": 1, "name": "500pcs" }          
        ];
        return result;
    },
    
    getAlreadyHaveAnAccount: function () {
        var result = [
            { "id": 0, "name": "Yes" },
            { "id": 1, "name": "No" }          
        ];
        return result;
    },
    
    getUserAccountExists: function () {
        var result = [
            { "id": 0, "name": "Yes" },
            { "id": 1, "name": "No" }          
        ];
        return result;
    },
    
    getReasonForLeaving: function () {
        var result = [
            { "id": 0, "name": "Choose Reason" },
            { "id": 1, "name": "Own request" },
            { "id": 2, "name": "Uppsägning pga arbetsbrist" },
            { "id": 3, "name": "Uppsägning av annan orsak" },
            { "id": 4, "name": "Avskedande" },
            { "id": 5, "name": "Dödsfall" },
            { "id": 6, "name": "Pension" }          
        ];
        return result;
    },
    
    getUserAccountInformation: function () {
        var result = [
            { "id": 0, "name": "User Files and emails can be deleted" },
            { "id": 1, "name": "Users files and emails should be archived" }          
        ];
        return result;
    },
    
    getFagerhultGroup: function () {
        var result = [
            { "id": 0, "name": "No" },
            { "id": 1, "name": "Yes" }          
        ];
        return result;
    },   
    
    getRemoteAccess: function () { 
         var result = [
            { "id": 0, "name": "No" },
            { "id": 1, "name": "Yes" }          
        ];
        return result;      
    },
}

export default customNewEmployee

var companyData = {
    "companies": [
        {
            "id": 0,
            "name": "Choose company...",
            "locations": [
                {
                    "id": 0,
                    "name": "Choose location..."
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 1,
            "name": "AB Fagerhult",
            "locations": [
                {
                    "id": 1,
                    "name": "Stockholm"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 2,
            "name": "Ateljé Lyktan AB",
            "locations": [
                {
                    "id": 10,
                    "name": "Åhus"
                },
                {
                    "id": 11,
                    "name": "Göteborg"
                },
                {
                    "id": 12,
                    "name": "Stockholm"
                },
                {
                    "id": 13,
                    "name": "Malmö"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 3,
            "name": "Fagerhults Belysning AB",
            "locations": [
                {
                    "id": 0,
                    "name": "Choose location..."
                },
                {
                    "id": 2,
                    "name": "Habo"
                },
                {
                    "id": 3,
                    "name": "Åhus"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                },
                {
                    "id": 14,
                    "name": "Group IT"
                }
            ]
        },

        {
            "id": 4,
            "name": "Fagerhults Belysning Sverige AB",
            "locations": [
                {
                    "id": 0,
                    "name": "Choose location..."
                },
                {
                    "id": 2,
                    "name": "Habo"
                },
                {
                    "id": 3,
                    "name": "Göteborg"
                },
                {
                    "id": 4,
                    "name": "Stockholm"
                },
                {
                    "id": 5,
                    "name": "Örebro"
                },
                {
                    "id": 6,
                    "name": "Malmö"
                },
                {
                    "id": 7,
                    "name": "Ö-vik"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                },
                {
                    "id": 14,
                    "name": "Group IT"
                }
            ]
        },
        {
            "id": 5,
            "name": "Fagerhult Retail AB",
            "locations": [
                {
                    "id": 1,
                    "name": "Bollebygd"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 14,
                    "name": "Assistant"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 24,
                    "name": "Finance"
                },
                {
                    "id": 25,
                    "name": "HR"
                },
                {
                    "id": 26,
                    "name": "Operations"
                },
                {
                    "id": 27,
                    "name": "PAM"
                },
                {
                    "id": 28,
                    "name": "Property"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 29,
                    "name": "Sales Sweden"
                },
                {
                    "id": 30,
                    "name": "VLA"
                }
            ]
        },
        {
            "id": 6,
            "name": "Fagerhult AS",
            "locations": [
                {
                    "id": 1,
                    "name": "Copenhagen"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 7,
            "name": "Fagerhult Belysning AS",
            "locations": [
                {
                    "id": 1,
                    "name": "Lysaker"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 8,
            "name": "Fagerhult Oy",
            "locations": [
                {
                    "id": 1,
                    "name": "Helsinki"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 9,
            "name": "I-Valo Oy",
            "locations": [
                {
                    "id": 1,
                    "name": "Iittala"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 10,
            "name": "Fagerhult Lighting Ltd",
            "locations": [
                {
                    "id": 0,
                    "name": "Choose location..."
                },
                {
                    "id": 11,
                    "name": "London"
                },
                {
                    "id": 12,
                    "name": "Dublin"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 11,
            "name": "Whitecroft Lighting Limited",
            "locations": [
                {
                    "id": 1,
                    "name": "Lancashire"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 12,
            "name": "Designplan Lighting Ltd",
            "locations": [
                {
                    "id": 1,
                    "name": "Sutton"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 13,
            "name": "LTS Licht & Leuchten GmbH",
            "locations": [
                {
                    "id": 1,
                    "name": "Tettnang"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 14,
            "name": "Waco N.V.",
            "locations": [
                {
                    "id": 1,
                    "name": "Baaigern-Gavere"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 15,
            "name": "Fagerhult OÜ",
            "locations": [
                {
                    "id": 1,
                    "name": "Tallinn"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 16,
            "name": "Fagerhult France",
            "locations": [
                {
                    "id": 1,
                    "name": "St-Genis-Laval(Rhône)"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 17,
            "name": "Fagerhult BV",
            "locations": [
                {
                    "id": 1,
                    "name": "Houten"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 18,
            "name": "Fagerhult Sp.z.o.o.",
            "locations": [
                {
                    "id": 1,
                    "name": "Warsaw"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 19,
            "name": "Fagerhult SPb",
            "locations": [
                {
                    "id": 1,
                    "name": "St. Petersburg"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 20,
            "name": "Fagerhult s.r.o.",
            "locations": [
                {
                    "id": 1,
                    "name": "Bratislava"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 21,
            "name": "Fagerhult SL",
            "locations": [
                {
                    "id": 1,
                    "name": "Madrid"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 22,
            "name": "Commtech Commissioning Services SA",
            "locations": [
                {
                    "id": 1,
                    "name": "Madrid"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 23,
            "name": "Arlight Aydinlatma A.Ş.",
            "locations": [
                {
                    "id": 1,
                    "name": "Kazan Ankara"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 24,
            "name": "Eagle Lighting Australia",
            "locations": [
                {
                    "id": 1,
                    "name": "Melbourne"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 25,
            "name": "Fagerhult Lighting Systems(Suzhou) Co Ltd.",
            "locations": [
                {
                    "id": 1,
                    "name": "Suzhou"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 31,
                    "name": "Environment Health & Saftey"
                },
                {
                    "id": 24,
                    "name": "Finance"
                },
                {
                    "id": 25,
                    "name": "HR"
                },
                {
                    "id": 32,
                    "name": "IT"
                },
                {
                    "id": 33,
                    "name": "KAM Business Dev."
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 34,
                    "name": "Supply Chain Management"
                },
                {
                    "id": 35,
                    "name": "Technical"
                }
            ]
        },
        {
            "id": 26,
            "name": "Fagerhult Lighting - Dubai Branch",
            "locations": [
                {
                    "id": 1,
                    "name": "Dubai"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        },
        {
            "id": 27,
            "name": "Fagerhult New Zealand",
            "locations": [
                {
                    "id": 1,
                    "name": "East Tamaki"
                }
            ],
            "departments": [
                {
                    "id": 0,
                    "name": "Choose department..."
                },
                {
                    "id": 1,
                    "name": "Building"
                },
                {
                    "id": 2,
                    "name": "Business Development"
                },
                {
                    "id": 3,
                    "name": "Environment"
                },
                {
                    "id": 4,
                    "name": "Finance & Administration"
                },
                {
                    "id": 5,
                    "name": "Future Technologies"
                },
                {
                    "id": 6,
                    "name": "Marketing"
                },
                {
                    "id": 7,
                    "name": "Planning"
                },
                {
                    "id": 8,
                    "name": "Production"
                },
                {
                    "id": 9,
                    "name": "Purchasing"
                },
                {
                    "id": 10,
                    "name": "Quality"
                },
                {
                    "id": 11,
                    "name": "Sales"
                },
                {
                    "id": 12,
                    "name": "Systems/Logistics"
                },
                {
                    "id": 13,
                    "name": "Technique"
                }
            ]
        }
    ]
}

