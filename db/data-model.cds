namespace my.invoicestatus;

entity GetPendingInvoiceList {
  key PONumber                    : String;
      PODate                      : String;
      VendorCode                  : String;
      VendorName                  : String;
      PlantCode                   : String;
      PlantName                   : String;
      POTotalAmount               : String;
      POTotalQuantity             : String;
      MRNNumber                   : String;
      VoucherNumber               : String;
      MRNDate                     : String;
      MRNQuantity                 : String;
      MRNCurrency                 : String;
      MRNQuantityReceived         : String;
      MRNQuantityRejected         : String;
      MRNQuantityReceivedLocation : String;
      ASNQuantity                 : String;
      InvoiceStatus               : String;
      SendToAccDate               : String;
      TillDatePurchaseVal         : String;
      DedTds                      : String;
      TotalDebit                  : String;
      TotalCredit                 : String;
      VoucherType                 : String;
      AccCode                     : String;
      AccDesc                     : String;
      ReceiptDate                 : String;
}