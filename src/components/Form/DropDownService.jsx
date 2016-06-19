var CreateNewTeamRoom = {

    getParameterByName: function (name, url) {
        if (!url) url = window.location.href;
        url = url.toLowerCase(); // This is just to avoid case sensitiveness
        name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    getExternalCollaboration: function (id) {
        if (id == 1) return "Allow external users";
        if (id == 2) return "Only EVRY users";
        return "";
    },
    makeExternalCollaborationList: function (onlyExternal) {
        var result = [{ id: 1, title: "Allow external users" }];
        if (!onlyExternal) {
            result.push({ id: 2, title: "Only EVRY users" });
        }
        return result; 
    },
    getSecurityPolicy: function(id) {
        if (id == 1) return "Protect";
        if (id == 2) return "Restricted";
        if (id == 3) return "Secure";
        if (id == 4) return "Secret";
        return "";
    },
    makeSecurityPolicyList : function(externalCollaboration) {
        var result = [{id:1, title:"Protect"}];
        if (externalCollaboration==2) {
            result.push({id:2, title:"Restricted"});
            result.push({id:3, title:"Secure"});
            result.push({id:4, title:"Secret"});
        }
        return result;
    },
    getEstimatedSize: function (id) {
        if (id == 5) return "5GB";
        if (id == 50) return "50GB";
        if (id == 500) return "500GB";
        if (id == 5000) return "5000GB";
        return "";
    },
    makeEstimatedSizeList : function(externalCollaboration, securityPolicy) {
        var result = [{id:5, title:"5GB"}];
        result.push({id:50, title:"50GB"});
        result.push({id:500, title:"500GB"});
        if ((externalCollaboration == 2) && (securityPolicy < 3)) {
            result.push({id:5000, title:"5000GB"});
        }
        return result;
    },
    getType: function (id) {
        if (id == 1) return "External Team site";
        if (id == 4) return "Teamroom-sec";
        if (id == 2) return "Internal Team site";
        if (id == 3) return "IVA Site";
        return "";
    },
    makeTypeList : function(externalCollaboration, securityPolicy, estimatedSize) {
        var result = [];
        if (externalCollaboration == 1) {
            result.push({ id: 1, title: "External Team site" });
        } else {
            if (securityPolicy>2) {
                result.push({id:4, title:"Teamroom-sec"});
            }
            else {
                if (estimatedSize < 501) {
                    result.push({id:2, title:"Internal Team site"});
                }
                result.push({id:3, title:"IVA Site"});
            }
        }
        return result;
    },
    getCategory: function (id) {
        if (id == 1) return "Team room";
        return "";
    },
    makeCategoryList: function (externalCollaboration) {
        var result = [
            { id: 5, title: "Collaboration" },
            { id: 6, title: "Project" },
            { id: 7, title: "Professional Network" },
            { id: 8, title: "Department" },
            { id: 9, title: "Sites" }
        ];
        return result;
    },
    createListItem: function (options, callback) {

        var CorpSiteStandardCategoryLookup = new SP.FieldLookupValue();
        CorpSiteStandardCategoryLookup.set_lookupId(options.CorpSiteStandardCategory);

        EVRY.Utilities.getClientContext(function (clientContext) {

            var businessOwnerUser = clientContext.get_web().ensureUser(options.businessOwner.Key);
            clientContext.load(businessOwnerUser);

            clientContext.executeQueryAsync(Function.createDelegate(this, function () {
                var businessOwnerFieldUserValue = new SP.FieldUserValue();
                businessOwnerFieldUserValue.set_lookupId(businessOwnerUser.get_id());

                var data = [{
                    Title: options.Title,
                    CorpSiteSecure: options.CorpSiteSecure,
                    CorpSiteType: options.CorpSiteType,
                    CorpSiteStandardCategory: CorpSiteStandardCategoryLookup,
                    PostCreationScript: options.PostCreationScript,
                    CorpSiteDescription: options.CorpSiteDescription,
                    CorpSiteOwners: businessOwnerFieldUserValue,
                    CorpSiteBusinessOwner: businessOwnerFieldUserValue,
                    CP_OpportunityId: options.CP_OpportunityId,
                    CP_ProjectId: options.CP_ProjectId,
                    CP_CustomerId: options.CP_CustomerId,
                    EDGE_Security_Model: options.EDGE_Security_Model,
                }];


                console.log(data);
                //callback("ok");
                //return;

                EVRY.Sites.createListItemsAsync(clientContext, { listTitle: "Corp - Site Provisioning - Standard", data: data })
                    .then(
                        function (scope) {
                            console.log("done");
                            callback("ok");
                        },
                        function (scope) {
                            console.log("error");
                            callback("fail");
                        }
                );
            }), Function.createDelegate(this, function () { alert("fel"); }));

        });
    }
}