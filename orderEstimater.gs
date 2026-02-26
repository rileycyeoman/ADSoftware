function getShipDate() {
  const sheet  = SpreadsheetApp.getActive();
  const inv = sheet.getSheetByName("Fan Inventory");
  const overview = sheet.getSheetByName("Overview");
  const overview_data = overview.getDataRange().getValues();
  const track = sheet.getActiveSheet();

  const model = track.getRange("L11").getValue;
  const reserved_range = sheet.getRange("D5:D" + sheet.getLastRow());
  const reservedVals = reserved_dates.getValues();
  const reserved_dates = reservedVals.map(row=> new Date(row[0]));

  // column indexing
  const B = 1;
  const D = 3;
  const E = 4;
  const F = 5;
  const N = 13;

  let curr_stock = 0;
  for (let i = 0; i < overview_data.length; i++){
    if (overview[i][D] === model){ //set total inventory
      curr_stock = Number(overview_data[i][N]);
      break;
    }
  }

  const inv_data = inv.getDataRange().getVales();
  let shipments = [];

  for (let i = 0; i < invData.length; i++){
    const rowModel = invData[i][F];
    const type = invData[i][B];
    if (rowModel === model && type === "Ship Date"){
      shipments.push({
        date: new Date(invData[i][D]),
        qty: Number(invData[i][E])
      });
    }
  }
  //ascending order
  shipments.sort((a,b) => a.date - b.date);


  let available = curr_stock; //running total
  const last_row = sheet.getLastRow();

  const reservedAmounts = sheet.getRange(F, E + 1, last_row - 4, 1).getValues();





}