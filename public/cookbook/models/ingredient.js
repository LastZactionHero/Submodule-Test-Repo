/**
 * @tag models, home
 * Wraps backend ingredient services.  Enables 
 * [Cookbook.Models.Ingredient.static.findAll retrieving],
 * [Cookbook.Models.Ingredient.static.update updating],
 * [Cookbook.Models.Ingredient.static.destroy destroying], and
 * [Cookbook.Models.Ingredient.static.create creating] ingredients.
 */
$.Model.extend('Cookbook.Models.Ingredient',
/* @Static */
{
	/**
 	 * Retrieves ingredients data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped ingredient objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/ingredient',
			type: 'get',
			dataType: 'json',
			data: params,
			success: this.callback(['wrapMany',success]),
			error: error,
			fixture: "//cookbook/fixtures/ingredients.json.get" //calculates the fixture path from the url and type.
		});
	},
	/**
	 * Updates a ingredient's data.
	 * @param {String} id A unique id representing your ingredient.
	 * @param {Object} attrs Data to update your ingredient with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/ingredients/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a ingredient's data.
 	 * @param {String} id A unique id representing your ingredient.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/ingredients/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a ingredient.
	 * @param {Object} attrs A ingredient's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/ingredients',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{});