import { AppRegistry } from 'react-native';
import App from './App';
import {Dialogflow_V2 as Dialogflow} from "react-native-dialogflow";

console.ignoredYellowBox = ['Remote debugger'];
/*
Dialogflow.setConfiguration(
    'chef-access@chef-ab805.iam.gserviceaccount.com',
    "-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDMm1z3wHH4Sley\\nCbrHgokMexGptBaMmRs3M+DIFllMUqo1XxgTYBR5+ZnizEqzjrvf9R1RMq7dyX0L\\nZTfCRsldHv1YUoLJi/x5xA+LiaO8LkvMCgSisnrj8Lsu0RDZGlGWTAhjTH1CRzfO\\nX81AVTFbayAuKTgK5naXqryG43uDmxpXtUfNFrZVz71h9TKGX8/pdUNxvs2+WGRX\\n0Ly3JIwag7EopKY3u+xHprM6NjMDWHtzQ2F/MwDfgrYcsmjF+KuVJMCuu98nNYaQ\\nJktbPcfXxHumTtLntDJsOczDWGk8VknEacrae797hP2TQurzsSGW0rmt2ja8kjW8\\n2bOAapFzAgMBAAECggEAALhzoEm5RinrJGzcNAXMlZu9Da9K4VJMa07YrLlrbF50\\nJ2s/GD5fTTryAEisUKuzOBlSqL/mA1Dt+EyEcxtVtTIrhu+9KXPR0Un0iFgwqsZ6\\nrNoyLdcQod1JOlFVulqQKI9Djkw/lhoXrEnf7ztrSLgzpAX5R1Ww26ZMoKiwj5Zu\\n+V3fK8ISfqen46x0mXQLHIJd9MpZOds8M1j02TPWRqa5ACkfPCi/HPwOTsjGwQVM\\nq+VRVSRlOztwbnZS4aA3R6YcmVHKUxIIgm8U+u/95ydwrB25Mrman++St+FF8tG7\\ng8efzI5X7j0iRG8hBpucd1jWpg+ZIm45xmLG970XtQKBgQD/kNlkH5KkEcs3RWkO\\n3d0OIqQ5NWanIbgz7E/bkWmSjC6OhxTHQFDn8gUdpYtUrjTwwUOIntpLWSj+2ENJ\\nl1+rVTC4gMOo2Ct8g9ugu3lfcabKbuzu7R2DBtpT7/jogWCgYUnGS0QRsGsPwrG+\\njsxxMknJjgOk92Os/XZvPnjYHwKBgQDM9FnTxDk7sKME1bov9hRQfr0w4o2JB2UZ\\nCK9UffKy+Q9mlWHz440aBocxSpIvS6ad5AHP97RxKgORL8nHXoEtZ19vGX30irNZ\\nebB/BlM0Bd07LUbre+CySIzwXDeFstXqQ9UijAxuyqIzs5qRO2HLTIGnQ0xUaZXx\\nNfDb5BDsLQKBgBc8zXd8I3JFp+urpQTUCZCKd9I319CkkUIvX4eAblAD7QvKnooL\\ngA/HAs4SSlv1xxyJBiH7B7BIOCEL+vpLCEjk4xwzoRbOKQ4WUzcHNN8Hz3miomqL\\nJt7OFbYCIOjLMsUCc5nTKCpPlzyEoHLKOy6juu/XuN8cG3UUStuMm6JTAoGANjyn\\nlMnFl40r5rikd9K4F4EikdAyQkPpthE9TK+zzTbpo2z+qerayTtXBW1FeCyd4ASZ\\nki5r2tKSdRZfYFoa9yf28lCdq1wVECWK1mKXHBo9LE7UCLcUhDl8ypKswr3LrB3d\\nRjInjB4lhGcQDUTYoVMSsG+3wFLcsiNjJN2auNUCgYAOv9VWIRqN+4ZLa9HMP9FT\\nHdFEp7ioPdnLhDjjwyBcSGq4rKv3rpVxm/9WG2iULX+DZQ3h+6Ea21mqM4m6OdHt\\n9GZ7j1uHt7nIeNHKFZz4F+RITY7VV1Jf1raf6oJ1pJp3NGph2RB1+Am6n9GL7zk7\\nixLT2FYpEvwOKsVP/BU7/Q==\\n-----END PRIVATE KEY-----\\n",
    Dialogflow.LANG_ENGLISH,
    'chef-ab805');

Dialogflow.onListeningStarted(()=>{
    console.log("listening started");
});

Dialogflow.onListeningFinished(()=>{
    console.log("listening finished");
});
*/

AppRegistry.registerComponent('Chef', () => App);
