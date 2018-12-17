const lnService = require('ln-service')

async function test(){
    let lndInstance = await lnService.lightningDaemon({
        cert: 'base64 encoded tls.cert',
        host: 'btcpayhost.com:443',
        macaroon: 'base64 encoded macaroon',
      });
    console.log(lndInstance)
    return lndInstance
}

test()
.then(lnd => {
    let websocket = lnService.subscribeToInvoices({lnd})
    console.log(websocket)
})
.catch(err => {console.log(err)})