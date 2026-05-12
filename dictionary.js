// dictionary.js
// Ez a fordítókulcs önmagában semmit nem ér a motor nélkül.
const WMO_MAP = {
    "OW": {
        200:95, 201:95, 202:95, 210:95, 211:95, 212:95, 221:95, 230:95, 231:95, 232:95,
        300:51, 301:53, 302:55, 310:51, 311:53, 312:55, 313:55, 314:55, 321:55,
        500:61, 501:63, 502:65, 503:65, 504:65, 511:66, 520:80, 521:81, 522:82, 531:82,
        600:71, 601:73, 602:75, 611:77, 612:77, 613:77, 615:71, 616:73, 620:85, 621:85, 622:85,
        701:45, 711:45, 721:45, 731:45, 741:45, 751:45, 761:45, 762:45, 771:45, 781:45,
        800:0, 801:1, 802:2, 803:3, 804:3
    },
    "WA": {
        1000:0, 1003:1, 1006:3, 1009:3, 1030:45, 1063:80, 1066:71, 1069:71, 1072:56, 1087:95,
        1114:71, 1117:73, 1135:45, 1148:48, 1150:51, 1153:51, 1168:56, 1171:57, 1180:61,
        1183:61, 1186:63, 1189:63, 1192:65, 1195:65, 1198:66, 1201:67, 1204:71, 1207:73,
        1210:71, 1213:71, 1216:73, 1219:73, 1222:75, 1225:75, 1237:77, 1240:80, 1243:81,
        1246:82, 1249:71, 1252:73, 1255:71, 1258:75, 1261:77, 1264:77, 1273:95, 1276:95,
        1279:95, 1282:95
    },
    "MN": {
        "clearsky":0, "clearsky_day":0, "clearsky_night":0, "clearsky_polartwilight":0,
        "fair":1, "fair_day":1, "fair_night":1, "fair_polartwilight":1,
        "partlycloudy":2, "partlycloudy_day":2, "partlycloudy_night":2, "partlycloudy_polartwilight":2,
        "cloudy":3, "fog":45,
        "lightrainshowers":80, "lightrainshowers_day":80, "lightrainshowers_night":80, "lightrainshowers_polartwilight":80,
        "rainshowers":81, "rainshowers_day":81, "rainshowers_night":81, "rainshowers_polartwilight":81,
        "heavyrainshowers":82, "heavyrainshowers_day":82, "heavyrainshowers_night":82, "heavyrainshowers_polartwilight":82,
        "lightrainshowersandthunder":95, "lightrainshowersandthunder_day":95, "lightrainshowersandthunder_night":95, "lightrainshowersandthunder_polartwilight":95,
        "rainshowersandthunder":95, "rainshowersandthunder_day":95, "rainshowersandthunder_night":95, "rainshowersandthunder_polartwilight":95,
        "heavyrainshowersandthunder":95, "heavyrainshowersandthunder_day":95, "heavyrainshowersandthunder_night":95, "heavyrainshowersandthunder_polartwilight":95,
        "lightrain":61, "rain":63, "heavyrain":65,
        "lightrainandthunder":95, "rainandthunder":95, "heavyrainandthunder":95,
        "lightsleetshowers":71, "lightsleetshowers_day":71, "lightsleetshowers_night":71, "lightsleetshowers_polartwilight":71,
        "sleetshowers":71, "sleetshowers_day":71, "sleetshowers_night":71, "sleetshowers_polartwilight":71,
        "heavysleetshowers":73, "heavysleetshowers_day":73, "heavysleetshowers_night":73, "heavysleetshowers_polartwilight":73,
        "lightsleetshowersandthunder":95, "lightsleetshowersandthunder_day":95, "lightsleetshowersandthunder_night":95, "lightsleetshowersandthunder_polartwilight":95,
        "sleetshowersandthunder":95, "sleetshowersandthunder_day":95, "sleetshowersandthunder_night":95, "sleetshowersandthunder_polartwilight":95,
        "heavysleetshowersandthunder":95, "heavysleetshowersandthunder_day":95, "heavysleetshowersandthunder_night":95, "heavysleetshowersandthunder_polartwilight":95,
        "lightsleet":71, "sleet":71, "heavysleet":73,
        "lightsleetandthunder":95, "sleetandthunder":95, "heavysleetandthunder":95,
        "lightsnowshowers":71, "lightsnowshowers_day":71, "lightsnowshowers_night":71, "lightsnowshowers_polartwilight":71,
        "snowshowers":73, "snowshowers_day":73, "snowshowers_night":73, "snowshowers_polartwilight":73,
        "heavysnowshowers":75, "heavysnowshowers_day":75, "heavysnowshowers_night":75, "heavysnowshowers_polartwilight":75,
        "lightsnowshowersandthunder":95, "lightsnowshowersandthunder_day":95, "lightsnowshowersandthunder_night":95, "lightsnowshowersandthunder_polartwilight":95,
        "snowshowersandthunder":95, "snowshowersandthunder_day":95, "snowshowersandthunder_night":95, "snowshowersandthunder_polartwilight":95,
        "heavysnowshowersandthunder":95, "heavysnowshowersandthunder_day":95, "heavysnowshowersandthunder_night":95, "heavysnowshowersandthunder_polartwilight":95,
        "lightsnow":71, "snow":73, "heavysnow":75,
        "lightsnowandthunder":95, "snowandthunder":95, "heavysnowandthunder":95
    }
};