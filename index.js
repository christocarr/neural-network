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
    {"date": "2020-03-31", "open": "5,563.70", "high": "5,702.70", "low": "5,545.90", "close": "5,671.96"},
    {"date": "2020-04-01", "open": "5,672.00", "high": "5,672.00", "low": "5,414.70", "close": "5,454.57"},
    {"date": "2020-04-02", "open": "5,454.57", "high": "5,551.95", "low": "5,396.41", "close": "5,480.22"}, 
    {"date": "2020-04-03", "open": "5,480.22", "high": "5,486.29", "low": "5,396.66", "close": "5,415.50"}, 
    {"date": "2020-04-06", "open": "5,415.50", "high": "5,590.58", "low": "5,415.50", "close": "5,582.39"}, 
    {"date": "2020-04-07", "open": "5,582.40", "high": "5,780.20", "low": "5,582.40", "close": "5,704.45"}, 
    {"date": "2020-04-08", "open": "5,704.50", "high": "5,704.50", "low": "5,589.70", "close": "5,677.73"},
    {"date": "2020-04-09", "open": "5,677.70", "high": "5,842.70", "low": "5,677.70", "close": "5,842.66"},
    {"date": "2020-04-14", "open": "5,842.70", "high": "5,894.70", "low": "5,779.00", "close": "5,791.31"}, 
    {"date": "2020-04-15", "open": "5,791.30", "high": "5,791.70", "low": "5,576.40", "close": "5,597.65"},
    {"date": "2020-04-16", "open": "5,597.70", "high": "5,657.60", "low": "5,577.80", "close": "5,628.43"}, 
    {"date": "2020-04-17", "open": "5,628.40", "high": "5,839.30", "low": "5,628.40", "close": "5,786.96"}, 
    {"date": "2020-04-20", "open": "5,787.00", "high": "5,823.90", "low": "5,707.70", "close": "5,812.83"}, 
    {"date": "2020-04-21", "open": "5,812.80", "high": "5,812.80", "low": "5,641.00", "close": "5,641.03"}, 
    {"date": "2020-04-22", "open": "5,641.00", "high": "5,777.10", "low": "5,641.00", "close": "5,770.63"},
    {"date": "2020-04-23", "open": "5,770.60", "high": "5,843.60", "low": "5,735.90", "close": "5,826.61"}, 
    {"date": "2020-04-24", "open": "5,826.60", "high": "5,827.20", "low": "5,728.80", "close": "5,752.23"}, 
    {"date": "2020-04-27", "open": "5,752.20", "high": "5,855.60", "low": "5,752.20", "close": "5,846.79"}, 
    {"date": "2020-04-28", "open": "5,846.80", "high": "5,977.80", "low": "5,835.90", "close": "5,958.50"}, 
    {"date": "2020-04-29", "open": "5,958.50", "high": "6,129.60", "low": "6,115.30", "close": "6,115.25"}
  ]



});
