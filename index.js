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

  const restaurants = {
    'TGI': 'Monday',
    'KFC': 'Tuesday',
    'Nandos': 'Wednesday',
    'Pizza Hut': 'Thursday',
    'Pizza Express': 'Friday',
    'McDonalds': 'Saturday',
    'Frankie and Benny\'s': 'Sunday'
  }

  const trainingData = [];

  for (let restaurantName in restaurants ) {
    const dayOfWeek = restaurants[restaurantName]
    trainingData.push({
      input: { [dayOfWeek]: 1 },
      output: { [restaurantName]: 1 }
    })
  }

  const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

  const stats = net.train(trainingData)

  // get restaurant name where kids eat free by giving day of the week
  const restaurantForToday = (dayOfWeek) => {
    const restaurants = net.run({ [dayOfWeek]: 1 })
    let highestRestaurant = 0
    let highestRestaurantName = ''
    for (let restaurantName in restaurants) {
      if (restaurants[restaurantName] > highestRestaurant) {
        highestRestaurant = restaurants[restaurantName]
        highestRestaurantName = restaurantName
      }
    }
    return highestRestaurantName
  }

  console.log(restaurantForToday('Thursday'))
});
