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
        "id": "3",
        "name": "SFPOBS"
      },
      {
        "id": "4",
        "name": "SFEVENTS"
      },
      {
        "id": "5",
        "name": "SFDEFRLS"
      },
      {
        "id": "6",
        "name": "SFSUBMIT"
      },
      {
        "id": "7",
        "name": "SFRUN"
      },
      {
        "id": "8",
        "name": "SF1CA"
      },
	    {
        "id": "9",
        "name": "Man Line Cancel"
      },
      {
        "id": "10",
        "name": "Set Date"
      }
    ],
    "rules": [
      {
        "code": "var rules = [{\n  url: /https:\\/\\/redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID:521/,\n  \"name\": \"Streamflow1US\",\n  \"before\": function(resolve, context) {\n    var dir = prompt(\"Please enter the arrangement number\", dir);\n    if( dir === null ){resolve(Libs.halt(\"Streamflow Cancelled\"));}\n    context.storage.set(\"ArrNum\", dir);\n    resolve();\n  },\n  \"fields\": [{\n    \"selector\": \"#RS_P411_6_ARRANGEMENT_NUM\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"#RS_P411_1_ORG_ID\",\n    \"value\": \"103\"\n  }, {\n    \"selector\": \"#RS_P411_7_DEBUG_1\",\n    \"value\": \"N\"\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 1
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,[0-9]+/,\n  \"name\": \"Streamflow General Page\",\n  \"fields\": [{\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 2
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,145/,\n  \"name\": \"Streamflow POBs\",\n  \"fields\": [{\n    \"selector\": \"#RS_P411_9_ARRANGEMENT_NUMBERS\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 3
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,148/,\n  \"name\": \"Streamflow Events\",\n  \"fields\": [{\n    \"selector\": \"#RS_P411_30_EVT_DATE_FROM\",\n    \"value\": \"01-Jan-01\"\n  }, {\n    \"selector\": \"#RS_P411_31_EVT_DATE_TO\",\n    \"value\": \"12-Dec-28\"\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 4
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,151/,\n  \"name\": \"Streamflow Deferrals\",\n  \"fields\": [{\n    \"selector\": \"#RS_P411_3_DEF_DATE_FROM\",\n    \"value\": \"01-Jan-01\"\n  }, {\n    \"selector\": \"#RS_P411_4_DEF_DATE_TO\",\n    \"value\": \"12-Dec-28\"\n  }, {\n    \"selector\": \"#RS_P411_6_ARRANGEMENT_NUM\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 5
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID,P411_RS_JC_CHAIN_PRG_ID:521,152/,\n  \"name\": \"Streamflow Submit\",\n  \"fields\": [{\n    \"selector\": \"button[id=B532596469587382720]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 6
      },
      {
        "code": "var rules = [{\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:412:[0-9]+::NO:412:P412_RS_JC_CHAIN_ID,P412_RS_JC_CHAIN_PRG_ID:521,141/,\n  \"name\": \"Streamflow Run\",\n  \"fields\": [{\n    \"selector\": \"button[id=B582223781029970730]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 7
      },
      {
        "code": "var rules = [{\n  url: /https:\\/\\/redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:411:[0-9]+::NO:411:P411_RS_JC_CHAIN_ID:521/,\n  \"name\": \"Streamflow1CA\",\n  \"before\": function(resolve, context) {\n    var dir = prompt(\"Please enter the arrangement number\", dir);\n    if( dir === null ){resolve(Libs.halt(\"Streamflow Cancelled\"));}\n    context.storage.set(\"ArrNum\", dir);\n    resolve();\n  },\n  \"fields\": [{\n    \"selector\": \"#RS_P411_6_ARRANGEMENT_NUM\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"ArrNum\");\n    }\n  }, {\n    \"selector\": \"#RS_P411_1_ORG_ID\",\n    \"value\": \"92\"\n  }, {\n    \"selector\": \"#RS_P411_7_DEBUG_1\",\n    \"value\": \"N\"\n  }, {\n    \"selector\": \"button[id=B537068299028464869]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}\n];",
        "tabId": 8
      },
	    {
        "code": "var rules = [{\n  \"name\": \"Man Line Cancel\",\n  url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:360:[0-9]+::NO:.*/,\n  \"fields\": [{\n    \"selector\": \"#P360_LINE_DESCRIPTION\",\n    \"value\": function($e, data){\n      var current = $e.val();   // Read the current fields content\n      if( current ){\n        return current;\n      }\n      return \"Manually Adjusted\";\n    }\n  },\n  {\n    \"selector\": \"#P360_QUANTITY\",\n    \"value\": \"0\"\n  },\n  {\n    \"selector\": \"#P360_UNIT_SELLING_PRICE\",\n    \"value\": \"0\"\n  },\n  {\n    \"selector\": \"#P360_ADJ_REASON\",\n    \"value\": \"RETROSPECTIVE LINE TERMINATION\"\n  },\n  {\n    \"selector\": \"#P360_ADJ_EFFECTIVE_DATE\",\n    \"value\": function($e, data) {\n      return context.storage.get(\"AdjDate\");\n    }\n  },\n  {\n    \"selector\": \"button[id=B205500123518793535]\",\n    \"value\": function($e, data) {\n      $e.trigger(\"click\");\n    }\n  }]\n}];",
        "tabId": 9
      },
      {
        "code": "var rules = [{\n    \"name\": \"Set Date\",\n    url: /.*redhat\\.revstreamcloud\\.com\\/ords\\/f\\?p=24104:360:[0-9]+::NO:.*/,\n  \"before\": function(resolve, context) {\n    var dir = prompt(\"Please enter Adjustment Date\", dir);\n    if( dir === null ){\n      resolve(Libs.halt(\"Cancelled\"));\n    }\n    context.storage.set(\"AdjDate\", dir);\n    resolve();\n  }  \n}];",
        "tabId": 10
      }
    ]
  }
}
