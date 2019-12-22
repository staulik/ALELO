$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/FindAddress.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    },
    {
      "line": 2,
      "value": "#encoding: utf-8"
    }
  ],
  "line": 5,
  "name": "Manter Pesquisa de CEP",
  "description": "",
  "id": "manter-pesquisa-de-cep",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Buscar endereco por CEP",
  "description": "",
  "id": "manter-pesquisa-de-cep;buscar-endereco-por-cep",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou na pagina principal do correio",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "forneco o CEP desejado",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "posso  visualizar as informacoes retornadas",
  "keyword": "Entao "
});
formatter.match({
  "location": "FindAddrees.queEstou()"
});
formatter.result({
  "duration": 10930872400,
  "status": "passed"
});
formatter.match({
  "location": "FindAddrees.fornecoOCEPDesejado()"
});
formatter.result({
  "duration": 4347908000,
  "error_message": "java.lang.NullPointerException\r\n\tat br.com.empresa.steps.FindAddrees.fornecoOCEPDesejado(FindAddrees.java:34)\r\n\tat ✽.Quando forneco o CEP desejado(src/test/resources/features/FindAddress.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindAddrees.possoVisualizarAsInformaEsRetornadas()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Buscar endereco por Logradouro",
  "description": "",
  "id": "manter-pesquisa-de-cep;buscar-endereco-por-logradouro",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 13,
  "name": "que estou na pagina principal do correio",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "forneco o logradouro desejado",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "posso visualizar as informacoes",
  "keyword": "Entao "
});
formatter.match({
  "location": "FindAddrees.queEstou()"
});
formatter.result({
  "duration": 30779447501,
  "status": "passed"
});
formatter.match({
  "location": "FindAddrees.fornecoOLogradouroDesejado()"
});
formatter.result({
  "duration": 14043522099,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RSI1522\u0027, ip: \u0027192.168.1.37\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\SILVIO~1.AUL\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:54391}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d12e2e57fb2722ae8826e34d9c06827f\n*** Element info: {Using\u003dname, value\u003drelaxation}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat br.com.empresa.steps.FindAddrees.fornecoOLogradouroDesejado(FindAddrees.java:53)\r\n\tat ✽.Quando forneco o logradouro desejado(src/test/resources/features/FindAddress.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindAddrees.possoVisualizarAsInformacoes()"
});
formatter.result({
  "status": "skipped"
});
});