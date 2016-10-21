app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
	$scope.mains = [
    	{
        name: 'Calzone',
        description: 'Egg, Ham, Mozarella, Mushrooms',
        price: '15.95'
      },
    	
    	{
        name: 'Margeritha',
        description: 'Mozarella, Tomatoe sauce',
        price: '11.95'
      },
    	
    	{
        name: 'Hawaian',
        description: 'Mozarella, Tomatoe sauce, Ham, Pineapple',
        price: '13.95'
      }
  ];
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  
  $scope.extras = [
    	{
      name: 'Arrancini',
      description: 'Rice, tomatoe sauce',
      price: 6.95
      },
      {
        name: 'Buffalo wings',
        description: 'BBQ sauce chicken',
        price: 4.95
      },
      {
        name: 'Gelato',
        description: 'Chocolate, Vanilla, Pistachio, Strawberry, Caramel, Mocho',
        price: 2.95
      }
  ];

}]);