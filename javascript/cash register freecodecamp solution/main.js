function checkCashRegister(price, cash, cid) {
    var currency_Unit = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  }

  let remains = +(cash - price).toFixed(2)
  const total = +(cid.reduce((sum, cashes) => sum + cashes[1], 0)).toFixed(2)

  if (remains === total) {
    return 'Closed'
  }

  // Here is your change, ma'am.
  return cid.reverse()
    .reduce((returnVal, currCID, idx) => {
      const type = currCID[0] // currency type
      const val = currency_Unit[type] // currency value
      const avail = currCID[1] // currency available in drawer

      // amount to spend for this currency in drawer
      const usage = Math.floor(Math.min(avail, remains) / val) * val

      // remaining amount after deducing the used amount
      remains = +(remains - usage).toFixed(2)

      // if this is the last cash drawer and there are still change left
      if ((idx === cid.length - 1) && remains) {
        return 'Insufficient Funds'
      }

      // if currency used, then add it to value
      if (usage) {
        returnVal.push([type, usage])
      }

      return returnVal
    }, [])
}

console.log(
	checkCashRegister(19.50, 20.00, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.10],
		["QUARTER", 4.25],
		["ONE", 90.00],
		["FIVE", 55.00],
		["TEN", 20.00],
		["TWENTY", 60.00],
		["ONE HUNDRED", 100.00]
	])
)