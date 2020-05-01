window.addEventListener('DOMContentLoaded', () => {
  // const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

  // const trainingData = [
  //   { input: [0, 0], output: [0] },
  //   { input: [0, 1], output: [1] },
  //   { input: [1, 0], output: [1] },
  //   { input: [1, 1], output: [0] },
  // ];

  // net.train(trainingData);

  // console.log(net.run([0, 0]));
  // console.log(net.run([0, 1]))
  // console.log(net.run([1, 0]))
  // console.log(net.run([1, 1]))



  // // get restaurant name where kids eat free by giving day of the week
  // const restaurants = {
  //   'TGI': 'Monday',
  //   'KFC': 'Tuesday',
  //   'Nandos': 'Wednesday',
  //   'Pizza Hut': 'Thursday',
  //   'Pizza Express': 'Friday',
  //   'McDonalds': 'Saturday',
  //   'Frankie and Benny\'s': 'Sunday'
  // }

  // const trainingData = [];

  // for (let restaurantName in restaurants ) {
  //   const dayOfWeek = restaurants[restaurantName]
  //   trainingData.push({
  //     input: { [dayOfWeek]: 1 },
  //     output: { [restaurantName]: 1 }
  //   })
  // }

  // const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

  // const stats = net.train(trainingData)

  // const restaurantForToday = (dayOfWeek) => {
  //   const restaurants = net.run({ [dayOfWeek]: 1 })
  //   let highestRestaurant = 0
  //   let highestRestaurantName = ''
  //   for (let restaurantName in restaurants) {
  //     if (restaurants[restaurantName] > highestRestaurant) {
  //       highestRestaurant = restaurants[restaurantName]
  //       highestRestaurantName = restaurantName
  //     }
  //   }
  //   return highestRestaurantName
  // }

  // console.log(restaurantForToday('Thursday'))


  //stock market prediction

  //ftse100 data
  const rawData = [
    {"date": "2020-03-31", "open": 5563.70, "high": 5702.70, "low": 5545.90, "close": 5671.96},
    {"date": "2020-04-01", "open": 5672.00, "high": 5672.00, "low": 5414.70, "close": 5454.57},
    {"date": "2020-04-02", "open": 5454.57, "high": 5551.95, "low": 5396.41, "close": 5480.22}, 
    {"date": "2020-04-03", "open": 5480.22, "high": 5486.29, "low": 5396.66, "close": 5415.50}, 
    {"date": "2020-04-06", "open": 5415.50, "high": 5590.58, "low": 5415.50, "close": 5582.39}, 
    {"date": "2020-04-07", "open": 5582.40, "high": 5780.20, "low": 5582.40, "close": 5704.45}, 
    {"date": "2020-04-08", "open": 5704.50, "high": 5704.50, "low": 5589.70, "close": 5677.73},
    {"date": "2020-04-09", "open": 5677.70, "high": 5842.70, "low": 5677.70, "close": 5842.66},
    {"date": "2020-04-14", "open": 5842.70, "high": 5894.70, "low": 5779.00, "close": 5791.31}, 
    {"date": "2020-04-15", "open": 5791.30, "high": 5791.70, "low": 5576.40, "close": 5597.65},
    {"date": "2020-04-16", "open": 5597.70, "high": 5657.60, "low": 5577.80, "close": 5628.43}, 
    {"date": "2020-04-17", "open": 5628.40, "high": 5839.30, "low": 5628.40, "close": 5786.96}, 
    {"date": "2020-04-20", "open": 5787.00, "high": 5823.90, "low": 5707.70, "close": 5812.83}, 
    {"date": "2020-04-21", "open": 5812.80, "high": 5812.80, "low": 5641.00, "close": 5641.03}, 
    {"date": "2020-04-22", "open": 5641.00, "high": 5777.10, "low": 5641.00, "close": 5770.63},
    {"date": "2020-04-23", "open": 5770.60, "high": 5843.60, "low": 5735.90, "close": 5826.61}, 
    {"date": "2020-04-24", "open": 5826.60, "high": 5827.20, "low": 5728.80, "close": 5752.23}, 
    {"date": "2020-04-27", "open": 5752.20, "high": 5855.60, "low": 5752.20, "close": 5846.79}, 
    {"date": "2020-04-28", "open": 5846.80, "high": 5977.80, "low": 5835.90, "close": 5958.50}, 
    {"date": "2020-04-29", "open": 5958.50, "high": 6129.60, "low": 6115.30, "close": 6115.25}
  ]

  function scaleDown(step) { //normalize
    return {
      open: step.open / 5396,
      high: step.high / 5396,
      low: step.low / 5396,
      close: step.close / 5396
    }
  }

  function scaleUp(step) { //denormalize
    return {
      open: step.open * 5396,
      high: step.high * 5396,
      low: step.low * 5396,
      close: step.close * 5396
    }
  }

  const scaledData = rawData.map(scaleDown);

  const trainingData = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 10),
    scaledData.slice(10, 15),
    scaledData.slice(15, 20)
  ]


});
