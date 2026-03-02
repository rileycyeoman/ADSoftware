function getShipDate() {

  const ss = SpreadsheetApp.getActive();
  const inv = ss.getSheetByName("Fan Inventory");
  const overview = ss.getSheetByName("Overview");
  const track = ss.getActiveSheet();

  const model = track.getRange("L11").getValue(); //this is assuming L11 will always be the part number

  const overview_data = overview.getDataRange().getValues();
  const inv_data = inv.getDataRange().getValues();

  const last_row = track.getLastRow();

  //column indexing
  const B = 1;
  const D = 3;
  const E = 4;
  const F = 5;
  const H = 7;
  const N = 13;

  //set current stock 
  let curr_stock = 0;

  for (let i = 0; i < overview_data.length; i++) {
    if (overview_data[i][D] === model) {
      curr_stock = Number(overview_data[i][H]) || 0;
      break;
    }
  }
  console.log("Starting stock: " + curr_stock);

  //get a running tally of all incoming shipments of the part
  let shipments = [];

  for (let i = 0; i < inv_data.length; i++) {

    const rowModel = inv_data[i][F];
    const type = inv_data[i][B];

    if (rowModel === model && type === "Ship Date") {
      shipments.push({
        date: new Date(inv_data[i][D]),
        qty: Number(inv_data[i][E]) || 0
      });
    }
  }

  //sort in ascending order
  shipments.sort((a, b) => a.date - b.date);

  //list of all rows we will look at
  const reserved_range = track.getRange("D5:D" + last_row);
  const reserved_vals = reserved_range.getValues();

  let reservations = [];

  for (let i = 0; i < reserved_vals.length; i++) {
    const rowDate = reserved_vals[i][0];

    if (rowDate instanceof Date) {
      reservations.push({
        row: i + 5,  //starts at 5
        date: new Date(rowDate)
      });
    }
  }

  // sort by by date
  reservations.sort((a, b) => a.date - b.date);

  // allocate by date
  let available = curr_stock;
  let shipmentIndex = 0;
  let usedCurrent = false;
  let shipDate = null;
  for (let r = 0; r < reservations.length; r++) {

    const res = reservations[r];
    const hCell = track.getRange(res.row, 8); // Column H
    const qtyRequested = Number(track.getRange(res.row, 9).getValue()) || 0; // Column I

    // reduce amount available
    available -= qtyRequested;

    // if still >= 0, we had enough stock
    if (available >= 0 && !usedCurrent) {
      hCell.setValue("Available");
      console.log("Remaining Fans: " + available);
      continue;
    }
    usedCurrent = true;
    // otherwise we have a deficit. keep pulling shipments
    // if availability is negative and the index is still within range
    while (available < 0 && shipmentIndex < shipments.length) {
      available += shipments[shipmentIndex].qty;
      shipDate = shipments[shipmentIndex].date;
      shipmentIndex++;
    }

    if (available >= 0 && shipDate) {
      hCell.setValue(shipDate);
    } 
    else {
      hCell.setValue("Needs additional ordering.");
    }
    console.log("Remaining Fans: " + available);
  }

}