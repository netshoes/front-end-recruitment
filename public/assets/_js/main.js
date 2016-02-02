$(function(){
	
	var url = "assets/data/products.json";
	var priceCurrent = 0;
	
	$.ajax({
		url: url,
		dataType: "json",
		success: function(data){

			var itens = "";
			$.each(data.products, function(index, element) {

				//Parcelamento
				priceParcel =  element.price / element.installments;

				//Lista de produtos
				itens += '<div class="list-product" rel="' + element.sku + '">';
				itens += '	<img src="assets/img/' + element.imageProduct + '" alt="" />';
				itens += '	<h2>' + element.title + '</h2>';
				itens += '	<hr />';
				itens += '	<div class="price">';
				itens += '		<strong>' + element.currencyFormat + ' <span>' + element.price.toFixed(2).split('.')[0] + '</span>, ' + element.price.toFixed(2).split('.')[1] + '</strong>';
				itens += '		<strong>ou ' + element.installments + 'x de ' + element.currencyFormat + ' ' + priceParcel.toFixed(2).split('.') + '</strong>';
				itens += '	</div>';
				itens += '</div>';				
			});

			//Monta HTML da listagem de produto
			$("aside").html(itens);
		}
	});


	//Adicionar produto no carrinho
	$("aside").delegate(".list-product", "click", function(){
		
		$(".cart-empty").hide();
		var numberSku = $(this).attr("rel");

		$.ajax({
			url: url,
			dataType: "json",
			success: function(data){

				var itens = "";
				$.each(data.products, function(index, element) {

					//Identifica o NODE do SKU no json e monta seu HTML
					if (element.sku == numberSku) {
						itens += '<div class="list-product-cart">';
						itens += '	<div class="content-cart">';
						itens += '		<div class="image-product">';
						itens += '			<img src="assets/img/' + element.imageProduct + '" alt="' + element.title + '" />';
						itens += '		</div>';
						itens += '		<div class="description-product">';
						itens += '			<strong>' + element.title + '</strong>';
						itens += '			<p>' + element.availableSizes[1] + ' | ' + element.style + '</p>';
						itens += '			<p>Quantidade: 1</p>';
						itens += '		</div>';
						itens += '		<div class="price-product">';
						itens += '			<strong>' + element.currencyFormat + element.price.toFixed(2).split('.') + '</strong>';
						itens += '		</div>';
						itens += '		<a href="" class="remove-product" rel="' + numberSku + '">X</a>';
						itens += '	</div>';
						itens += '</div>';

						//Calcula o sub-total e parcelamento
						priceCurrent = priceCurrent + element.price;
						priceParcel = priceCurrent / 10;

						$(".price-total strong").html(element.currencyFormat + " " + priceCurrent.toFixed(2).split('.'));
						$(".price-total span").html("ou em até 10 X R$ " + priceParcel.toFixed(2).split('.'));
					}
				});

				//Monta HTML da listagem do carrinho
				$(itens).appendTo(".box-content-cart");

				//Atualiza quantidade de itens no carrinho
				itensCart();
			}
		});
	});


	//Remover produto do carrinho
	$(".box-content-cart").delegate(".remove-product", "click", function(event) {
		
		event.preventDefault();

		//Remove o produto clicado
		$(this).parents(".list-product-cart").remove();

		//Verifica se o carrinho esta vazio e mostra notificacao
		if ($(".box-content-cart .list-product-cart").length == 0) {
			$(".cart-empty").show();
		}

		var numberSku = $(this).attr("rel");

		$.ajax({
			url: url,
			dataType: "json",
			success: function(data){

				$.each(data.products, function(index, element) {

					//Identifica o NODE do SKU no json e monta seu HTML
					if (element.sku == numberSku) {

						//Calcula o sub-total e parcelamento
						priceCurrent = priceCurrent - element.price;
						priceParcel = priceCurrent / 10;

						$(".price-total strong").html(element.currencyFormat + " " + priceCurrent.toFixed(2).split('.'));
						$(".price-total span").html("ou em até 10 X R$ " + priceParcel.toFixed(2).split('.'));
					}
				});

				//Atualiza quantidade de itens no carrinho
				itensCart();
			}
		});		
	});


	//Funcao para verificar quantos itens existe no carrinho
	function itensCart(){
		$(".box-content-cart .list-product-cart").each(function(e){
			$(".title span").html(e + 1);
		});		
	}
});