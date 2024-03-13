const cds = require('@sap/cds');
const axios = require('axios');

module.exports = (srv) => {

    const { GetPendingInvoiceList } = srv.entities;

    srv.on('READ', GetPendingInvoiceList, async (req) => {
        const params = req._queryOptions;
        const results = await getPendingInvoiceList(params);
        if (results.error) req.reject(500, results.error);
        return results

    });
};

async function getPendingInvoiceList(params) {
    try {
        const {
            UnitCode, PoNum, MrnNumber, FromPOdate, ToPOdate,
            FromMrndate, ToMrndate, Status
        } = params;

        const url = `https://imperialauto.co:84/IAIAPI.asmx/GetPendingInvoiceList?RequestBy='Manikandan'&UnitCode='${UnitCode}'&PoNum='${PoNum}'&MrnNumber='${MrnNumber}'&FromPOdate='${FromPOdate}'&ToPOdate='${ToPOdate}'&FromMrndate='${FromMrndate}'&ToMrndate='${ToMrndate}'&Status='${Status}'`;


        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Authorization': 'Bearer IncMpsaotdlKHYyyfGiVDg==',
                'Content-Type': 'application/json'
            },
            data: {}
        });

        if (response.data && response.data.d) {
            return JSON.parse(response.data.d);
        } else {
            return {
                error: response.data.ErrorDescription
            }
        }
    } catch (error) {
        console.error('Error in get Pending Invoice List API call:', error);
        throw new Error(error);
    }
}