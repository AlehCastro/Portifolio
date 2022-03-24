const conteiner2 = document.querySelector('.conteiner');
		for (var i = 1; i <= 7; i++){
			const hearts = document.createElement('div');
			hearts.classList.add('heart');
			conteiner2.appendChild(hearts);

			const hearts2 = document.createElement('div');
			hearts2.classList.add('heart2');
			conteiner2.appendChild(hearts2);

			const hearts3 = document.createElement('div');
			hearts3.classList.add('heart3');
			conteiner2.appendChild(hearts3);
		}
		
		function animateHearts(){
			
			anime({
				targets: ['.heart','.heart2','.heart3'],
				translateX: function(){
					return anime.random(-700,700);
				},
				translateY: function(){
					return anime.random(-500,500);
				},
				scale:function(){
					return anime.random(1,4);
				},
				easing: 'easeInOutBack',
				duration: 3000,
				delay: anime.stagger(10),
				complete: animateHearts,
			})
		};
		

		animateHearts();