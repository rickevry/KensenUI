var QualityService = {

    demandeList: function() {
        var result = [];
        result.push({id:1, title:"Nouveau produit"});
        result.push({id:2, title:"Objectif de gain"});
        result.push({id:3, title:"Amélioration continue"});
        result.push({id:4, title:"Redesign"});
        return result;
    },    
    prioriteList : function() {
        var result = [];
        result.push({id:1, title:"(1) Haute"});
        result.push({id:2, title:"(2) Normal"});
        result.push({id:3, title:"(3) Faible"});
        return result;
    },
    statusActionCorrectiveList : function() {
        var result = [];
        result.push({id:10, title:"10. Nouvelle"});
        result.push({id:20, title:"20. Accepté"});
        result.push({id:30, title:"30. En cours de traitement"});
        result.push({id:50, title:"50. Proposée"});
        result.push({id:70, title:"70. Acceptée"});
        result.push({id:80, title:"80. Mise en oeuvre"});
        return result;
    },
    statusList : function() {
        var result = [];
        result.push({id:10, title:"10. Demandé"});
        result.push({id:20, title:"20. Accepté"});
        result.push({id:30, title:"30. En Cours"});
        result.push({id:40, title:"40. Validation Client"});
        result.push({id:90, title:"90. Terminé"});
        result.push({id:99, title:"99. Refusé"});
        return result;
    },
    actionsCorrectivesList : function() {
        var result = [];
        result.push({id:0, title:""});
        result.push({id:1, title:"Replacement"});
        result.push({id:2, title:"Réparation"});
        result.push({id:3, title:"Aucune"});
        result.push({id:4, title:"Autre"});
        return result;
    },
    aProposDeList : function() {
        var result = [];
        result.push({id:0, title:""});
        result.push({id:1, title:"Produit"});
        result.push({id:2, title:"Prestation d'emballage"});
        result.push({id:3, title:"Manutention"});
        result.push({id:4, title:"Autre"});
        return result;
    },

    reclamationList : function() {
        var result = [];
        result.push({id:0, title:""});
        result.push({id:1, title:"Manque"});
        result.push({id:2, title:"Mauvais produit"});
        result.push({id:3, title:"Endommagé"});
        return result;
    },
    sitesThalesList : function() {
        var result = [];
        result.push({id:4, title:"THALES AIR SYSTEMS ELANCOURT"});
        result.push({id:5, title:"THALES AIR SYSTEMS FLEURY"});
        result.push({id:6, title:"THALES AIR SYSTEMS LIMOURS"});
        result.push({id:7, title:"THALES AIR SYSTEMS RUNGIS"});
        result.push({id:9, title:"THALES AIR SYSTEMS YMARE"});
        result.push({id:10, title:"THALES ALENIA SPACE BRAM- La Lauzette"});
        result.push({id:11, title:"THALES ALENIA SPACE CANNES"});
        result.push({id:13, title:"THALES ALENIA SPACE TOULOUSE"});
        result.push({id:14, title:"THALES ANGENIEUX"});
        result.push({id:15, title:"THALES AV. ELECTRICAL SYST. CHATOU"});
        result.push({id:16, title:"THALES AV. ELECTRICAL SYST. MERU"});
        result.push({id:18, title:"THALES AVIONICS BRELANDIERE"});
        result.push({id:19, title:"THALES AVIONICS CSC- Ch&#226;tellerault"});
        result.push({id:20, title:"THALES AVIONICS ELECTRICAL SYSTEMS"});
        result.push({id:21, title:"THALES AVIONICS LCD"});
        result.push({id:22, title:"THALES AVIONICS LE HAILLAN"});
        result.push({id:23, title:"THALES AVIONICS MEUDON"});
        result.push({id:24, title:"THALES AVIONICS TOULOUSE"});
        result.push({id:25, title:"THALES AVIONICS VALENCE"});
        result.push({id:26, title:"THALES AVIONICS VENDOME MONS"});
        result.push({id:27, title:"THALES AVIONICS VITROLLES"});
        result.push({id:28, title:"THALES COMM ET SECURITY BREST"});
        result.push({id:29, title:"THALES COMM ET SECURITY BRETIGNY"});
        result.push({id:30, title:"THALES COMM ET SECURITY BRIVE"});
        result.push({id:31, title:"THALES COMM ET SECURITY CAVAIL."});
        result.push({id:32, title:"THALES COMM ET SECURITY CHOLET"});
        result.push({id:34, title:"THALES COMM ET SECURITY COLOMB."});
        result.push({id:35, title:"THALES COMM ET SECURITY GENNEV."});
        result.push({id:36, title:"THALES COMM ET SECURITY LA VALETTE (VAR)"});
        result.push({id:37, title:"THALES COMM ET SECURITY LAVAL"});
        result.push({id:38, title:"THALES COMM ET SECURITY LILLE"});
        result.push({id:39, title:"THALES COMM ET SECURITY MONTP."});
        result.push({id:40, title:"THALES COMM ET SECURITY PAL."});
        result.push({id:41, title:"THALES COMM ET SECURITY ST HERB."});
        result.push({id:42, title:"THALES COMM ET SECURITY TOLBIAC"});
        result.push({id:43, title:"THALES COMM ET SECURITY TOUL."});
        result.push({id:44, title:"THALES COMM ET SECURITY VELIZY"});
        result.push({id:46, title:"THALES COMM ET SECURITY WISSOUS"});
        result.push({id:48, title:"THALES COMMUNICATION CIO - SITE LYRECO DE CHOLET"});
        result.push({id:50, title:"Thales Component&amp;Subsyst-Thonon"});
        result.push({id:51, title:"Thales Components&amp;Subsystem Moirans"});
        result.push({id:52, title:"THALES COMPUTERS SA - SITE DE TOULON"});
        result.push({id:54, title:"THALES ELECTRON DEVICES MOIRANS"});
        result.push({id:55, title:"THALES ELECTRON DEVICES THONON"});
        result.push({id:56, title:"THALES ELECTRON DEVICES VELIZY"});
        result.push({id:57, title:"THALES GEODIS F ET L LIMOURS"});
        result.push({id:58, title:"THALES GEODIS F ET L MALAKOFF"});
        result.push({id:59, title:"THALES GEODIS F ET L ROISSY"});
        result.push({id:60, title:"THALES GEODIS F ET L SOPHIA"});
        result.push({id:61, title:"THALES GEODIS F ET L VILLEPINTE"});
        result.push({id:62, title:"THALES GEODIS F ET L WISSOUS"});
        result.push({id:63, title:"THALES GEODIS FREIGHT &amp; LOGISTICS"});
        result.push({id:64, title:"THALES LASER SA - SITE DE ORSAY"});
        result.push({id:65, title:"THALES MICROELECTRONICS ETRELLES"});
        result.push({id:68, title:"THALES OPTRONIQUE LYRECO (TOSA)"});
        result.push({id:69, title:"THALES RAYTHEON SYSTEMS COMPANY SAS - SITE DE MASSY"});
        result.push({id:70, title:"THALES SECURITY SOLUTIONS &amp; SERVICES SAS"});
        result.push({id:71, title:"THALES SECURITY SOLUTIONS &amp; SERVICES SAS - DSS - SITE DE VELIZY"});
        result.push({id:72, title:"THALES SECURITY SOLUTIONS &amp; SERVICES SAS - DSS - TSS TOUL EUROPE"});
        result.push({id:73, title:"THALES SECURITY SOLUTIONS &amp; SERVICES SAS - DTS - SITE DE BONDOUFLE"});
        result.push({id:74, title:"THALES SECURITY SOLUTIONS SERVICES SAS - DSS - SITE DE BRETIGNY"});
        result.push({id:75, title:"THALES SECURITY SOLUTIONS SERVICES SAS - DSS - SITE DE FLEURY"});
        result.push({id:76, title:"THALES SERVICES - SITE DE CERGY PONTOISE"});
        result.push({id:77, title:"THALES SERVICES - SITE DE SOPHIA"});
        result.push({id:78, title:"THALES SERVICES - SITE DE VALENCE"});
        result.push({id:79, title:"THALES SERVICES - SITE DE VELIZY (DAME ROSE)"});
        result.push({id:81, title:"THALES SERVICES - SITE DE VELIZY CARTIER"});
        result.push({id:82, title:"THALES SERVICES - SITE EUCLIDE"});
        result.push({id:84, title:"THALES SYSTEMES AEROPORTES CN- ELANCOURT"});
        result.push({id:85, title:"THALES SYSTEMES AEROPORTES JA-PESSAC"});
        result.push({id:86, title:"THALES SYSTEMES AEROPORTES NOMY- BREST"});
        result.push({id:87, title:"THALES TRAINING &amp; SIMULATION OSNY"});
        result.push({id:90, title:"THALES UNDERWATER SYSTEMS NOMY- BREST"});
        result.push({id:91, title:"THALES UNDERWATER SYSTEMS SOPHIA"});
        result.push({id:92, title:"TRIXELL"});
        result.push({id:93, title:"UMS GAAS-ORSAY"});
        return result;
    }
}




