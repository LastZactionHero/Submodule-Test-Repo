module("Model: Cookbook.Models.Ingredient")

asyncTest("findAll", function(){
	stop(2000);
	Cookbook.Models.Ingredient.findAll({}, function(ingredients){
		ok(ingredients)
        ok(ingredients.length)
        ok(ingredients[0].name)
        ok(ingredients[0].description)
		start()
	});
	
})

asyncTest("create", function(){
	stop(2000);
	new Cookbook.Models.Ingredient({name: "dry cleaning", description: "take to street corner"}).save(function(ingredient){
		ok(ingredient);
        ok(ingredient.id);
        equals(ingredient.name,"dry cleaning")
        ingredient.destroy()
		start();
	})
})
asyncTest("update" , function(){
	stop();
	new Cookbook.Models.Ingredient({name: "cook dinner", description: "chicken"}).
            save(function(ingredient){
            	equals(ingredient.description,"chicken");
        		ingredient.update({description: "steak"},function(ingredient){
        			equals(ingredient.description,"steak");
        			ingredient.destroy();
        			start()
        		})
            })

});
asyncTest("destroy", function(){
	stop(2000);
	new Cookbook.Models.Ingredient({name: "mow grass", description: "use riding mower"}).
            destroy(function(ingredient){
            	ok( true ,"Destroy called" )
            	start();
            })
})