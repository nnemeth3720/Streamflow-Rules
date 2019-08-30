{
  "workflows": [
    {
      "flags": {},
      "id": 1,
      "name": "US Streamflow",
      "steps": [
        "Streamflow1US",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow POBs",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow Events",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow Deferrals",
        "Streamflow Submit",
        "Streamflow Run"
      ]
    },
    {
      "flags": {},
      "id": 2,
      "name": "CA Streamflow",
      "steps": [
        "Streamflow1CA",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow POBs",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow Events",
        "Streamflow General Page",
        "Streamflow General Page",
        "Streamflow Deferrals",
        "Streamflow Submit",
        "Streamflow Run"
      ]
    }
  ],
  "rules": {
    "tabSettings": [
      {
        "id": "1",
        "name": "SF1US"
      },
      {
        "id": "2",
        "name": "SFGP"
      },
      {
        "id": "5",
        "name": "SFPOBS"
      },
      {
        "id": "9",
        "name": "SFEVENTS"
      },
      {
        "id": "12",
        "name": "SFDEFRLS"
      },
      {
        "id": "13",
        "name": "SFSUBMIT"
      },
      {
        "id": "14",
        "name": "SFRUN"
      },
      {
        "id": "15",
        "name": "SF1CA"
      }
    ],
    "rules": [
      {
        "code": "var rules = [{\n  url: /https:\\/\\/redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID:521/,\n  \"name\": \"Streamflow1US\",\n  \"before\": function(resolve, context) {\n    var dir = prompt(\"Please enter the arrangement number\", dir);\n    context.storage.set(\"ArrNum\", dir);\n    resolve();\n  },\n  \"fields\": [{\n    \"selector\": \"#RS_P411_6_ARRANGEMENT_NUM\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"#RS_P411_1_ORG_ID\",\n    \"value\": \"103\"\n  }, {\n    \"selector\": \"#RS_P411_7_DEBUG_1\",\n    \"value\": \"N\"\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 1
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,[0-9]+/,\n  \"name\": \"Streamflow General Page\",\n  \"fields\": [{\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 2
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,145/,\n  \"name\": \"Streamflow POBs\",\n  \"fields\": [{\n    \"selector\": \"#RS_P411_9_ARRANGEMENT_NUMBERS\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 5
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,148/,\n  \"name\": \"Streamflow Events\",\n  \"fields\": [{\n    \"selector\": \"#RS_P411_30_EVT_DATE_FROM\",\n    \"value\": \"01-Jan-01\"\n  }, {\n    \"selector\": \"#RS_P411_31_EVT_DATE_TO\",\n    \"value\": \"12-Dec-28\"\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 9
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,151/,\n  \"name\": \"Streamflow Deferrals\",\n  \"fields\": [{\n    \"selector\": \"#RS_P411_3_DEF_DATE_FROM\",\n    \"value\": \"01-Jan-01\"\n  }, {\n    \"selector\": \"#RS_P411_4_DEF_DATE_TO\",\n    \"value\": \"12-Dec-28\"\n  }, {\n    \"selector\": \"#RS_P411_6_ARRANGEMENT_NUM\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 12
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,152/,\n  \"name\": \"Streamflow Submit\",\n  \"fields\": [{\n    \"selector\": \"button[id=B532596469587382720]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 13
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:412:[0-9]+::NO:412:P412_RS_JC_CHAIN_ID,P412_RS_JC_CHAIN_PRG_ID:521,141/,\n  \"name\": \"Streamflow Run\",\n  \"fields\": [{\n    \"selector\": \"button[id=B582223781029970730]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 14
      },
      {
        "code": "var rules = [{\n  url: /https:\\/\\/redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID:521/,\n  \"name\": \"Streamflow1CA\",\n  \"before\": function(resolve, context) {\n    var dir = prompt(\"Please enter the arrangement number\", dir);\n    context.storage.set(\"ArrNum\", dir);\n    resolve();\n  },\n  \"fields\": [{\n    \"selector\": \"#RS_P411_6_ARRANGEMENT_NUM\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"#RS_P411_1_ORG_ID\",\n    \"value\": \"92\"\n  }, {\n    \"selector\": \"#RS_P411_7_DEBUG_1\",\n    \"value\": \"N\"\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 15
      }
    ]
  },
  "settings": {
    "alwaysShowPopup": false,
    "jpegQuality": 60,
    "reevalRules": false,
    "matchOnLoad": false,
    "dontMatchOnTabSwitch": false,
    "importActive": true,
    "importUrl": "https://github.com/nnemeth3720/Streamflow-Rules/blob/master/NA%20Revenue%20Team.js",
    "dontFireEvents": false,
    "decryptionPassword": "undefined"
  }
}
